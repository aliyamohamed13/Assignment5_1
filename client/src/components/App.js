import React from "react";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";
// import { url } from "inspector";
// import image from "./image"

class App extends React.Component {
  // const App = () => (
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }
  render() {
    return (
      <div style={entire}>
        <h1 style={header}>Hello! Welcome to this Messages Page!</h1>
        <AddMessage />
        <MessageList />
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
    );
  }
}

const entire = 
{
  color: 'grey',
  textAlign: 'center',
  margin: '0',
  padding: '0',
}
const header =
{
  color: 'green',
} 

export default App;
