import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import history from './history';

import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter history={history}>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));

