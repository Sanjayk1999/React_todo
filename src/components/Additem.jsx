import React from 'react'

class Additem extends React.Component{
	render(){
		return (
				<div className="add-item">
					<input id="add" type="text" placeholder="add item"/>
					<button onClick={()=>this.props.onAdd()}>Add item</button>
				</div>
			)
	}
}

export default Additem