import React from "react";


const MessageForm = ({ handleSubmit, text, setText}) => {
  const chucknorrisJoke = async () => {
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((result) => {
        return result.json();
      })
      .then((joke) => {
        // console.log("joke.value", joke.value);
        setText(joke.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="message_form">
      <button className="btn" onClick={chucknorrisJoke}> Joke </button>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />      
          <button className="btn">Send</button>
              </form>
    </div>
  );
};

export default MessageForm;
