export interface Address {
  id: number;
  name: string;
  value: string;
}

export interface User {
  _id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  extra: {
    birthday: string;
    addressBook: Address[];
  }
}