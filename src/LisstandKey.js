 import React  from 'react';

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItem = numbers.map((number) => <li key={number.toString()} >{number*2}</li>)
//     return(
//         <ul>{listItem}</ul>
//     )
// }

function Bloger(props) {

    const sidebar = (
        <ul>
          {props.posts.map((post) => <li key={post.id}>{post.title} </li>)}
          </ul>
    );
   const content = props.posts.map((post) =>
   <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
   </div>
   )
   return (
       <div>
           {sidebar}
           <hr/>
           {content}
       </div>
   )
}

export default Bloger;