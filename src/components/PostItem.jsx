import React from "react";
import MyButton from './UI/button/MyButton.jsx';
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate()

  return (
    <div className='post'>
      <div className='post-content'>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className='post__bttns'>
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post.id)}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}

export default PostItem