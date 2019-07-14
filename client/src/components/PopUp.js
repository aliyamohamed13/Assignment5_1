import React from 'react';

class PopUp extends React.Component {
    render() {
        return (
          <div style = {pop}>
            {/* Hello */}
            This message says: {this.props.text}
            {/* <button onClick = {this._onButtonClick}>popup</button> */}
            {/* {this.state.showComponent ? this.props.todos : null} */}
          </div>
        )
    }
  }
  const pop = {
    borderStyle: "ridge",
    backgroundColor: "lightgreen",
    color: "grey"
  }

export default PopUp;