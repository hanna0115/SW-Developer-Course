import React from "react";

function User(){
  let name = 'Hanna';
  return(
    <div>
      <h1>안녕하세요, {name == 'Hanna' ? name : '??'}님!</h1>
    </div>
  )
}

export default User;