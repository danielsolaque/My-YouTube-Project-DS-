import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Video = () => {
  const { id } = useParams();
  const [allComment, setAllComment] = useState([]);

  // const localStorageData = localStorage.getItem('comment');
  // let initialData;

  // if (!localStorageData) {
  //     localStorage.setItem('comments', JSON.stringify(allComment) )
  // } else {
  //     const comments = localStorage.getItem('comments')
  //     initialData = setAllCommentJSON.parse(comments)
  // }

  // console.log(allComment);

  // const addComment = (e) => {
  //     e.preventDefault()

  //     const comment = e.target.comment.value

  //     const comments = {
  //         idVideo: id,
  //         comment: ''
  //     }

  //     setAllComment([...allComment, comments])
  //     localStorage.setItem('comments', JSON.stringify(allComment) )

  // }

  // console.log(allComment);

  return (
    <div>
      <YouTube videoId={id} />

      {/* <form onSubmit={addComment}>
                <textarea name="comment" id="" cols="30" rows="10"></textarea>
                <button>comment</button>
            </form> */}
    </div>
  );
};

export default Video;
