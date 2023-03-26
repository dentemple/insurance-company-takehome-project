import { Outlet } from 'react-router-dom'

/* components */
import { Section } from '../../components'

/* types */
export interface QuoteProps {}

export function Quote({ ...rest }: QuoteProps) {
  return (
    <Section {...rest}>
      <h2>Quote</h2>
      <Outlet />
    </Section>
  )
}

export default Quote
