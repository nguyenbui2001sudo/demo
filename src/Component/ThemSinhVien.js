 import React, { useState } from 'react';
import SinhViens from './RenderLisst';

function ThemsinhVien (props) {
    const [ten, setTen] = useState("");

    // hàm xử lý người dùng điều khiển tên sinh viên
    function handleChange(e) {
        setTen(e.target.value);
    }

    // Hàm xử lý người dùng khi nhấn thêm sinh viên 
    function handleSubmit(e) {
        if(ten !== " ") {
            props.handleSubmit(ten);
            setTen('');
        }
        e.preventDefault();
    }
    
    return (
       <form onSubmit={handleSubmit}>
           <input type="text"  
             placeholder="Tên sinh viên" //chữ ngầm 
             onChange={handleChange} 
             value={ten} />
            <button type="submit">Thêm Sinh viên</button>
       </form>
    )
}

// Hãy tạo một components cha có tên là DSSinh
// sau đó nhét ThemSinhVien và SinhViens làm 
// components con và giữ arrSV ở state của nó:

function DSSinhVien (props) {
    const [dulieu, setDuLieu] = useState(props.data);

     function themSVMoi(ten) {
        setDuLieu([...dulieu, ten]);
    }
    return (
        <div>
            <ThemsinhVien handleSubmit={themSVMoi} />
            <SinhViens data={dulieu}/>
        </div>
    );
}

export default  DSSinhVien;