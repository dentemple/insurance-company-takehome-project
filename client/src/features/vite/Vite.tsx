/* components */
import { ExternalLink, Logo, Section } from "../../components";

/* assets */
import reactLogo from "../../assets/images/react.svg";
import viteLogo from "/vite.svg";

export function Vite() {
  return (
    <Section>
      <h1>Vite + React</h1>
      <div>
        <ExternalLink href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </ExternalLink>
        <ExternalLink href="https://reactjs.org" target="_blank">
          <Logo src={reactLogo} className="react" alt="React logo" />
        </ExternalLink>
      </div>
    </Section>
  );
}

export default Vite;
