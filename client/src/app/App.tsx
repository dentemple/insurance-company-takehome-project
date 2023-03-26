/* components */
import GlobalStyle from "./GlobalStyle";
import Provider from "./Provider";
import Screens from "./Screens";
import { Vite } from "src/features";

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Vite />
      <main>
        <Screens />
      </main>
    </Provider>
  );
}

export default App;
