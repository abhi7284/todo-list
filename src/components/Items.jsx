import React from "react";

function Items(props) {
  // const [islineThrough,setLineThrough]= useState(false)

  // function check(){
  //   setLineThrough(line => !line)

  // }

  return (
    <div onClick={() => props.onCheck(props.id)}>
      <li>{props.list}</li>
    </div>
  );
}

export default Items;
