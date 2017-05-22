import React from 'react';
import ReactDOM from 'react-dom';
import RegisterView from './components/RegisterView';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SignInView from "./components/SignInView";

ReactDOM.render(<RegisterView />, document.getElementById('root'));
registerServiceWorker();
