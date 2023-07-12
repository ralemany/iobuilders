'use client';
import { LayoutProps } from '../models';
import { Flex } from '@chakra-ui/react';

export default function RegisterLayout({children}: LayoutProps) {
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
