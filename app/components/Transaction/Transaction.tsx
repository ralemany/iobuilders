import React from 'react'
import "./Transaction.scss";
import { FaCreditCard } from "react-icons/fa6";
import { Box, Flex } from '@chakra-ui/react';

function Transaction({operation}: any) {
  const isPayment = operation.type === "P";

  return (
    <Box className='Transaction'>
      <Box className="data">
        <Flex wrap="wrap" alignItems="center" justifyContent="flex-start">
          <FaCreditCard />
          <Box ml="0.5rem"> {operation.recipient}</Box>
        </Flex>
        <small>{operation.date}</small>
      </Box>
      <Box className="amount">
        <span className={isPayment ? 'paymentOperation' : ''}>
          {operation.amount} {operation?.clientWallet?.currency}
        </span>
      </Box>
    </Box>
  )
}

export default Transaction;
