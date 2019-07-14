import React from 'react';
const initState = [{id: 1, text: "Welcome!"},{id: 2, text: "Thank you!"}]
const emptyState = []

const todos = (state = emptyState, action) => {
  switch (action.type) {
    case "ADD_INIT":
      return action.messages
    case "ADD_MESSAGE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case "RESET":
      return emptyState;
    // case "POPUP":
    //   return <div>text: action.text</div>;
    default:
      return state;
  }
}
export default todos;

