'use client';
import "./admin-layout.scss";
import { Navigator } from '@/app/components';
import { Routes } from '../models';
import { useSelector } from "react-redux";
import { selectAuthState } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";

function AdminLayout({children}: {children: React.ReactNode}) {

  const { push } = useRouter();
  const auth: boolean = useSelector(selectAuthState).authState;

  useEffect(() => {
    if(auth === false) {
      push(Routes.LOGIN.path)
    }
  }, [AdminLayout]);

  return (
    <Box>
      {auth ?
        <Box className='admin-layout'>
          <Navigator pathNames={[Routes.HOME, Routes.ADMIN, Routes.WALLET]}/>
          <Box className="content">
            {children}
          </Box>
        </Box>
       :
        <Flex width="100vw" height="100vh" wrap="wrap" direction="row" alignItems="center" justifyContent="center">
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Flex>
      }
    </Box>
  )
}

export default AdminLayout
