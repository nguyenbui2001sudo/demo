/**
 * js hook cho phép sử dụng trạng thái của state với function components
 */
// import React from "react"
import {useState} from 'react';

 function MousseCick() {
     // state
const [name, setName] = useState();

 return(
     <div classNam="mouse click">
           <input onChange={(event) =>{setName(event.target.value)}}></input>
//         <div style={{fontSize:100 }}>Tên của bạn là:{name}</div>
     </div>
 ) 
}  
export default MousseCick;

// function MouseClick() {
//     // State
//     const [click, setClick] = useState(0);
  
//     // Thay đổi state
//     function incrementClick() {
//       setClick(click + 1);
//     }
  
//     return <div className = "mouseClick">
//       <h2>{click}</h2>
//       <button onClick={incrementClick}>CLICK VÀO ĐÂY!</button>
//     </div>
//   }
