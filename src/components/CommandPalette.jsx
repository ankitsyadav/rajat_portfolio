import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, personalInfo } from '../data/portfolio';

const sectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

function fuzzyMatch(text, query) {
  if (!query) return true;
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function highlightProject(id) {
  scrollTo('projects');
  const el = document.querySelector(`[data-project-id="${id}"]`);
  if (el) {
    el.style.transition = 'box-shadow 0.3s';
    el.style.boxShadow = '0 0 0 2px var(--accent), 0 0 20px var(--accent-glow)';
    setTimeout(() => { el.style.boxShadow = ''; }, 2500);
  }
}

const searchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const items = useMemo(() => {
    const result = [];
    for (const s of sectionItems) {
      result.push({ ...s, category: 'Navigate', action: () => scrollTo(s.id) });
    }
    for (const p of projects) {
      result.push({
        id: `proj-${p.id}`,
        label: p.title,
        category: 'Projects',
        action: () => highlightProject(p.id),
      });
    }
    return result.concat([
      { id: 'action-resume', label: 'Download Resume', category: 'Actions', action: () => {
        const link = document.createElement('a');
        link.href = '/Rajat_resume.pdf';
        link.download = 'Rajat_Yadav_Frontend_Engineer_Resume.pdf';
        link.click();
      }},
      { id: 'action-github', label: 'Open GitHub', category: 'Actions', action: () => window.open(personalInfo.github, '_blank') },
      { id: 'action-linkedin', label: 'Open LinkedIn', category: 'Actions', action: () => window.open(personalInfo.linkedin, '_blank') },
      { id: 'action-calculator', label: 'Try the Live Calculator', category: 'Actions', action: () => scrollTo('live-calculator') },
      { id: 'action-email', label: 'Copy Email', category: 'Actions', action: () => { navigator.clipboard.writeText(personalInfo.email).catch(() => {}); } },
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filtered = useMemo(() => items.filter(item => fuzzyMatch(item.label, query)), [items, query]);

  useEffect(() => { setSelectedIndex(0); }, [filtered.length]);

  const handleSelect = useCallback((index) => {
    const item = filtered[index];
    if (item) { item.action(); onClose(); }
  }, [filtered, onClose]);

  const handleKey = useCallback((e) => {
    switch (e.key) {
      case 'Escape': e.preventDefault(); onClose(); break;
      case 'ArrowDown': e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, filtered.length - 1)); break;
      case 'ArrowUp': e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)); break;
      case 'Enter': e.preventDefault(); handleSelect(selectedIndex); break;
    }
  }, [filtered, selectedIndex, handleSelect, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    function trap(e) {
      if (e.key !== 'Tab') return;
      e.preventDefault();
      const focusable = document.querySelectorAll('.cmd-k button, .cmd-k input');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) last.focus();
      else if (!e.shiftKey && document.activeElement === last) first.focus();
    }
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen]);

  useEffect(() => {
    const el = listRef.current?.children[selectedIndex];
    el?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cmd-k-group"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh' }}
        >
          <motion.div
            className="cmd-k-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />
          <motion.div
            className="cmd-k"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={handleKey}
          >
            <div className="cmd-k__search">
              {searchIcon}
              <input
                ref={inputRef}
                className="cmd-k__input"
                type="text"
                placeholder="Search commands & pages..."
                value={query}
                onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
                onKeyDown={handleKey}
              />
            </div>
            <div className="cmd-k__results" ref={listRef}>
              {filtered.length === 0 && (
                <div className="cmd-k__empty">No results found.</div>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  className={`cmd-k__item${i === selectedIndex ? ' cmd-k__item--selected' : ''}`}
                  onClick={() => handleSelect(i)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  type="button"
                >
                  <span className="cmd-k__item-category">{item.category}</span>
                  <span className="cmd-k__item-label">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="cmd-k__footer">
              <span className="cmd-k__footer-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span className="cmd-k__footer-hint"><kbd>↵</kbd> select</span>
              <span className="cmd-k__footer-hint"><kbd>esc</kbd> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
