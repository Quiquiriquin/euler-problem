import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import '../css/general.css'
import Header from './Header';
import Solve from './Solve';
import "react-tabs/style/react-tabs.css";
import Solutions from './Solutions';
class Dashboard extends Component {

	render() { 

		return ( 
			<div className="">
				<div className=" container mt-5">
				<Tabs>
					<TabList>
						<Tab>Solve</Tab>
						<Tab>Solutions</Tab>
					</TabList>

					<TabPanel>
						<Header />
						<Solve />
					</TabPanel>

					<TabPanel>
						<Solutions />
					</TabPanel>
				</Tabs>
					
				</div>
			</div>
		 );
	}
}
 
export default Dashboard;