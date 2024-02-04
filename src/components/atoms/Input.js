import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({
    type = "text",
    label,
    error,
    helperText,
    name,
    onChange,
    value,
    styles = {}
}) => {
  return (
    <TextField
    type={type}
    label={label}
    error={error}
    helperText={helperText}
    name={name}
    onChange={onChange}
    value={value}
    sx = {{
        width: 480,
        margin: 2,
        "& fieldset": {
            borderRadius: "8px"
        },
        ...styles
    }}
    />
  )
}
