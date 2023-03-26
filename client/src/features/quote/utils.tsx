import { FieldError, UserQuote } from './@types'

export function whitelistQuote({
  firstName = '',
  lastName = '',
  dob = '',
  addressStreet = '',
  addressCity = '',
  addressState = '',
  addressPostal = '',
  vehicles = [{ vin: '', year: 0, make: '', model: '' }],
}: UserQuote) {
  return {
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

export function isVehicle(value: any) {
  return typeof value === 'string' && value.includes('VEHICLES')
}
