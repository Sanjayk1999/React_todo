import React from 'react'
import List from './List'
import Additem from './Additem'
class App extends React.Component{

	constructor(){
		super();
		this.state = {
		todo:[
			// {
			// 	id:1,
			// 	title:'Do homework'
			// },
			// {
			// 	id:2,
			// 	title:'Workout'
			// },
			// {
			// 	id:3,
			// 	title:'Meditate'
			// }
		],
		count:0
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(){
		if(document.getElementById('add').value!==''){
			var title = document.getElementById('add').value;
			var item = {};
			item.id = this.state.count;
			item.title = title;
			var todo = this.state.todo;
			todo.push(item);
			this.setState({todo:todo});
			this.setState({count:this.state.count+1}); 
	}
	}

	handleDelete(itemId){
		var todo = this.state.todo.filter(item => item.id!==itemId);
		this.setState({todo:todo});
	}

	render(){
		return (
				<div className="app">
					<h1>To do List</h1>
					<Additem onAdd={this.handleAdd}/>
					<List Delete={this.handleDelete} items = {this.state.todo} />
				</div>
			)
	}
}

export default App