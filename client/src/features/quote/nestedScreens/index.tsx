import QuoteEditScreen from './quoteEditScreen/QuoteEditScreen'
import QuoteShowScreen from './QuoteShowScreen'
import QuoteStartScreen from './QuoteStartScreen'

import { ROUTES } from '../../../app/constants'

export { QuoteEditScreen, QuoteShowScreen, QuoteStartScreen }

export const nestedScreens = [
  {
    path: ROUTES.QUOTE_START,
    element: <QuoteStartScreen />,
  },
  {
    path: ROUTES.QUOTE_EDIT,
    element: <QuoteEditScreen />,
  },
  {
    path: ROUTES.QUOTE_SHOW,
    element: <QuoteShowScreen />,
  },
]
