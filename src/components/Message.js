import React, { useRef, useEffect } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
    // scrollRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'end' });
  }, [msg]);

  // console.log ("msg", msg)
  return (
    <div
      className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
          {/* {msg.createdAt.toDate()} */}
          <Moment format="YYYY-MM-DD HH:mm">{msg.createdAt.toDate()}</Moment>
          {/* <Moment fromNow>{msg.createdAt.toDate()}</Moment> */}
        </small>

      </p>
    </div>
  );
};

export default Message;
