import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Timer from './components/timer/Timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Timer/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
