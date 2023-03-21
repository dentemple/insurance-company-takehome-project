/* components */
import GlobalStyle from "./GlobalStyle";
import Provider from "./Provider";
import { Quotes, Vite } from "../features";

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Vite />
      <Quotes />
    </Provider>
  );
}

export default App;
