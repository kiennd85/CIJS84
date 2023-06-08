import { useState } from 'react';

const listUserDefault = [
  { id: 1, ho: 'Nguyễn', ten: 'Văn A', gioitinh: 1 },
  { id: 2, ho: 'Nguyễn', ten: 'Thị B', gioitinh: 2 },
  { id: 3, ho: 'Nguyễn', ten: 'C', gioitinh: 2 },
  { id: 4, ho: 'Nguyễn', ten: 'D', gioitinh: 1 },
  { id: 5, ho: 'Nguyễn', ten: 'E', gioitinh: 1 },
];

const dataOption = [
  { key: 0, name: 'gender', value: 1, label: 'All' },
  { key: 1, name: 'gender', value: 2, label: 'Nam' },
  { key: 2, name: 'gender', value: 3, label: 'Nữ' },
];

const useHook = () => {
  const [listUser, setListUser] = useState(listUserDefault);

  const handleSelect = (event) => {
    console.log(event);
    console.log('hi');
  };
  return { listUser, dataOption, handleSelect };
};

export default useHook;
