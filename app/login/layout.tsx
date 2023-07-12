'use client';
import { LayoutProps } from "../models";
import { Flex, } from "@chakra-ui/react";

function LoginLayout({children}: LayoutProps) {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {children}
    </Flex>
  )
}

export default LoginLayout;
