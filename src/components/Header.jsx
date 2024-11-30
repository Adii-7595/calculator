import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>Welcome to Theme Context Demo</h1>
      <p>Current theme is: {theme}</p>
    </header>
  );
}