/* components */
import { ExternalLink, Logo, Section } from "src/components";

/* assets */
import reactLogo from "src/assets/images/react.svg";
import viteLogo from "/vite.svg";

/* types */
export interface ViteProps {}

/**
 * Section component
 */
export function Vite({ ...rest }: ViteProps) {
  return (
    <Section as="header" {...rest}>
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
