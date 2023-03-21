import { useEffect, useState } from "react";
/* components */
import { Section } from "../../components";

export function Quotes() {
  const [quote, setQuote] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("idle");

  return (
    <Section>
      <h2>Get a Quote, Today!</h2>
    </Section>
  );
}

export default Quotes;
