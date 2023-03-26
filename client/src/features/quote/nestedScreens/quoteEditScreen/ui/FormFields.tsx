import { FormEvent, MouseEvent, useState } from 'react'

/* components */
import StyledLabel from './StyledLabel'

/* state */
import * as types from 'src/features/quote/@types'

/* types */
export interface QuoteEditProps {
  errorMessage?: string
  handleChange: (event: FormEvent<HTMLInputElement>) => void
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
  isLoading: boolean
  quote: types.UserQuote
}

export function FormFields({
  errorMessage,
  handleChange,
  handleClick,
  isLoading,
  quote,
  ...rest
}: QuoteEditProps) {
  const formInputProps = {
    disabled: isLoading,
    onChange: handleChange,
    type: 'text', // Note: Override this with a more specific type, if needed
  }

  const buttonPropsMap = {
    firstName: { ...formInputProps, defaultValue: quote.firstName },
    lastName: { ...formInputProps, defaultValue: quote.lastName },
    dob: { ...formInputProps, defaultValue: quote.dob },
    addressStreet: { ...formInputProps, defaultValue: quote.addressStreet },
    addressCity: { ...formInputProps, defaultValue: quote.addressCity },
    addressState: { ...formInputProps, defaultValue: quote.addressState },
    addressPostal: { ...formInputProps, defaultValue: quote.addressPostal },
    'VEHICLES|vin|0': { ...formInputProps, defaultValue: quote.vehicles?.[0]?.vin },
    'VEHICLES|year|0': {
      ...formInputProps,
      defaultValue: quote.vehicles?.[0]?.year,
    },
    'VEHICLES|make|0': { ...formInputProps, defaultValue: quote.vehicles?.[0]?.make },
    'VEHICLES|model|0': { ...formInputProps, defaultValue: quote.vehicles?.[0]?.model },
    'VEHICLES|vin|1': { ...formInputProps, defaultValue: quote.vehicles?.[1]?.vin },
    'VEHICLES|year|1': {
      ...formInputProps,
      defaultValue: quote.vehicles?.[1]?.year,
    },
    'VEHICLES|make|1': { ...formInputProps, defaultValue: quote.vehicles?.[1]?.make },
    'VEHICLES|model|1': { ...formInputProps, defaultValue: quote.vehicles?.[1]?.model },
    'VEHICLES|vin|2': { ...formInputProps, defaultValue: quote.vehicles?.[2]?.vin },
    'VEHICLES|year|2': {
      ...formInputProps,
      defaultValue: quote.vehicles?.[2]?.year,
    },
    'VEHICLES|make|2': { ...formInputProps, defaultValue: quote.vehicles?.[2]?.year },
    'VEHICLES|model|2': { ...formInputProps, defaultValue: quote.vehicles?.[2]?.year },
  }

  return (
    <>
      <h4>Personal Information</h4>
      <StyledLabel>
        <span>First Name</span>
        <input {...buttonPropsMap.firstName} />
      </StyledLabel>
      <StyledLabel>
        <span>Last Name</span>
        <input {...buttonPropsMap.lastName} />
      </StyledLabel>
      <StyledLabel>
        <span>Date of Birth</span>
        <input {...buttonPropsMap.dob} />
      </StyledLabel>
      <StyledLabel>
        <span>Street Address</span>
        <input {...buttonPropsMap.addressStreet} />
      </StyledLabel>
      <StyledLabel>
        <span>City</span>
        <input {...buttonPropsMap.addressCity} />
      </StyledLabel>
      <StyledLabel>
        <span>State</span>
        <input {...buttonPropsMap.addressState} />
      </StyledLabel>
      <StyledLabel>
        <span>Zip Code</span>
        <input {...buttonPropsMap.addressPostal} />
      </StyledLabel>
      <h4>Vehicle 1</h4>
      <StyledLabel>
        <span>VIN</span>
        <input {...buttonPropsMap['VEHICLES|vin|0']} />
      </StyledLabel>
      <StyledLabel>
        <span>Year</span>
        <input {...buttonPropsMap['VEHICLES|year|0']} />
      </StyledLabel>
      <StyledLabel>
        <span>Make</span>
        <input {...buttonPropsMap['VEHICLES|make|0']} />
      </StyledLabel>
      <StyledLabel>
        <span>Model</span>
        <input {...buttonPropsMap['VEHICLES|model|0']} />
      </StyledLabel>
      <h4>Vehicle 2</h4>
      <StyledLabel>
        <span>VIN</span>
        <input {...buttonPropsMap['VEHICLES|vin|1']} />
      </StyledLabel>
      <StyledLabel>
        <span>Year</span>
        <input {...buttonPropsMap['VEHICLES|year|1']} />
      </StyledLabel>
      <StyledLabel>
        <span>Make</span>
        <input {...buttonPropsMap['VEHICLES|make|1']} />
      </StyledLabel>
      <StyledLabel>
        <span>Model</span>
        <input {...buttonPropsMap['VEHICLES|model|1']} />
      </StyledLabel>
      <h4>Vehicle 3</h4>
      <StyledLabel>
        <span>VIN</span>
        <input {...buttonPropsMap['VEHICLES|vin|2']} />
      </StyledLabel>
      <StyledLabel>
        <span>Year</span>
        <input {...buttonPropsMap['VEHICLES|year|2']} />
      </StyledLabel>
      <StyledLabel>
        <span>Make</span>
        <input {...buttonPropsMap['VEHICLES|make|2']} />
      </StyledLabel>
      <StyledLabel>
        <span>Model</span>
        <input {...buttonPropsMap['VEHICLES|model|2']} />
      </StyledLabel>
    </>
  )
}

export default FormFields
