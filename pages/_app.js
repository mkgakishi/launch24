import * as React from "react";
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

import "../styles/globals.css";

import Layout from '../components/Layout'

import theme from "../pages/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}  >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
