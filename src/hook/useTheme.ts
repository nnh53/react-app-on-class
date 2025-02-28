import { useThemeMode } from "flowbite-react";

const useTheme = () => {
  const { mode: currentTheme, setMode, toggleMode } = useThemeMode();

  const getTheme = () => {
    return currentTheme;
  };

  const changeTheme = () => {
    toggleMode();
  };

  return { getTheme, changeTheme };
};

export default useTheme;
