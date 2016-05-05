import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
  marginLeft: 12,
};

const hideSubmitStyle = {
  position: "absolute",
  height: "0px",
  width: "0px",
  border: "none",
  padding: "0px",
  hidefocus: "true",
  tabindex: -1
}

class NewPlayerComponent extends React.Component {
  createPlayer(event) {
    event.preventDefault();
    console.log("Create Player Called!");
    let newPlayer = this.refs.playerName.getValue();
    if (newPlayer == "" || null || undefined) {
      alert("You must enter a name to play.")
    } else {
      this.props.onCreate(newPlayer);
      this.refs.playerName.value = "";
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createPlayer.bind(this)}>
          <TextField
            ref="playerName"
            hintText="Please enter your name"
            floatingLabelText="Player Name"
          />
          <RaisedButton
            type="submit"
            label="Save"
            style={hideSubmitStyle}
          />
        </form>
      </div>
    );
  }
}

export default NewPlayerComponent;
