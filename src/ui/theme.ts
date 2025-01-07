'use client'

import { createTheme, responsiveFontSizes } from "@mui/material/styles";


const theme  = responsiveFontSizes(createTheme({
    typography:{
        htmlFontSize:18,
        fontFamily: 'var(--font-roboto)'
    },
    components:{
        MuiNavLink:{
            styleOverrides:{
                root:{
                    //backgroundColor:'red'
                }
            }
        },
        MuiColoredBox:{
            styleOverrides:{
                root:{
                    backgroundColor:'green'
                }
            }
        },
        MuiAppBar:{
            defaultProps:{
                elevation:0,
                
            }
        },
        MuiIconButton:{
            defaultProps:{
                size:'small',
                disableRipple:true,
            }
        },
        MuiButton:{
            defaultProps:{
                disableElevation:true,
                disableRipple:true,
            },
            styleOverrides:{
                root:{
                    textTransform:'unset'
                }
            }
        }
    },
    cssVariables:true
}))

export default theme