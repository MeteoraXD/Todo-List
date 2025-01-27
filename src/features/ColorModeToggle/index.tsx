import DarkModeIcon from '@/components/icons/DarkModeIcon';
import LightModeIcon from '@/components/icons/LightModeIcon';
import { useTheme } from '@/context/ThemeContext';
import { TrrigerButton } from '@/features/PopOver/LogoutPopOver/PopOver.css.ts';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={TrrigerButton}>
      {theme === 'light' ? <><DarkModeIcon /> Dark Mode</> : <> <LightModeIcon /> White Mode</>}
    </button>
  );
};

export default ThemeToggle;