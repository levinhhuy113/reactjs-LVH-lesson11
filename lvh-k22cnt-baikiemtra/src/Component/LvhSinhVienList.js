import React from 'react';

export default function LvhSinhVienList({ renderLvhSinhVienList, handleEdit, handleDelete }) {
  
  const handleDeleteSV = (id) => {
    handleDelete(id);
  };

  const handleEditSV = (id) => {
    handleEdit(id);
  };

  let lvhElementUser = renderLvhSinhVienList.map((LvhSinhVien, index) => {
    return (
      <tr key={LvhSinhVien.id}>
        <td>{LvhSinhVien.id}</td>
        <td>{LvhSinhVien.lvhMaSV}</td>
        <td>{LvhSinhVien.lvhHoSV}</td>
        <td>{LvhSinhVien.lvhTenSV}</td>
        <td>{LvhSinhVien.lvhPhai}</td>
        <td>{LvhSinhVien.lvhNgaySinh}</td>
        <td>{LvhSinhVien.lvhNoiSinh}</td>
        <td>{LvhSinhVien.lvhMaKH}</td>
        <td>{LvhSinhVien.lvhHocBong}</td>
        <td>{LvhSinhVien.lvhDiemTrungBinh}</td>
        <td>
          <button type='button' className='btn btn-danger mx-3' onClick={() => handleDeleteSV(LvhSinhVien.id)}>Xóa</button>
          <button type='button' className='btn btn-warning' onClick={() => handleEditSV(LvhSinhVien.id)}>Sửa</button>
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
