import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// pwa内容
import * as serviceWorker from './serviceWorker';

// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//元素渲染
// function tick() {
//     const element = (
//         <div>
//             <h1>hello,react</h1>
//             <h2>it is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, root);
// }
// setInterval(tick, 1000);