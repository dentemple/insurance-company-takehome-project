import { QuoteMetaState, UserQuote } from "../@types";

export const initialUserQuoteState: UserQuote = {
  firstName: "",
  lastName: "",
  dob: "",
  addressStreet: "",
  addressCity: "",
  addressState: "",
  addressPostal: "",
  vehicles: [
    { year: 0, make: "", model: "", vin: "" },
    { year: 0, make: "", model: "", vin: "" },
    { year: 0, make: "", model: "", vin: "" },
  ],
};

export const initialState: QuoteMetaState = {
  error: null,
  quote: { ...initialUserQuoteState },
  price: {
    currency: null,
    value: null,
  },
  resume: null,
  status: "idle",
};

export default initialState;
