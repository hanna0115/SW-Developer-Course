import React from 'react';

const Box = (props) => {
  return (
    <div className='box-item'>
      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg" alt="바위 이미지" />
      <h2>win</h2>
    </div>
  );
};

export default Box;