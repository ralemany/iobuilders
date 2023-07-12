export interface Operation {
  id: string;
  date: string;
  type: string;
  recipient: string;
  amount: number;
  creationDate: string;
  clientWallet: ClientWallet;
}

export interface Recipient {
  id: number;
  name: string;
}

export interface ClientWallet {
  email: string;
  name: string;
  surname: string;
  phone: string;
  currency: string;
}

export interface Wallet {
  id: string;
  actualAmount: number;
  currency: string;
 }
