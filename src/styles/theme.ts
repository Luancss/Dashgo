import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    color: {
      gray: {
        "900": '#131B23',
        "800": '#1F2029',
        "700": '#353646',
        "600": '#4B4D63',
        "500": '#616480',
        "400": '#797D9A',
        "300": '#9699BD',
        "200": '#B3B8C6',
        "100": '#D1D2DC',
        "50": '#EEEEF2',
      }
    },
    styles: {
      global: {
        body: {
          bg: 'gray.900',
          color: 'gray.50'
        }
      }
    }
  });

