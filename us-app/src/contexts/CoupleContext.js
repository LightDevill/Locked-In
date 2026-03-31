import { createContext, useContext, useMemo, useState } from 'react';
const CoupleContext = createContext({});
export function CoupleProvider({ children }) {
  const [couple, setCouple] = useState(null);
  const value = useMemo(() => ({ couple, setCouple }), [couple]);
  return <CoupleContext.Provider value={value}>{children}</CoupleContext.Provider>;
}
export const useCoupleContext = () => useContext(CoupleContext);
