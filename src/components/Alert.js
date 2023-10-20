import React from "react";

export default function Alert(props) {
  const capitalize = (word) =>{
      const lower = word.toLowerCase() ;
      return lower.charAt(0).toUpperCase() + lower.slice(1) ;
  }
  return (
    // If props.alert is null then Nothing is going to return 
    // If it is not Null , it will return Div part 
    // ******* This happens because all the JSX will be converted to javascript Calls !  
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  );
}
