export function whitelistQuote({
  id,
  firstName,
  lastName,
  dob,
  addressStreet,
  addressCity,
  addressState,
  addressPostal,
  vehicles,
}: any) {
  return {
    id,
    firstName,
    lastName,
    dob,
    addressStreet,
    addressCity,
    addressState,
    addressPostal,
    vehicles,
  }
}

export function calculateQuote(_: any) {
  return 42
}
