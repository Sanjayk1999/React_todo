import React from 'react'
import Listitems from './Listitems'
class List extends React.Component{

	render(){

		return (
				<div className="list">
					{this.props.items.map(item=> <Listitems key={item.id} title={item.title}/>)}
				</div>
			)
	}
}

export default List