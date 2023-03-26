import { RootState } from "../../../state/store";

export const selectError = (state: RootState) => state.quoteMeta.error;
export const selectPrice = (state: RootState) => state.quoteMeta.price;
export const selectQuote = (state: RootState) => state.quoteMeta.quote;
export const selectResume = (state: RootState) => state.quoteMeta.resume;
