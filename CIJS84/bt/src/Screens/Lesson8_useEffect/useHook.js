import { useEffect, useState } from 'react';
import { Remove_Viet } from '../../Common/function';

const listUserDefault = [
  { id: 1, ho: 'Nguyễn', ten: 'Văn Huy', gioitinh: 1 },
  { id: 2, ho: 'Phạm', ten: 'Thị Sen', gioitinh: 2 },
  { id: 3, ho: 'Hồ', ten: 'Thị Lan', gioitinh: 2 },
  { id: 4, ho: 'Nguyễn', ten: 'Văn Tính', gioitinh: 1 },
  { id: 5, ho: 'Nông', ten: 'Duy', gioitinh: 1 },
  { id: 6, ho: 'Trần', ten: 'Lanh', gioitinh: 1 },
];

const dataOption = [
  { key: 0, name: 'gender', value: 3, label: 'All' },
  { key: 1, name: 'gender', value: 1, label: 'Nam' },
  { key: 2, name: 'gender', value: 2, label: 'Nữ' },
];

const dataFilter = { filterGender: 3, filterSearch: '' };

const useHook = () => {
  const [listUser, setListUser] = useState([]);
  const [filter, setFilter] = useState(dataFilter);

  useEffect(() => {
    setListUser(listUserDefault);
  }, []);

  //Tạo biến tạo cục newList để update dữ liệu khi chọn Gender, nếu không dữ liệu sẽ không kịp cập nhật
  useEffect(() => {
    let listUserClone = [];
    let newList = [];
    if (filter.filterGender == 3) {
      newList = listUserDefault;
      setListUser(newList);
    } else {
      listUserClone = JSON.parse(JSON.stringify(listUserDefault));
      newList = listUserClone.filter(function (item) {
        return item.gioitinh == filter.filterGender;
      });
      setListUser(newList);
    }

    if (filter.filterSearch.trim().length > 0) {
      const searchValue = filter.filterSearch.trim();
      listUserClone = JSON.parse(JSON.stringify(newList));
      newList = listUserClone.filter(function (item) {
        return Remove_Viet(item.ho + ' ' + item.ten).includes(Remove_Viet(searchValue));
      });
      setListUser(newList);
    }
  }, [filter]);

  const handleChange = (event, name) => {
    const filterClone = JSON.parse(JSON.stringify(filter));
    if (name == 'selectChange') {
      filterClone.filterGender = event.target.value;
    } else if (name == 'searchChange') {
      filterClone.filterSearch = event.target.value;
    }
    setFilter(filterClone);
  };

  const removeBtn = () => {
    console.log('Remove Button');
  };

  const editBtn = () => {
    console.log('Edit Button');
  };
  return { listUser, filter, removeBtn, editBtn, dataOption, handleChange };
};

export default useHook;
