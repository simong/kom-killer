import React from 'react';
import { Link } from 'react-router-dom';

// TODO embed environment variable in lambda and exchange for real token so I can begin hitting actual API

class TokenHandler extends React.Component {

  state = {
    code: '',
    strava: null
  }

  async componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code')
    try {
      const response = await fetch(`https://cxwj5fkd00.execute-api.us-east-1.amazonaws.com/prod?code=${code}`).then(res => res.json())
      console.log(response)
      return this.setState({ strava: response })
    } catch(error) {
      console.log(error) 
    }
  }

  render(){
    return (
      <>
        <div><Link to='/'>Home</Link></div>
        <div>token handler</div>
        <div>{this.state.code}</div>
        <div>{JSON.stringify(this.state.strava)}</div>
      </>
    ) 
  }
}

export default TokenHandler;
