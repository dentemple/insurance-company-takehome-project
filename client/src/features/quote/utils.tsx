import { Quote } from "../../@types";

export function whitelistQuote({ firstName, lastName }: Quote) {
  return {
    firstName,
    lastName,
  };
}
