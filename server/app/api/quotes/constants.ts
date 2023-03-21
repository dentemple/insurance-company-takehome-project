import { BASE_URL } from "../../constants";

export const QUOTES_BASE_URL = `${BASE_URL}/quotes`;
export const BASE_QUOTE_DATA = {
  address: { street: "", city: "", state: "", postal: "" },
  dateOfBirth: "",
  name: { firstName: "", lastName: "" },
  price: null,
  vehicle: { vin: "", year: 0, make: "", model: "" },
};
export const DEFAULT_PRICE = 42;
