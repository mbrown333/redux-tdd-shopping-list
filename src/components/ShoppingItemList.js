import React from 'react'
import { connect } from 'react-redux'
import ShoppingItem from './ShoppingItem'

class ShoppingItemList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, key) => <ShoppingItem key={key} item={item} onItemClick={this.props.onItemClick} />)
                }
            </ul>
        )
    }
}

export default ShoppingItemList