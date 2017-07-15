import React from 'react'

class ShoppingItem extends React.Component {
    constructor(props) {
        super(props)

        this.updateItem = this.updateItem.bind(this)
    }

    updateItem() {
        this.props.onItemClick(this.props.item.id)
    }

    render() {
        return (
            <li onClick={this.updateItem}><input disabled type="checkbox" checked={this.props.item.done} /> {this.props.item.item}</li>
        )
    }
}

export default ShoppingItem