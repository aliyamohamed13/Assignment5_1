import React from "react";
import { addMessage } from "../actions/todo.actions";
import { reset } from "../actions/todo.actions";
import { connect } from "react-redux";
import shortid from "shortid"


const AddMessage = ({ dispatch }) => {
  let input;

  let putMessage = async (e) => {
    await fetch('http://localhost:9000/api/messages', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
        // id : shortid.generate(),
        text : e
      }),
      
    })
      .then(res => res.json())
      .then(body => dispatch(addMessage(body.text)))
  }

  let onClick = e => {
    if (input.value !== "") {
      // dispatch(addMessage(input.value));
      putMessage(input.value);
    }
    input.value = "";
  };

  let clearMessages = async (e) => {
    await fetch('http://localhost:9000/api/messages', {
      method: "PUT",
      body: JSON.stringify(),
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(res => dispatch(reset))
        // console.log(res)
        // res.json()
      // })
      // .then(body => {
      //   console.log(body)
      //   // dispatch(reset)
      // })
  }

  let Clearinputs = e=> {
    // dispatch(reset);
    clearMessages();
  }


  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button type="submit" onClick={onClick}>
        Add Message
      </button>
      <button type="reset" onClick = {Clearinputs}> Clear </button>
    </div>
  );
};

export default connect()(AddMessage);
