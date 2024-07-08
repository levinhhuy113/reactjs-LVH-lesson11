import React from 'react';

export default function LvhSinhVienList({ render, handleEdit, handleDelete }) {

  const handleDeleteSV = (id) => {
    handleDelete(id);
  };

  const handleEditSV = (id) => {
    handleEdit(id);
  };

  let lvhElementUser = renderLvhListUsers.map((lvhUser, index) => {
    return (
      <tr key={lvhUser.id}>
        <td>{lvhUser.id}</td>
        <td>{lvhUser.LvhMaSV}</td>
        <td>{lvhUser.LvhHoSV}</td>
        <td>{lvhUser.LvhTenSV}</td>
        <td>{lvhUser.LvhPhai}</td>
        <td>{lvhUser.LvhNS}</td>
        <td>{lvhUser.LvhNoiSinh}</td>
        <td>{lvhUser.LvhMaKH}</td>
        <td>{lvhUser.LvhHocBong}</td>
        <td>{lvhUser.LvhDTB}</td>
        <td>
          <button type='button' className='btn btn-danger mx-3' onClick={() => handleDeleteSV(lvhUser.id)}>Xóa</button>
          <button type='button' className='btn btn-warning' onClick={() => handleEditSV(lvhUser.id)}>Sửa</button>
        </td>
      </tr>
    )
  });

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã SV</th>
              <th>Họ</th>
              <th>Tên</th>
              <th>Phái</th>
              <th>Ngày sinh</th>
              <th>Nơi sinh</th>
              <th>Mã khóa học</th>
              <th>Học bổng</th>
              <th>ĐTB</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {lvhElementUser}
          </tbody>
        </table>
      </div>
    </div>
  );
}