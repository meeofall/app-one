import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import GettingStartedPage from './pages/GettingStarted';
import FaqPage from './pages/Faq';
import DocsPage from './pages/Docs';
import ContactUsPage from './pages/ContactUs';
import PricingPage from './pages/Pricing';
import WhyiSchoolManagerPage from './pages/WhyiSchoolManager';

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/Home" component={HomePage} />
					<Route exact path="/GettingStarted" component={GettingStartedPage} />
					<Route exact path="/Faq" component={FaqPage} />
					<Route exact path="/Docs" component={DocsPage} />
                    <Route exact path="/ContactUs" component={ContactUsPage} />
                    <Route exact path="/Pricing" component={PricingPage} />
                    <Route exact path="/WhyiSchoolManager" component={WhyiSchoolManagerPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
