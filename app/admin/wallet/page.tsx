'use client';
import { ChangeEvent, useState } from 'react';
import { Transaction, Balance } from '@/app/components';
import {
  addOperation,
  getCurrentAmount,
  getOperations
} from './services/wallet.service'
import { Operation } from './models/wallet.model';
import {
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { FaHandHoldingDollar, FaMoneyBillTransfer } from "react-icons/fa6";

import { createOperation } from '@/store/features/operationsSlice';
import { useDispatch } from 'react-redux';

function fetchOperations() {
  return getOperations();
}

function Wallet() {

  const dispatch = useDispatch()

  const walletOperations = fetchOperations()

  const modalDeposit = useDisclosure()
  const modalPayment = useDisclosure()

  const currentAmount = getCurrentAmount();
  const [moneyAmount, setMoneyAmount] =
    useState({amount: 0, recipient: '', type: ''});

  const handleInputAmountChange = (val: string) => setMoneyAmount({
    ...moneyAmount, amount: parseInt(val)
  });

  const handleSelectRecipientChange = (e: ChangeEvent) => setMoneyAmount({
    ...moneyAmount,
    recipient: (e.target as HTMLSelectElement).selectedOptions[0].value,
  });

  const handleMoneyAmount = () => {
    const changes = {...moneyAmount, type: "P"};
    setMoneyAmount(changes);
    let newData = addOperation(changes);

    // Reset amount to avoid conflicts
    setMoneyAmount({amount: 0, recipient: '', type: ''});

    dispatch(
      createOperation(newData)
    );

    modalPayment.onClose();
  }

  const handleDepositMoney = () => {
    const changes = {...moneyAmount, type: "D"};
    setMoneyAmount(changes);

    let newData = addOperation(changes);

    // Reset amount to avoid conflicts
    setMoneyAmount({amount: 0, recipient: '', type: ''})

    dispatch(
      createOperation(newData)
    );

    modalDeposit.onClose();
  }

  return (
    <>
      <div className="balance">
        <Balance />
      </div>
      <Flex wrap="wrap" direction="row" justifyContent="start" gap="1rem">
        <Button
          colorScheme="blue"
          variant='solid'
          type='submit'
          mb={3}
          leftIcon={<FaHandHoldingDollar />}
          onClick={modalDeposit.onOpen}
        >
          Deposit money
        </Button>

        <Button
          colorScheme="blue"
          variant='solid'
          type='submit'
          mb={3}
          leftIcon={<FaMoneyBillTransfer />}
          onClick={modalPayment.onOpen}
          isDisabled={currentAmount === 0}
        >
          Money Transfer
        </Button>
      </Flex>
      <div className="transactions">
        {walletOperations.slice(0).reverse().map(
          (operation: Operation) => <Transaction key={operation.id} operation={operation}/>
        )}
      </div>

      <Modal isOpen={modalPayment.isOpen} onClose={modalPayment.onClose} autoFocus>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Money Transfer</ModalHeader>

          <ModalBody >
            <small>From A to B</small>
            <Flex gap="1rem">
             <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  fontSize='1.2em'
                  children='€'
                />
                <NumberInput
                  min={0}
                  max={currentAmount}
                  onChange={handleInputAmountChange}
                  allowMouseWheel
                  placeholder='Amount'
                  >
                  <NumberInputField textAlign="right"/>
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
              <Select
                placeholder='Select Recipient'
                onChange={handleSelectRecipientChange}
                defaultValue="B"
              >
                <option value='B'>User B</option>
                <option value='C'>User C</option>
              </Select>
            </Flex>
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleMoneyAmount}>
              Confirm transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={modalDeposit.isOpen} onClose={modalDeposit.onClose} size="xs" autoFocus={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deposit Money</ModalHeader>

          <ModalBody autoFocus>
            <Flex gap="1rem">
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  fontSize='1.2em'
                  children='€'
                />

                <NumberInput
                  min={1}
                  onChange={handleInputAmountChange}
                  allowMouseWheel
                  placeholder='Amount'
                  width="100%"
                >
                  <NumberInputField textAlign="right"/>
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
            </Flex>
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleDepositMoney}>
              Confirm deposit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Wallet;
