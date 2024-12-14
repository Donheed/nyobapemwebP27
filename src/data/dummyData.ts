import { Role, User, Item, Operator, BorrowItem } from '../types';

// Dummy Users (removed USER role)
export const dummyUsers: User[] = [
  { id: '1', username: 'andre', password: 'andre123', role: Role.ADMIN },
  { id: '2', username: 'jiki', password: 'jiki123', role: Role.OPERATOR },
  { id: '3', username: 'dani', password: 'dani123', role: Role.ADMIN },
  { id: '2', username: 'daway', password: 'daway123', role: Role.ADMIN },
];

// Dummy Items
export const dummyItems: Item[] = [
  {
    id: '1',
    name: 'Esp32 Wroom 32UE',
    amount: 5,
    condition: 'Baru',
    created_at: new Date('2024-03-11'),
  },
  {
    id: '2',
    name: 'Kabel HDMI',
    amount: 3,
    condition: 'Bagus',
    created_at: new Date('2024-11-03'),
  },
  {
    id: '3',
    name: 'TV 60 inch',
    amount: 10,
    condition: 'Rusak',
    created_at: new Date('2024-12-12'),
  },
];

// Dummy Operators
export const dummyOperators: Operator[] = [
  {
    id: '1',
    name: 'Andre',
    username: 'Neinstat',
    password: 'andre1234',
  },
  {
    id: '2',
    name: 'RizqTaufan',
    username: 'Jiki',
    password: 'Jiki1234',
  },
];

// Dummy Borrowings
export const dummyBorrowings: BorrowItem[] = [
  {
    id: '1',
    item_name: 'TV 60 inch',
    amount: 1,
    borrow_date: new Date('2024-12-01'),
    return_date: new Date('2024-12-08'),
    borrower_name: 'Munsven',
    officer_name: 'RizqTaufan',
    status: 'BORROWED',
  },
  {
    id: '2',
    item_name: 'Raspberry PE',
    amount: 1,
    borrow_date: new Date('2024-12-02'),
    return_date: new Date('2024-12-09'),
    borrower_name: 'Daw',
    officer_name: 'Andre',
    status: 'RETURNED',
  },
];
