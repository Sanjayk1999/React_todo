import React from 'react'
import List from './List'

class App extends React.Component{
	state = {
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
	}

	render(){
		return (
				<div className="app">
					<h1>To do List</h1>
					<List items = {this.state.todo} />
				</div>
			)
	}
}

export default App