import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
	ErrorPage,
	TopPage,
	AboutEncarPage,
	EncarServicePage,
} from 'pages';

const App = () => (
	<Switch>
		<Route exact path="/company" component={TopPage} />
		<Route exact path="/company/about-encar" component={AboutEncarPage} />
		<Route exact path="/company/encar-service" component={EncarServicePage} />
		<Route render={() => <ErrorPage type="404" />} />
	</Switch>
);

export default App;
