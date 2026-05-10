export function CodeEditorLayout({ children }) {
  return (
    <div className="code-editor">
      <div className="code-editor__content">
        {children}
      </div>
    </div>
  );
}