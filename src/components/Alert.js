import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);// yy function ko call krta hai jo first letter ko capital krta hai
    }
  return (
   props.alert && 
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalize(props.alert.type)} {props.alert.msg}
     
    </div>
   
  );
}
