import 'react-hot-loader/patch';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'bootstrap-material-design/dist/css/ripples.min.css';

// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-material-design/dist/js/material.min.js';
import 'bootstrap-material-design/dist/js/ripples.min.js';


Meteor.startup(() => {

	render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

	if (module.hot) {
		module.hot.accept('../imports/ui/App.jsx', () => {
			const NextApp = require('../imports/ui/App.jsx').default;
			render(
				<AppContainer>
					<NextApp />
				</AppContainer>,
				document.getElementById('app')
			);
		});
	}

});
