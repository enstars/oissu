import { updateLocalStates } from "../index";
import { useState, useEffect } from "react";

export default function useLocalState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const localValue = window.localStorage.getItem(`oissu-${key}`);
    return localValue !== null ? JSON.parse(localValue) : defaultValue;
  });

  useEffect(() => {
    function handleSync() {
      const localValue = JSON.parse(
        window.localStorage.getItem(`oissu-${key}`)
      );
      if (localValue !== state) setState(localValue);
    }
    document.addEventListener("syncLocalStates", handleSync);
    return () => {
      document.removeEventListener("syncLocalStates", handleSync);
    };
  }, [key, state]);

  useEffect(() => {
    const localValue = JSON.parse(window.localStorage.getItem(`oissu-${key}`));
    if (localValue !== state) {
      window.localStorage.setItem(`oissu-${key}`, JSON.stringify(state));
      updateLocalStates();
    }
  }, [key, state]);

  return [state, setState];
}
