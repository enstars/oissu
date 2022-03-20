import { useState, useEffect } from "react";

export default function useLocalState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const localValue = window.localStorage.getItem(`oissu-${key}`);
    return localValue !== null ? JSON.parse(localValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(`oissu-${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
