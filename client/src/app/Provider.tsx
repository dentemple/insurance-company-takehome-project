import { Provider as ReduxProvider } from "react-redux";
import { store } from "src/state/store";

export interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Provider;
