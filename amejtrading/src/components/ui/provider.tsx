"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// Define a default theme (optional)
const theme = extendTheme({})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
