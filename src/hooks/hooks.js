import { useCallback, useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = useCallback(() => setIsOpen((state) => !state), []);
  return [isOpen, toggle];
};
