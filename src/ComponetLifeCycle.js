import React, { useEffect, useState } from 'react';

class ChuotClick extends React.Component {
 
    state = {
        click : 0
    }

Autobam = () => {
        this.setState({
            click : this.state.click +1
        })
    }

//phương thức được gọi lại
// nội dung được render trên trang
// chúng ta sử dụng phương thức componentDidUpdate() để log số click vào trong console
componentDidUpdate() {
    // this.setState({
    //     click : 15
    // })
    console.log("Click: " + this.state.click)
}

    render () {
        return (
               <div className = "Click">
                   <h2>{this.state.click}</h2>
                   <button onClick={this.Autobam}>Click thử đê mày </button>
               </div>
        )
    }
}

export default ChuotClick;

// function ClickMousse () {
//     const [Clickked, setClicked] = useState(0);

// //Gọi khi nội dung được render viết theo hook 
// useEffect(()=> {
//     console.log("Click: " +Clickked);
// });

// // hàm  xử lý đếm số  click
// function increamtClick() {
//     setClicked(Clickked+1);
// }

// return(
//     <div className="ClickButton">
//         <h2>{Clickked}</h2>
//         <button onClick={increamtClick}>Bấm vô là biết</button>
//     </div>
// )
// }
// export default ClickMousse;
