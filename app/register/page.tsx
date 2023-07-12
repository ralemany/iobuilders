'use client'
import { Routes } from "../models";
import { useDispatch } from 'react-redux';
import { modifyUser } from "@/store/features/userSlice";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  useToast,
  CircularProgress,
  UseToastOptions,
  Link,
  Box
} from "@chakra-ui/react";

import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { isValidEmail } from "@/utilities";
import { InputText } from "../components";
import { FaWallet } from "react-icons/fa6";

interface UserAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const emptyUserAccount: UserAccount = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function Register() {

  const dispatch = useDispatch();
  const { push } = useRouter();

  const [loader, setLoader] = useState<boolean>(false);

  const [userAccount, setUserAccount] = useState<UserAccount>(emptyUserAccount);

  const toast = useToast();
  const toastIdRef: MutableRefObject<string | number | undefined> = useRef();

  // Logic form validation
  const validPassword = userAccount.password !== ''
    && userAccount.password.length >= 6;
  const validConfirmPassword = userAccount.password === userAccount.confirmPassword;
  const validEmail = isValidEmail(userAccount.email)
    && userAccount.email !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastProperties: UseToastOptions = {
      title: 'Something goes wrong',
      description: "Please check the form and fix the errors",
      isClosable: true,
      status: "error",
      position: "top-right",
    };

    if( validPassword && validConfirmPassword && validEmail ) {
      toastIdRef.current = toast({
        ...toastProperties,
        status: "success",
        title: 'Account created',
        description: "Now you can log-in with your new credentials"
      });

      setLoader(true);

      dispatch(modifyUser({...userAccount}));

      // Just for UX puposes on this assesment
      setTimeout(() => {
        push(Routes.LOGIN.path);
      }, 1500);

    } else {
      toastIdRef.current = toast(toastProperties);
    }
  };

  return (
    <>
      {loader ? (
        <Flex
          background="grey.500"
          height="100vh"
          width="100vw"
          zIndex={2}
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress isIndeterminate color='green.300' />
        </Flex>
      ) : (
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Center mb={6} fontSize="2rem">
            <Box>
              <FaWallet size="64"/>
            </Box>
          </Center>

          <Heading mb={6}>New account registration</Heading>

          <form onSubmit={handleSubmit} noValidate>
            <Flex gap="1rem">
              <FormControl mb={3}>
                <FormLabel>First Name</FormLabel>

                <InputText
                  value={userAccount.firstName}
                  handleChange={(e: ChangeEvent) => setUserAccount({
                    ...userAccount,
                    firstName: (e.target as HTMLInputElement).value
                  })}
                />

                <FormHelperText> Please fill this field </FormHelperText>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Last Name</FormLabel>

                <InputText
                  value={userAccount.lastName}
                  handleChange={(e: ChangeEvent) => setUserAccount({
                    ...userAccount,
                    lastName: (e.target as HTMLInputElement).value
                  })}
                />

                <FormHelperText> Please fill this field </FormHelperText>
              </FormControl>
            </Flex>

            <FormControl isInvalid={!validEmail} mb={3} isRequired>
              <FormLabel>Email</FormLabel>

              <InputText
                type="email"
                value={userAccount.email}
                handleChange={(e: ChangeEvent) => setUserAccount({
                  ...userAccount,
                  email: (e.target as HTMLInputElement).value
                })}
              />

              {validEmail ? (
                <FormHelperText>
                  Enter the email as you user ID.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Valid email is required.</FormErrorMessage>
              )}
            </FormControl>

            <Flex gap="1rem">
              <FormControl isInvalid={!validPassword} mb={6} isRequired>
                <FormLabel>Password</FormLabel>

                <InputText
                  type="password"
                  value={userAccount.password}
                  handleChange={(e: ChangeEvent) => setUserAccount({
                    ...userAccount,
                    password: (e.target as HTMLInputElement).value
                  })}
                />

                {validPassword ? (
                  <FormHelperText>
                    Please fill the field
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Must be longer than 6 characters</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!validConfirmPassword} mb={6}>
                <FormLabel>Confirm Password</FormLabel>

                <InputText
                  type="password"
                  value={userAccount.confirmPassword}
                  handleChange={(e: ChangeEvent) => setUserAccount({
                    ...userAccount,
                    confirmPassword: (e.target as HTMLInputElement).value
                  })}
                />

                {validConfirmPassword ? (
                  <FormHelperText> Please fill the field </FormHelperText>
                ) : (
                  <FormErrorMessage>Passwords don't mismatch</FormErrorMessage>
                )}
              </FormControl>
            </Flex>

            <Button
              colorScheme="blue"
              variant='solid'
              type='submit'
              width='100%'
              mb={3}
            >
              Create account
            </Button>
          </form>

          <Link key={Routes.HOME.path} href={Routes.HOME.path} color='blue.400' _hover={{ color: 'blue.500' }}>
            Back to homepage
          </Link>
        </Flex>
      )}
    </>
  )
}

export default Register;
