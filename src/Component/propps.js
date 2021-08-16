import React from 'react';

 
function Product(props) {
    return <div className ="product">
        <b>Tên :</b> {props.name} <br />
        <b>Giá :</b> {props.price}
    </div>
}
 function MainApp() {
     return(
         <div>
              <Product name="Iphone 12" price = "120000" />
              <Product name="Iphone 13" price = "2090909" />
         </div>
     )
 }
export default MainApp;