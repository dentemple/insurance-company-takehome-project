import { FormEvent, MouseEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

/* components */
import { Box, Loading } from 'src/components'
import { FormFields } from './ui/FormFields'
import { FormHeading } from './ui/FormHeading'
import { InputButton } from './ui/InputButton'

/* state */
import { selectors, asyncActions } from 'src/features/quote/state'
import { useAppDispatch } from 'src/state/hooks'
import * as types from 'src/features/quote/@types'

/* helpers */
import * as constants from 'src/app/constants'
import * as utils from 'src/features/quote/utils'

/* types */
export interface QuoteEditScreenProps {}

/** Nested screen component */
export function QuoteEditScreen({ ...rest }: QuoteEditScreenProps) {
  /* library hooks */
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const quote = useSelector(selectors.selectQuote) || {}

  /* state hooks */
  const [isLoading, setIsLoading] = useState(false)
  const [newQuote, setNewQuote] = useState({
    ...quote,
    vehicles: null /* handled separately */,
  })
  const [vehicles, setVehicles] = useState(quote.vehicles || [{}, {}, {}]) // hard-coded to three just as proof of concept
  const [errorMessage, setErrorMessage] = useState('')

  /* prop lists */
  const formfieldsProps = {
    errorMessage,
    handleChange,
    handleClick,
    isLoading,
    quote,
    ...rest,
  }

  const updateProps = {
    name: 'update',
    onClick: handleClick,
    style: { background: 'transparent' },
    type: 'submit',
    value: 'Update Quote',
  }

  const submitProps = {
    name: 'submit',
    onClick: handleClick,
    type: 'submit',
    value: 'Submit Quote',
  }

  /* render */
  const renderLoading = isLoading && <Loading />
  const renderError = errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>

  return (
    <Box {...rest}>
      <FormHeading>Submit Quote</FormHeading>
      <Box as='form'>
        <FormFields {...formfieldsProps} />
        {renderLoading}
        {renderError}
        <InputButton {...updateProps} />
        <InputButton {...submitProps} />
      </Box>
    </Box>
  )

  // --------------------------
  /* event handlers */
  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    if (utils.isVehicle(name)) {
      setVehicles(updateVehicle(name, value))
    } else {
      setNewQuote({ ...newQuote, [name]: value })
    }
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setErrorMessage('')

    const { name } = e.currentTarget
    const type = name === 'update' ? 'update' : 'submit'

    const updatedQuote = { ...quote, ...newQuote, vehicles }

    setTimeout(async () => {
      await handleFetch(updatedQuote, type)

      if (!errorMessage && type === 'submit') {
        return void navigate(constants.ROUTES.QUOTE_SHOW)
      }
    }, constants.FETCH_TIMEOUT)
  }

  /* async callbacks */
  async function handleFetch(updatedQuote: types.UserQuote, type: types.FetchType) {
    setIsLoading(true)
    const { json, error } = await dispatch(
      asyncActions.fetchUpdateQuote({ quote: updatedQuote, type })
    ).unwrap()

    setIsLoading(false)
    const actionError = error || json?.error

    if (error || json?.error) {
      setErrorMessage(actionError)
    }
  }

  /* sync callbacks */
  function updateVehicle(name: any = '', value: any = '') {
    const [_, key, index] = name.split('|')
    const newVehicle = { ...vehicles[index], [key]: value }
    return [...vehicles.slice(0, +index), newVehicle, ...vehicles.slice(+index + 1)]
  }
}

export default QuoteEditScreen
