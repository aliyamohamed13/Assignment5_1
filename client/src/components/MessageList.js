import React from "react";
import Message from "./Message";
import { connect } from "react-redux";
import { fetchInit } from "../actions/todo.actions";
import { addMessage } from "../actions/todo.actions";



class MessageList extends React.Component {
  callAPI() {
    fetch("http://localhost:9000/")
      .then(res => res.json())
      .then(data => {
        this.props.dispatch(fetchInit(data))
      }
      )
  }
  componentDidMount() {
    this.callAPI();
    // if (this.props.todos.length === 0) {
    //   let messages = ["Hello!", "How are you?!"]
    //   messages.forEach(async (element) =>
    //     await fetch('http://localhost:9000/', {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(
    //         {
    //           text: element
    //         })
    //     })
    //       .then(res => res.json())
    //       .then(body => this.props.dispatch(addMessage(body.text)))
    //   )}
  }

  // 


  render() {
    const { todos } = this.props;
    console.log(this.props.todos);
    return (
      <ul style={bullets}>
        {todos != null && todos.map(todo => <Message key={todo.id} {...todo} />)}
      </ul>
    );
  };
}

const bullets = {
  margin: '0',
  padding: '0'
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(MessageList);