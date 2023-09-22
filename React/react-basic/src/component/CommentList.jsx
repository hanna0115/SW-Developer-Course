import React, { useState } from 'react';
import Comment from './Comment';

let comments = [
  {
    name : '한나5',
    content : '안녕~!'
  },
  {
    name : '오한나',
    content : '안녕하세요. 오한나입니다.'
  },
  {
    name : '514',
    content : '내가 좋아하는 것은 맛있는 떡볶이 :)'
  }
]

const CommentList = () => {
  let [list, setList] = useState(comments);
  let [name, setName] = useState('');
  let [text, setText] = useState('');

  // 삼항연산자로 value 값이 빈 값이라면
  // list가 추가되지 않고 alert 창 띄우기
  let addComment = () => {
    name === '' || text === '' ? alert('이름과 내용을 입력하세요.') : (
      // 즉시 실행 함수 (IIFE)
      // 삼항연산자 조건이 false일 때 -> name, text에 값이 있을 때
      // 다음 함수가 즉시 실행되도록 한다.
      (() => {
        let add = {name : name, content : text};
        setList([add, ...list]);
        setName('');
        setText('');
      })()
    )
  }

  let deleteComment = (index) => {
    let newList = [...list];
    // splice(배열 변경할 인덱스 값, 제거할 요소의 수)
    newList.splice(index, 1);
    setList(newList)
    console.log(index)
  }

  return (
    <div>
      {
        list.map((item, index) => {
          return (
            <Comment name={item.name} text={item.content} key={index} delete={() => deleteComment(index)}/>
          )
        }) 
      }
      <span>작성자 : <input value={name} onChange={(e) => setName(e.target.value)}/></span>
      <span>내용 : <input value={text} onChange={(e) => setText(e.target.value)}/></span>
      <button type='button' onClick={addComment}>글 작성</button>
    </div>
  );
};

export default CommentList;