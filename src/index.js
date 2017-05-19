import React from 'react';
import ReactDOM from 'react-dom';
import RegisterView from './components/RegisterView';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<RegisterView />, document.getElementById('root'));
registerServiceWorker();
