import React from 'react';

const ListItem = (props) => {
  return (
       <li>
          <h2>{props.propsItem.title}</h2>
          <div>
            {props.propsItem.info}
          </div>
       </li>
     
  );
}

const ItemList = (props) => {
  const propList = props.itemList;
  return (
    <ul className="item-list">
      {propList.map((item) => < ListItem propsItem={item}/>)}
    </ul>
  )
};


export default ItemList;