'use client';
import {
  Flex,
  Heading,
  Link,
  Button,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  UseToastOptions,
  Box
} from "@chakra-ui/react";

import { Routes } from "../models/routes.model";
import {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/store/features/userSlice";
import { isValidEmail } from "@/utilities";
import { InputText } from "../components";
import { selectAuthState, setAuthState } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

import { FaWallet } from "react-icons/fa6";

function Login() {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const currentUser = useSelector(selectUser);
  const auth = useSelector(selectAuthState);

  useEffect(() => {
    if(auth.authState === true) {
      push(Routes.ADMIN.path);
    }
  }, [Login])

  const toast = useToast();
  const toastIdRef: MutableRefObject<string | number | undefined> = useRef();

  // Logic form validation
  const validPassword: boolean = inputPassword === currentUser.password ;
  const validEmail: boolean = isValidEmail(inputEmail)
    && inputEmail !== ""
    && currentUser.email === inputEmail;

  const handleInputEmailChange  =
    (e: ChangeEvent) => setInputEmail((e.target as HTMLInputElement).value);
  const handleInputPasswordChange =
    (e: ChangeEvent) => setInputPassword((e.target as HTMLInputElement).value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastProperties: UseToastOptions = {
      title: 'Something goes wrong',
      description: "Email or password are incorrect, please with other credentials",
      isClosable: true,
      status: "error",
      position: "top-right",
    };

    if (validEmail && validPassword) {
      toastIdRef.current = toast({
        ...toastProperties,
        status: "success",
        title: 'Success',
        description: "Logging in...",
      })

      dispatch(setAuthState({...auth, authState: true}));
      // Just for UX puposes on this assesment
      setTimeout(() => {
        push(Routes.ADMIN.path);
      }, 1500);
    } else {
      toastIdRef.current = toast(toastProperties);
    }
  };

  return (
    <Box>
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
      <Center mb={6} fontSize="2rem">
        <Box>
          <FaWallet size="64"/>
        </Box>
      </Center>
      <Heading mb={6}>Sign in to your account</Heading>
      <form onSubmit={handleSubmit} noValidate>
        <FormControl isInvalid={!validEmail} mb={3} isRequired>
          <FormLabel>Email</FormLabel>

          <InputText
            type="email"
            handleChange={handleInputEmailChange}
            value={inputEmail}
          />

          {validEmail ? (
            <FormHelperText> Enter the email as you user ID </FormHelperText>
          ) : (
            <FormErrorMessage>Email is empty o don't exist</FormErrorMessage>
          )}
        </FormControl>

        <FormControl mb={6} isRequired>
          <FormLabel>Password</FormLabel>

          <InputText
            type="password"
            value={inputPassword}
            handleChange={handleInputPasswordChange}
          />

          <FormHelperText>
            Please fill the field
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="blue"
          variant='solid'
          type='submit'
          width='100%'
          mb={3}
        >
          Log in
        </Button>
      </form>

      <Box>
        <span>Not a member? </span>
        <Link
          key={Routes.REGISTER.path}
          href={Routes.REGISTER.path}
          color='blue.400'
          _hover={{ color: 'blue.500' }}
        >
          Register new account
        </Link>
      </Box>
    </Flex>
    <Center>
      {!currentUser.email && !currentUser.password ? (
        <span>(User not detected, you must register first)</span>
      ): "User detected"}
    </Center>
    </Box>
  )
}

export default Login;
