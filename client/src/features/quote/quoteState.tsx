import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "../../state/store";
import { QuoteId } from "../../@types";
import { BASE_QUOTES_URL } from "../../app/constants";
import { whitelistQuote } from "./utils";

export interface QuoteState {
  quote: object | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: QuoteState = {
  quote: null,
  status: "idle",
};

export const fetchInitiate = createAsyncThunk(
  "quote/fetchInitiate",
  async () => {
    /* configure fetch request */
    const url = `${BASE_QUOTES_URL}`;
    const init = { method: "POST" };

    /* execute fetch request */
    const res = await fetch(url, init);
  }
);

export const fetchCurrentQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (id: QuoteId, quote) => {
    /* configure fetch request */
    const url = `${BASE_QUOTES_URL}/${id}`;
    const payload = whitelistQuote(quote);
    const init = { body: JSON.stringify(payload) };

    /* execute fetch request */
    const res = await fetch(url, init);
  }
);
