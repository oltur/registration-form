import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Step1 from './containers/Step1';
import Step2 from './containers/Step2';
import Step3 from './containers/Step3';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/step1" component={Step1} />
		<Route path="/step2" component={Step2} />
		<Route path="/step3" component={Step3} />
	</Switch>
);
