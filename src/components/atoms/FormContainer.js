import styled from '@emotion/styled'
import { FormControl } from '@mui/material'
import React from 'react'

const StyledFormContainer = styled(FormControl)(() => ({
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "8px"
}))

export const FormContainer = ({children}) => {
  return (
     <StyledFormContainer>{children}</StyledFormContainer>
  )
}


