'use client';

import { Provider } from "react-redux";
import { store } from "./store";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";

export function ReduxProvider({ children }: any ) {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  )
}
