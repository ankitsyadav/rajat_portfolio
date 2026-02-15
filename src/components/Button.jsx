export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const buttonClass = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
