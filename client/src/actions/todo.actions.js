// let nextTodoId = 0;
import shortid from "shortid"

export const fetchInit = (messages) => ({
  type: "ADD_INIT",
  messages: messages
})

export const addMessage = text => ({
  type: "ADD_MESSAGE",
  id : shortid.generate(),
  text
});

export const reset = ({
  type: "RESET",
})

// export const makePU = text => ({
//   type: "POPUP"
// })

// export const toggleTodo = id => ({
//   type: "TOGGLE_TODO",
//   id
// });

