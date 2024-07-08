import React, { useEffect, useState } from 'react';
import axiosInstance from '../Api/lvhApi'; 

export default function LvhSinhVienAddOrEdit({ initialValues, onLvhClose, onLvhSubmitForm }) {
  const [lvhId, setLvhId] = useState(initialValues ? initialValues.id : '');
  const [lvhMaSV, setLvhMaSV] = useState(initialValues ? initialValues.LvhMaSV : '');
  const [lvhHoSV, setLvhHoSV] = useState(initialValues ? initialValues.LvhHoSV : '');
  const [lvhTenSV, setLvhTenSV] = useState(initialValues ? initialValues.LvhTenSV : '');
  const [lvhPhai, setLvhPhai] = useState(initialValues ? initialValues.LvhPhai : '');
  const [lvhNS, setLvhNS] = useState(initialValues ? initialValues.LvhNS : '');
  const [lvhNoiSinh, setLvhNoiSinh] = useState(initialValues ? initialValues.LvhNoiSinh : '');
  const [lvhMaKH, setLvhMaKH] = useState(initialValues ? initialValues.LvhMaKH : '');
  const [lvhHocBong, setLvhHocBong] = useState(initialValues ? initialValues.LvhHocBong : '');
  const [lvhDTB, setLvhDTB] = useState(initialValues ? initialValues.LvhDTB : '');

  useEffect(() => {
    if (initialValues) {
      setLvhId(initialValues.id);
      setLvhMaSV(initialValues.LvhMaSV);
      setLvhHoSV(initialValues.LvhHoSV);
      setLvhTenSV(initialValues.LvhTenSV);
      setLvhPhai(initialValues.LvhPhai);
      setLvhNS(initialValues.LvhNS);
      setLvhNoiSinh(initialValues.LvhNoiSinh);
      setLvhMaKH(initialValues.LvhMaKH);
      setLvhHocBong(initialValues.LvhHocBong);
      setLvhDTB(initialValues.LvhDTB);
    }
  }, [initialValues]);

  const handleLvhClose = () => {
    onLvhClose(false);
  };

  const handleLvhSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      LvhMaSV: lvhMaSV,
      LvhHoSV: lvhHoSV,
      LvhTenSV: lvhTenSV,
      LvhPhai: lvhPhai,
      LvhNS: lvhNS,
      LvhNoiSinh: lvhNoiSinh,
      LvhMaKH: lvhMaKH,
      LvhHocBong: lvhHocBong,
      LvhDTB: lvhDTB,
    };

    if (lvhId) {
      // Update existing user
      formData.id = lvhId;
      await axiosInstance.put(`/${lvhId}`, formData);
    } else {
      // Add new user
      await axiosInstance.post("/", formData);
    }

    onLvhSubmitForm(false);
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
          <input type="text" className="form-control" value={lvhNS} onChange={(ev) => setLvhNS(ev.target.value)} />
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