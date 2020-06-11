'use strict'

const e = React.createElement;

class LikeButton extends React.Component {
  state = {
    liked: false,
  }

  toggleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    
    const getButton = text => e('button', { onClick: () => this.toggleClick() }, text)

    if (this.state.liked) {
      return e('h1', null, [
        getButton('Unlike'), 
        'Clicked!', 
      ]);
    }
    return getButton('Like');
  }
}

const container = document.querySelector('#root');
ReactDOM.render(e(LikeButton), container)
