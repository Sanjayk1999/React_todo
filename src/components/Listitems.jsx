import React from 'react'

class Listitems extends React.Component{
	render(){
		return (
				<div className="list-item">
					<h3>{this.props.title}</h3>
					<button onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
				</div>
			)
	}
}

export default Listitems