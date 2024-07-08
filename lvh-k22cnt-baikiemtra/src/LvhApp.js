import React, { useEffect, useState } from 'react';
import LvhSinhVienList from './Component/LvhSinhVienList';
import axios from './Api/lvhApi';
import LvhSinhVienAddOrEdit from './Component/LvhFormAddOrEdit';

export default function LvhApp() {
  const [lvhListSinhvien, setLvhListSinhvien] = useState([]);
  const [lvhAddOrEdit, setLvhAddOrEdit] = useState(false);
  const [lvhSelectedUser, setLvhSelectedUser] = useState(null);

  const lvhGetAllUser = async () => {
    const lvhResponse = await axios.get("/LvhSinhVien");
    setLvhListSinhvien(lvhResponse.data);
  }

  useEffect(() => {
    lvhGetAllUser();
  }, []);

  const lvhHandleAddNew = () => {
    setLvhSelectedUser(null);
    setLvhAddOrEdit(true);
  };

  const lvhHandleClose = () => {
    setLvhAddOrEdit(false);
  };

  const lvhHandleSubmit = async (formData) => {
    if (formData.id) {
      await axios.put(`/${formData.id}`, formData);
    } else {
      await axios.post("/", formData);
    }
    lvhGetAllUser();
    setLvhAddOrEdit(false);
  };

  const lvhHandleEdit = (userId) => {
    const selectedUser = lvhListSinhvien.find(user => user.id === userId);
    if (selectedUser) {
      setLvhSelectedUser(selectedUser);
      setLvhAddOrEdit(true);
    }
  };

  const lvhHandleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
      await axios.delete(`/${userId}`);
      lvhGetAllUser();
    }
  };

  return (
    <div className="container border my-3">
      <h1>Làm việc với API</h1>
      <hr />
      <button className="btn btn-primary mb-3" onClick={lvhHandleAddNew}>Thêm mới</button>
      {lvhAddOrEdit && (
        <LvhSinhVienAddOrEdit
          initialValues={lvhSelectedUser}
          onLvhClose={lvhHandleClose}
          onLvhSubmitForm={lvhHandleSubmit}
        />
      )}
      <LvhSinhVienList
        renderLvhSinhVienList={lvhListSinhvien}
        handleEdit={lvhHandleEdit}
        handleDelete={lvhHandleDelete}
      />
    </div>
  );
}
