import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'xiao',
  lastName: 'xin'
};

//组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {

 /*  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleDateString()
      })
    }, 1000)
  }
  componentWillUnMount() {
    clearInterval(this.timerId);
  } */

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* 最外层只能是一个div */}
      <p>
        hello, {formatName(user)}
      </p>

      <p>
        {/* {welcome({name: "gogo"})} */}
        {/* 这种形式w必须大写 */}
        <Welcome name="gogo" />
        <Welcome name="gogogo" />
      </p>

      
    </div>
  );
};

// const names = 'josh perez';
// const element = <h2>hello, {names}</h2>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

export default App;
