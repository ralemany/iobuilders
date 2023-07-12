'use client'
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Operation } from "@/app/admin/wallet/models";

// Initial state
const initialState: Operation[] =
[
  {
    "id": "1S3IXW4870",
    "date": "2023/07/10",
    "type": "D",
    "recipient": "Recipient A",
    "amount": 500,
    "creationDate": "2023/07/10",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
  },{
    "id": "WSI2RWV86G",
    "date": "2023/07/10",
    "type": "D",
    "recipient": "Recipient A",
    "amount": 400,
    "creationDate": "2023/07/10",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
},{
    "id": "LY1IPCRTJ7",
    "date": "2023/07/10",
    "type": "P",
    "recipient": "Recipient B",
    "amount": 380,
    "creationDate": "2023/07/10",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
},{
    "id": "I6537HF1W1",
    "date": "2023/07/10",
    "type": "P",
    "recipient": "Recipient B",
    "amount": 260,
    "creationDate": "2023/07/10",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
  },{
    "id": "AM7XDSETQN",
    "date": "2023/07/10",
    "type": "P",
    "recipient": "Recipient B",
    "amount": 120,
    "creationDate": "2023/07/10",
    "clientWallet": {
      "email": "test@test.com",
      "name": "Raúl",
      "surname": "Alemany Pérez",
      "phone": "+34 637 000 000",
      "currency": "€"
    }
  }
];
// PayloadAction<Operation>
export const operationsSlice = createSlice({
  name: "operations",
  initialState: initialState,
  reducers: {
    createOperation(state, {payload}) { state.push(payload) }
  },
});

export const { createOperation } = operationsSlice.actions;

export const selectOperations = (state: RootState) => state.operations;

export default operationsSlice.reducer;
