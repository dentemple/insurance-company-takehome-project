import { MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/* components */
import { Box, Button } from 'src/components'

/* state */
import { selectors } from 'src/features/quote/state'

/* helpers */
import * as constants from 'src/app/constants'

/* types */
export interface QuoteShowScreenProps {}

export function QuoteShowScreen({ ...rest }: QuoteShowScreenProps) {
  /* library hooks */
  const navigate = useNavigate()
  const price = useSelector(selectors.selectPrice)

  const formattedPrice = formatCurrency(price?.value)

  return (
    <Box {...rest}>
      <h3>Your Price Quote</h3>
      <p>{formattedPrice}</p>
      <Button onClick={handleClick}>Edit Quote</Button>
    </Box>
  )

  // --------------------------
  /* event handlers */
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    navigate(constants.ROUTES.QUOTE)
  }

  /* sync callbacks */
  function formatCurrency(value: number | null) {
    if (typeof value !== 'number') return null
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency || 'USD',
    }).format(value)
  }
}

export default QuoteShowScreen
