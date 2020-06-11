'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  toggleLike = () => {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  render() {
    const { liked } = this.state;
    if (liked) {
      return <div>
        <button onClick={this.toggleLike}>Unlike</button>
        <div>You liked this</div>
      </div>;
    }

    return <button onClick={this.toggleLike}>Like</button>;
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(<LikeButton/>, domContainer);
