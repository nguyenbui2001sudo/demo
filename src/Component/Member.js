import React from 'react';

const member = {
    text: 'Ô la lá',
    info: {
      name: 'Bùi văn nguyên',
      age: 20
    }
 }
  // nên viết theo kiểu arow function
 var MemberInfo = (props) => {
   return(
     <div className="info">
         <h2>{props.info.name}</h2>
         <p>Tuổi: {props.info.age}</p>
     </div>
   )
 }
 
 var Comment = (props) =>{
   return(
     <div className="comment">
       {props.text}
     </div>
   )
 };
 
 // nó như là main chính 
 function Member(){
   return(
     <div className="member">
       <MemberInfo info={member.info} />
       <Comment text={member.text} />
     </div>
   )
 };

 export default Member;