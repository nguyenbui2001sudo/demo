import React, { useState } from 'react';


// // xử lý 1 xự kiện 
// function DoLaToVND () {3
//     const [dola, setDola] = useState(0);
// function handleChangghe(e) {
//     setDola (e.target.value);
// }
// // hàm xử lý chuyển đổi
// function toVnD(dola) {
//     //chuyển đổi đô la sang tiền việt
//     // và thêm dấu phân tích hàng nghìn
//     let vnd = Intl.NumberFormat().format(dola*23075);
//     return vnd;
// }
//     return(
//        <div className="dolatoVnd">
//            <input type="text" value ={dola} onChange={handleChangghe} />
//            <p> {dola} Đô la = {toVnD(dola)} VND</p>;
//        </div>
//     )
// }
// export default DoLaToVND;
/** xử lý cả form có nhiều xự kiện
 * Để hiểu về các xử lý form, chúng ta cùng thực hiện một ví dụ khác: 
 * Một form có trường input và một nút submit. Khi nhập số vào input
 *  và nhấn submit thì cộng vào tích lũy và hiển thị ra tổng ở bên dưới

 */
 function AddForm() {
    const [num, setNum] = useState(0);
    const [sum, setSum] = useState(0);
  
    // Hàm xử lý khi người dùng
    // nhập vào input
    function handleChange(e) {
      setNum(e.target.value); 
    }
  
    // Hàm xử lý khi người dùng
    // nhấn nút Cộng (submit)
    function handleSubmit(e) {
      setSum(sum + Number(num));
      e.preventDefault();
    }
  
    return <form onSubmit={handleSubmit} className="formSubmit">
      <input type="number" placeholder="Nhập số cần cộng" value={num} onChange={handleChange} />
      <input type="submit" value="Cộng" />
      <h3> Tổng là {sum} </h3>
    </form>;
  }
  export default AddForm;