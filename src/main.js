import ReactDom from 'react-dom';
import React from 'react';
import ReactTabs from './ReactTabs.js';

let TabPanel = ReactTabs.TabPanel;

class App extends React.Component {
	render() {
		return (
			<ReactTabs tabHeight="200px">
				<TabPanel tab="Tab1" key={1}><Tab bg="#ccc">Tab1</Tab></TabPanel>
				<TabPanel tab="Tab2" key={2}><Tab bg="#EDF2F6">Tab2</Tab></TabPanel>
				<TabPanel tab="Tab3" key={3}><Tab bg="#D8E2E9">Tab3</Tab></TabPanel>
				<TabPanel tab="Tab4" key={4}><Tab bg="#bebebe">Tab4</Tab></TabPanel>
			</ReactTabs>
		);
	}
}

class Tab extends React.Component {
	render() {
		return (
			<div style={{height:'100%',width:'100%',background:this.props.bg}}>{this.props.children}</div>	
		)
	}
}



ReactDom.render(<App/>,document.getElementById('app'))