import React from 'react';
import axios from 'axios';

class JokesList extends React.Component {
  state = {
    jokes: [],
    type: '',
    setup: '',
    punchline: ''
  };

  componentDidMount() {
    const token = localStorage.getItem('jwt');

    const options = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(`http://localhost:3300/api/jokes`, options)
      .then(response => {
        console.log(response.data);
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
    <div>
      <h1>Get Your Jokes Here:</h1>
      {this.state.jokes.map(joke => <div className={"joke"} key={joke.id} joke={joke} >
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
    </div>)}
    </div>
    );
  }
}

export default JokesList;