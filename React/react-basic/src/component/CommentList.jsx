import React from 'react';
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
  return (
    <div>
      {
        comments.map((item, index) => {
          return (
            <Comment name={item.name} text={item.content} key={index}/>
          )
        }) 
      }
    </div>
  );
};

export default CommentList;