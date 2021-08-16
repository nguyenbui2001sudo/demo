import React from 'react';
import { useState } from 'react';
import './App.css';
//import Comp from './comp.js'
//import Comt from './anhh';
import Header from './Componers/Header';
import Headline from './Componers/Headline';
import ItemList from './Componers/ItemList';
import Aside from './Componers/Aside';
import BoxList from './Componers/BoxList';
import Footer from './Componers/Footer';

import LoginlogoutControll from './logincontrol';
// import listItem from './LisstandKey';
// import NumberList from './LisstandKey';
import Bloger from './LisstandKey';
import MousseCick from './Componers/jshook';
import ChuotClick from './ComponetLifeCycle';
import AddForm from './Componers/EventFormer';
import DSSinhVien from './Componers/ThemSinhVien';
 
 
  
// import Member from './Componers/Member';
// import ActionBT from './Componers/formkethop';
// import NumberList from './Componers/Mapjsx';

// import TestButton from './ActionButton';
// import ActionButton from './TestFromtexxtTarrea';
// import SellectOption from './SellectOption';


// function The1() {
//   return (<div>12</div>)
// }
// const numbers =[1,2,3,4,5,6];
const arrSV = ["Ngọc Anh", "Vũ Hà", "Thu Hương","Văn Nguyên"];
const posts =[
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]
function App() {

  const [blogs, changeBlogs] = useState(blog);

  const changeItem = () => {
    changeBlogs({
      itemList: [
        {
          title: 'Title changed',
          info: 'Proin ex nunc, bibendum ut magna quis.'
        },
        {
          title: 'Blandit mollis',
          info: 'New information changed.'
        },
        {
          title: 'Donec ut libero',
          info: 'Donec ut  pretium, efficitur nisl vel, sagittis elit.'
        }
      ]
    }
  )
  }
  // var The2 = () => (<div>1234</div>)

  // const handleClick = () => {
  //   console.log('Button was clicked'); //button click
  // }

  // const linkClick = (e) => {
  //   e.preventDefault();
  //   console.log('The link was clicked!'); //link click
  // }

  return (
    <div id="layout" >
      <Header />
      <LoginlogoutControll />
      <main>
        <section id="content">

          <Headline bigTitle={blog.bigTitle} />
          <ItemList itemList={blog.itemList} />
          {/* <Member></Member>
          <button onClick={handleClick}>Click to me</button>
          <a style={{ fontSize: 20, margin: 10 }} href="#" onClick={linkClick}>Click me!</a> */}
          {/* <TestButton></TestButton>
           <ActionButton></ActionButton>
           <SellectOption></SellectOption> */}
          {/* <ActionBT /> */}
      
          <button type="button" onClick={changeItem}>Chang Data</button>
          {/* <NumberList numbers={numbers}/> */}
          <Bloger posts ={posts}/>
          <MousseCick />
          <ChuotClick />
          {/* <ClickMousse/> */}
           <AddForm />
          <DSSinhVien data={arrSV}/>
        </section>
        <Aside />
        <BoxList boxList={blog.boxList} />
      </main>
      <Footer />

    </div>
  );

}


// tạo một object data để sử dụng cho các component.
const blog = {
  bigTitle: 'Nguyen oi hoc lap trinh den dau roi vay',
  itemList: [
    {
      title: 'Nguyn dep zai',
      info: 'Nguyen rat dep zai va co su co gang trong hoc tap'
    },
    {
      title: 'Blandit mollis',
      info: 'Blandit mollis orci. Ut pretium diam ut tristique interdum amet condimentum.'
    },
    {
      title: 'Donec ut libero',
      info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
    }

  ],
  boxList: [
    'hello',
    'react',
    'js',
    'react'
  ]
};


export default App;

// Header: là component chứa nội dung của phần header.
// Headline: là component chứa nội dung của "Big Title".
// ItemList: là component chứa nội dung của nhóm "Title 01" cho tới "Title 03".
// Aside: là component chứa nội dung của phần sidebar.
// BoxList: là component chứa nội dung danh sách "BOX".
// Footer: là component chứa nội dung của phần footer.


// dể sử dụng ta cần tạo 
// function App() {

//   var i =1;
//   var myStyle = {
//       fontSize: 100,
//       color : '#FF0000',
//   }

//   var   state = {
//     Header: "Header from state.....",
//     Content: "Content from state....",
//     name : 'your name',
//   }
//   const  [name,setName] = React.useState();
//   console.log("COMP đã được render lại")
//   return (
//     <div className="main">
//         <h1 style = {myStyle}>Hello react js </h1>
//          {/* Comment ở react js */}
//         <p>Hello word</p>
//         <h1>1+1 = {1+1}</h1>
//         <h1>{i==1 ? 'True!' :'False'}</h1>

//        <input onChange={(event) =>{setName(event.target.value)}}></input>
//         <div style={{fontSize:100 }}>Tên của bạn là:{name}</div>
//         <div>
//           <h1>{state.Header}</h1>
//           <h2>{state.Content}</h2>
//       </div>
//       <Comp> </Comp>
//       <Comt> </Comt>
//   </div>
//   );
// }
// export default App;
