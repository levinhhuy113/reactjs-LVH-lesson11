import React, { useEffect, useState } from 'react';
import axios from '../Api/lvhApi';

export default function LvhSinhVienAddOrEdit({ initialValues, onLvhClose, onLvhSubmitForm }) {
  const [lvhId, setLvhId] = useState(initialValues ? initialValues.id : '');
  const [lvhMaSV, setLvhMaSV] = useState(initialValues ? initialValues.lvhMaSV : '');
  const [lvhHoSV, setLvhHoSV] = useState(initialValues ? initialValues.lvhHoSV : '');
  const [lvhTenSV, setLvhTenSV] = useState(initialValues ? initialValues.lvhTenSV : '');
  const [lvhPhai, setLvhPhai] = useState(initialValues ? initialValues.lvhPhai : '');
  const [lvhNgaySinh, setLvhNgaySinh] = useState(initialValues ? initialValues.lvhNgaySinh : '');
  const [lvhNoiSinh, setLvhNoiSinh] = useState(initialValues ? initialValues.lvhNoiSinh : '');
  const [lvhMaKH, setLvhMaKH] = useState(initialValues ? initialValues.lvhMaKH : '');
  const [lvhHocBong, setLvhHocBong] = useState(initialValues ? initialValues.lvhHocBong : '');
  const [lvhDTB, setLvhDTB] = useState(initialValues ? initialValues.lvhDTB : '');

  useEffect(() => {
    if (initialValues) {
      setLvhId(initialValues.id);
      setLvhMaSV(initialValues.lvhMaSV);
      setLvhHoSV(initialValues.lvhHoSV);
      setLvhTenSV(initialValues.lvhTenSV);
      setLvhPhai(initialValues.lvhPhai);
      setLvhNgaySinh(initialValues.lvhNgaySinh);
      setLvhNoiSinh(initialValues.lvhNoiSinh);
      setLvhMaKH(initialValues.lvhMaKH);
      setLvhHocBong(initialValues.lvhHocBong);
      setLvhDTB(initialValues.lvhDTB);
    }
  }, [initialValues]);

  const handleLvhClose = () => {
    onLvhClose();
  };

  const handleLvhSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id: lvhId,
      lvhMaSV,
      lvhHoSV,
      lvhTenSV,
      lvhPhai,
      lvhNgaySinh,
      lvhNoiSinh,
      lvhMaKH,
      lvhHocBong,
      lvhDTB,
    };

    if (lvhId) {
      await axios.put(`/${lvhId}`, formData);
    } else {
      await axios.post("/", formData);
    }

    onLvhSubmitForm();
  };

  return (
    <div className="">
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã sinh viên</span>
          <input type="text" className="form-control" value={lvhMaSV} onChange={(ev) => setLvhMaSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Họ</span>
          <input type="text" className="form-control" value={lvhHoSV} onChange={(ev) => setLvhHoSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Tên</span>
          <input type="text" className="form-control" value={lvhTenSV} onChange={(ev) => setLvhTenSV(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Phái</span>
          <input type="text" className="form-control" value={lvhPhai} onChange={(ev) => setLvhPhai(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ngày sinh</span>
          <input type="text" className="form-control" value={lvhNgaySinh} onChange={(ev) => setLvhNgaySinh(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Nơi sinh</span>
          <input type="text" className="form-control" value={lvhNoiSinh} onChange={(ev) => setLvhNoiSinh(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Mã khóa học</span>
          <input type="text" className="form-control" value={lvhMaKH} onChange={(ev) => setLvhMaKH(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Học bổng</span>
          <input type="text" className="form-control" value={lvhHocBong} onChange={(ev) => setLvhHocBong(ev.target.value)} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Điểm trung bình</span>
          <input type="text" className="form-control" value={lvhDTB} onChange={(ev) => setLvhDTB(ev.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleLvhSubmit}>Ghi lại</button>
        <button className="btn btn-danger" onClick={handleLvhClose}>Đóng</button>
      </form>
    </div>
  );
}
