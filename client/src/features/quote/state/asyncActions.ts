import { createAsyncThunk } from '@reduxjs/toolkit'

/* helpers */
import { BASE_QUOTES_URL } from 'src/app/constants'
import { whitelistQuote } from 'src/features/quote/utils'
import { selectResume } from './selectors'

/* types */
import * as types from '../@types'
import { RootState } from 'src/state/store'

export const fetchInitiateQuote = createAsyncThunk('quote/fetch/initiate', async () => {
  /* execute fetch request */
  try {
    const res = await fetch(BASE_QUOTES_URL, { method: 'POST' })
    const json = await res.json()
    return json
  } catch (err) {
    console.error(err)
    return err
  }
})

export const fetchCurrentQuote = createAsyncThunk(
  'quote/fetch/current',
  async ({ resume }: types.FetchGetQuoteQrgs) => {
    if (!resume) throw new Error('No url provided')

    /* execute fetch request */
    try {
      const res = await fetch(resume, { method: 'GET' })
      const json = await res.json()
      return json
    } catch (err) {
      console.error(err)
      return err
    }
  }
)

export const fetchUpdateQuote = createAsyncThunk(
  'quote/fetch/update',
  async ({ quote, type }: types.FetchUpdateQuoteArgs, thunkApi) => {
    const resume: types.QuoteMetaState['resume'] = selectResume(thunkApi.getState() as RootState)

    if (!quote) throw new Error('No quote provided')
    if (!resume) throw new Error('No url provided')

    const payload = whitelistQuote(quote)
    const method = type === 'update' ? 'PUT' : 'POST'
    const init = { body: JSON.stringify(payload), method }

    /* execute fetch request */
    try {
      const res = await fetch(resume, init)

      const json = await res.json()
      console.log(res.status, json)
      return { json, type }
    } catch (err) {
      console.error(err)
      return err
    }
  }
)
