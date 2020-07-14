import React from 'react'
import List from './List'
import Additem from './Additem'
class App extends React.Component{

	constructor(){
		super();
		this.state = {
		todo:[
			{
				id:1,
				title:'Do homework'
			},
			{
				id:2,
				title:'Workout'
			},
			{
				id:3,
				title:'Meditate'
			}
		]
		};
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(){
		var title = document.getElementById('add').value;
		console.log(title);
	}

	render(){
		return (
				<div className="app">
					<h1>To do List</h1>
					<Additem onAdd={this.handleAdd}/>
					<List items = {this.state.todo} />
				</div>
			)
	}
}

export default App