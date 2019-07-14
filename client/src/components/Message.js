import React from "react";
import PopUp from "./PopUp"

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false, 
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState ({
      showComponent: (!this.state.showComponent), 
    });
  }

  render() {
    const {text} = this.props;

    return (
      <div>
      <li onClick = {this._onButtonClick}>{text}</li>
        {this.state.showComponent ? <PopUp text = {this.props.text} /> : null}
      </div>
    );
  }
}

export default Message;
