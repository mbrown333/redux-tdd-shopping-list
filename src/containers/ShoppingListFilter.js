import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
    onFilterClick: setFilter
}

const ShoppingListFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ShoppingListFilter
