import React from "react";
import axios from "axios";

class ItemPage extends React.Component {
  state = {
    item: {}
  };
  componentDidMount() {
    axios
      .get(`/items/${this.props.itemId}`)
      .then(response => this.setState({ item: response.data }));
  }
  render() {
    return (
      <React.Fragment>
        We have {this.state.item.id} number item for you to enjoy! Audio Link:{" "}
        {this.state.item.audio_link}
        Start Time: {this.state.item.startTime}
        End Time: {this.state.item.endTime}
      </React.Fragment>
    );
  }
}

export default ItemPage;
