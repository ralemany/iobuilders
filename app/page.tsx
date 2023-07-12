'use client';
import { Link } from '@chakra-ui/next-js'
import { Routes } from "./models";
import { Center, Flex, Heading } from '@chakra-ui/react';
import { FaWallet } from "react-icons/fa6";

export default function Home() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Heading mb={6}>THE WALLET APP</Heading>
      <Center fontSize="2rem" mb={6}>
        <div>
          <FaWallet size="64"/>
        </div>
      </Center>
      <Link
        key={Routes.LOGIN.path}
        href={Routes.LOGIN.path}
        color='blue.400'
        _hover={{ color: 'blue.500' }}
      >
        Go to panel
      </Link>
    </Flex>
  )
}
