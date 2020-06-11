'use strict'

class LikeButton extends React.Component {
  state = {
    liked: false,
  }

  toggleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    
    const TheButton = props => <button onClick={() => this.toggleClick()}>{props.children}</button>;

    if (this.state.liked) {
      return (
        <h1>
          <TheButton>Unlike</TheButton>
          {' Clicked!'}
        </h1>
      );
    }
    return <TheButton>Like</TheButton>;
  }
}

const container = document.querySelector('#root');
ReactDOM.render(<LikeButton />, container)
