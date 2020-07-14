import React from 'react'

class Listitems extends React.Component{
	render(){
		return (
				<div className="list-item">
					<h3>{this.props.title}</h3>
					<button>Delete</button>
				</div>
			)
	}
}

export default Listitems