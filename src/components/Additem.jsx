import React from 'react'

class Additem extends React.Component{
	render(){
		return (
				<div className="add-item">
					<input type="text" placeHolder="add item"/>
					<button>Add item</button>
				</div>
			)
	}
}

export default Additem