import { useSelector } from "react-redux";
import { Operation } from "../models";
import { selectOperations } from "@/store/features/operationsSlice";
import { map }  from 'lodash';
import { getToday, makeID } from "@/utilities";

export const getCurrentAmount = (): number => {
  let operations = useSelector(selectOperations);

  let currentAmount = 0;
  map(operations, (operation: Operation) => {
    currentAmount = operation.type == 'D'
      ?  currentAmount + operation.amount
      :  currentAmount - operation.amount;
  })

  return currentAmount;
};

export const getOperations = (): Operation[] => {
  return useSelector(selectOperations) ;
};

export const addOperation = (moneyTransfer: any) => {
  const { amount, recipient, type } = moneyTransfer;

  // Create random ID
  const ID = makeID();
  const today = getToday();

  return {
    id: ID,
    date: `${today}`,
    type: type.toUpperCase(),
    recipient: "Recipient " + recipient,
    amount: amount,
    creationDate: "2023/07/05",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
  } as Operation;
}
