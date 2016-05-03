import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
  margin: 12,
};

class NewGameComponent extends React.Component {
    createGame(event) {
      event.preventDefault();
      console.log("Create Game Called!");
      this.props.onCreate();
    }

  render() {
    return(
      <div>
        <form onSubmit={this.createGame.bind(this)}>
          <div>
            <RaisedButton
              type="submit"
              label="Create Game"
              style={buttonStyle}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewGameComponent;
