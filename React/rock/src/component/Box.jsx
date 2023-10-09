import React from 'react';

const Box = (props) => {
  let result;

  if(
    props.title == 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === 'win' ? 'lose' : 'win'
  } else {
    result = props.result;
  }
  return (
    <div className={`box-item ${result}`}>
      <h1>{props.title}</h1>
      {/* null error 해결방법 => 조건부 렌더링
          null이 아닐 때만 값이 랜더링 되도록 */}
      <h2>{props.select && props.select.name}</h2>
      <img src={props.select && props.select.img} alt={props.select && props.select.name} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;