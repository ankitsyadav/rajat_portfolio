import { useState, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import '../styles/live-calculator.css';

let nextId = 1;

const itemVariants = {
  hidden: { opacity: 0, x: -20, height: 0, marginBottom: 0 },
  visible: {
    opacity: 1, x: 0, height: 'auto', marginBottom: 8,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0, x: 20, height: 0, marginBottom: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

const totalVariants = {
  initial: { scale: 1 },
  tap: {
    scale: [1, 1.08, 1],
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

function formatCurrency(n) {
  return `$${n.toFixed(2)}`;
}

export function LiveSpendCalculator() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [cycle, setCycle] = useState('monthly');
  const [sortAsc, setSortAsc] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const nameRef = useRef(null);
  const totalRef = useRef(null);

  const addItem = useCallback(() => {
    const trimmed = name.trim();
    const parsed = parseFloat(cost);
    if (!trimmed || isNaN(parsed) || parsed <= 0) return;

    const monthly = cycle === 'yearly' ? parsed / 12 : parsed;

    setItems((prev) => [...prev, { id: nextId++, name: trimmed, cost: parsed, cycle, monthly }]);
    setName('');
    setCost('');
    setAnimKey((k) => k + 1);
    nameRef.current?.focus();
  }, [name, cost, cycle]);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const sorted = useMemo(() => {
    const copy = [...items];
    if (sortAsc) copy.sort((a, b) => a.monthly - b.monthly);
    return copy;
  }, [items, sortAsc]);

  const totalMonthly = useMemo(
    () => items.reduce((sum, item) => sum + item.monthly, 0),
    [items],
  );

  const handleKey = (e) => {
    if (e.key === 'Enter') addItem();
  };

  return (
    <section className="live-calculator" id="live-calculator">
      <div className="container">
        <SectionHeader
          label="Live Demo"
          title="Subscription Cost Calculator"
          subtitle=""
        />
        <p className="live-calculator__intro">
          A small live demo — because a portfolio should prove skills, not just describe them.
        </p>

        <div className="live-calculator__card">
          <h3 className="live-calculator__card-title">
            Try It Live — Subscription Cost Calculator
          </h3>

          <div className="live-calculator__form" role="group" aria-label="Add a subscription">
            <div className="live-calculator__field">
              <label htmlFor="calc-name" className="live-calculator__label">Name</label>
              <input
                id="calc-name"
                ref={nameRef}
                className="live-calculator__input live-calculator__input--name"
                type="text"
                placeholder="e.g. Netflix"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKey}
                autoComplete="off"
              />
            </div>

            <div className="live-calculator__field">
              <label htmlFor="calc-cost" className="live-calculator__label">Cost</label>
              <input
                id="calc-cost"
                className="live-calculator__input live-calculator__input--cost"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                onKeyDown={handleKey}
                autoComplete="off"
              />
            </div>

            <div className="live-calculator__field">
              <span className="live-calculator__label" id="calc-cycle-label">Billing</span>
              <div className="live-calculator__toggle" role="radiogroup" aria-labelledby="calc-cycle-label">
                <button
                  className="live-calculator__toggle-btn"
                  style={cycle === 'monthly' ? { background: 'var(--accent)', color: 'white' } : {}}
                  onClick={() => setCycle('monthly')}
                  role="radio"
                  aria-checked={cycle === 'monthly'}
                >
                  Monthly
                </button>
                <button
                  className="live-calculator__toggle-btn"
                  style={cycle === 'yearly' ? { background: 'var(--accent)', color: 'white' } : {}}
                  onClick={() => setCycle('yearly')}
                  role="radio"
                  aria-checked={cycle === 'yearly'}
                >
                  Yearly
                </button>
              </div>
            </div>

            <button
              className="live-calculator__add-btn"
              onClick={addItem}
              aria-label="Add subscription"
            >
              + Add
            </button>
          </div>

          <hr className="live-calculator__divider" />

          <ul className="live-calculator__list" aria-label="Subscription list" aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              {sorted.length === 0 && (
                <motion.li
                  key="empty"
                  className="live-calculator__empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  No subscriptions added yet. Add one above.
                </motion.li>
              )}

              {sorted.map((item) => (
                <motion.li
                  key={item.id}
                  className="live-calculator__item"
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="live-calculator__item-info">
                    <span className="live-calculator__item-name">{item.name}</span>
                    <span className="live-calculator__item-meta">
                      {item.cycle === 'yearly' ? `$${item.cost.toFixed(2)} / yr` : `$${item.cost.toFixed(2)} / mo`}
                    </span>
                  </div>
                  <span className="live-calculator__item-cost">
                    {formatCurrency(item.monthly)}<span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>/mo</span>
                  </span>
                  <button
                    className="live-calculator__item-delete"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          <div className="live-calculator__footer">
            <button
              className="live-calculator__sort-btn"
              onClick={() => setSortAsc((s) => !s)}
              aria-pressed={sortAsc}
            >
              {sortAsc ? '← Unsorted' : 'Sort by cost ↑'}
            </button>

            <div className="live-calculator__total" ref={totalRef} aria-live="polite" aria-atomic="true">
              <span className="live-calculator__total-label">Monthly total</span>
              <motion.span
                className="live-calculator__total-value"
                key={`${totalMonthly}-${animKey}`}
                variants={totalVariants}
                initial="initial"
                animate="tap"
              >
                {formatCurrency(totalMonthly)}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
