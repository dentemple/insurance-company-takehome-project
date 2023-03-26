export type FetchType = 'get' | 'update' | 'submit'

export interface FetchGetQuoteQrgs {
  resume: QuoteMetaState['resume']
  type?: FetchType
}

export interface FetchUpdateQuoteArgs {
  quote: QuoteMetaState['quote']
  type: FetchType
}

export interface QuoteMetaState {
  error: any
  quote: UserQuote | null
  price: {
    currency: string | null
    value: number | null
  }
  resume: string | null
  status: 'idle' | 'loading' | 'failed'
}

export interface UserQuote {
  id?: number
  firstName?: string
  lastName?: string
  dob?: string
  addressStreet?: string
  addressCity?: string
  addressState?: string
  addressPostal?: string
  vehicles?: Vehicle[]
}

export interface Vehicle {
  vin?: string
  year?: number
  make?: string
  model?: string
}
