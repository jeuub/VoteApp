import React, {Component} from 'react';
import api from '../services/api';

// const App = () => <div>aasdasd</div>;

class App extends Component {
  async componentDidMount(){
    const result = await api.call('post', 'auth/login', {
      username: 'test', 
      password: 'testpassword'
    });

    console.log(result);
  }
  render() {
    return (<div>asdasdasd</div>
    
    )
  }
}

export default App;