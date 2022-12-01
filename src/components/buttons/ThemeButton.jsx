import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks";

export const ThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};
