import { createSlice } from '@reduxjs/toolkit'

/* re-exports */
export * as selectors from './selectors'

import * as asyncActions from './asyncActions'
import initialState from './initialState'

const quoteMetaSlice = createSlice({
  name: 'quoteMeta',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null
    },
    resetUserQuote: (state) => {
      state.quote = initialState.quote
    },
  },
  extraReducers: (builder) =>
    builder
      /* fetchInitiateQuote ---------------------------------------------- */
      .addCase(asyncActions.fetchInitiateQuote.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(asyncActions.fetchInitiateQuote.fulfilled, (state, action) => {
        state.status = 'idle'
        state.resume = action.payload.resume || null
      })
      .addCase(asyncActions.fetchInitiateQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      /* fetchCurrentQuote ---------------------------------------------- */
      .addCase(asyncActions.fetchCurrentQuote.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(asyncActions.fetchCurrentQuote.fulfilled, (state, action) => {
        state.status = 'idle'
        state.quote = action.payload.quote
      })
      .addCase(asyncActions.fetchCurrentQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      /* fetchSubmitQuote ---------------------------------------------- */
      .addCase(asyncActions.fetchUpdateQuote.pending, (state) => {
        state.status = 'loading'
        state.error = null
        state.price = { currency: null, value: null }
      })
      .addCase(asyncActions.fetchUpdateQuote.fulfilled, (state, action) => {
        state.status = 'idle'

        const { json, type } = action.payload

        if (type === 'update') {
          state.quote = json
        } else {
          state.price = json
        }
      })
      .addCase(asyncActions.fetchUpdateQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }),
})

export { asyncActions }

export const actions = quoteMetaSlice.actions

export default quoteMetaSlice.reducer
