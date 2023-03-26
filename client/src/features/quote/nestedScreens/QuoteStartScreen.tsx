import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* components */
import { Box, Button, Loading } from 'src/components'

/* state */
import { asyncActions } from 'src/features/quote/state'
import { useAppDispatch } from 'src/state/hooks'

/* helpers */
import * as constants from 'src/app/constants'

/* types */
export interface QuoteStartScreenProps {}

/**
 * Nested screen component
 */
export function QuoteStartScreen({ ...rest }: QuoteStartScreenProps) {
  /* library hooks */
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  /* state hooks */
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  /* render */
  const renderButtonContents = isLoading ? <Loading /> : <span>Get a Quote, Today!</span>
  const renderError = errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>

  return (
    <Box {...rest}>
      <Button onClick={handleClick} disabled={isLoading}>
        {renderButtonContents}
      </Button>
      {renderError}
    </Box>
  )

  // --------------------------
  /* event handlers */
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    setIsLoading(true)
    setErrorMessage('')
    setTimeout(async () => {
      await handleFetches()
    }, constants.FETCH_TIMEOUT)
  }

  /* async callbacks */
  async function handleFetches() {
    // First leg --> Initiate a quote, get a resume resource uri
    const { error: leg1Error, resume } = await dispatch(asyncActions.fetchInitiateQuote()).unwrap()
    if (leg1Error) return void handleError(leg1Error)

    // Second leg --> Fetch the resource uri, populate the store with the quote
    const { error: leg2Error } = await dispatch(asyncActions.fetchCurrentQuote({ resume })).unwrap()

    setIsLoading(false)
    if (leg2Error) return void handleError(leg2Error)

    return void navigate(constants.ROUTES.QUOTE_EDIT)
  }

  /* sync callbacks */
  function handleError(error: string) {
    console.error(error)
    setErrorMessage(error)
  }
}

export default QuoteStartScreen
