'use client'

import { createTheme, responsiveFontSizes } from "@mui/material/styles";


const theme  = responsiveFontSizes(createTheme({
    typography:{
        fontFamily: 'var(--font-roboto)'
    },
    cssVariables:true
}))

export default theme