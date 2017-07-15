import { connect } from 'react-redux'
import { markItemDone } from '../actions'
import ShoppingItemList from '../components/ShoppingItemList'

const getVisibleListItems = (items, filter) => {
    switch(filter) {
        case 'ALL':
            return items
        case 'NOT_DONE':
            return items.filter((item) => !item.done)
        case 'DONE':
            return items.filter((item) => item.done)
        default:
            return items
    }
}

const mapStateToProps = (state) => ({
  items: getVisibleListItems(state.items, state.filter)
})

const mapDispatchToProps = {
  onItemClick: markItemDone
}

const ShoppingItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingItemList)

export default ShoppingItemListContainer