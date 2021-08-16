 import React from 'react';

 function SinhViens (props) {
     // lấy dữ liệu ban đầu
     const danhSachSv = props.data;

     // Đặt tên từng sinh viên vào trong thẻ li
     const sinhViens = danhSachSv.map((sv, index) => 
       <li key = {index}>{sv}</li>
     );
     return <ul>{sinhViens}</ul>
 } 

 export default SinhViens;  