import * as actions from './index'

describe('todo actions', () => {
    it('addItem should create ADD_ITEM action', () => {
        expect(actions.addItem('Milk')).toEqual({
            type: 'ADD_ITEM',
            id: 0,
            item: 'Milk'
        })
    })

    it('markItemDone should create MARK_ITEM_DONE action', () => {
        expect(actions.markItemDone(0)).toEqual({
            type: 'MARK_ITEM_DONE',
            id: 0
        })
    })

    it('setFilter should create SET_FILTER action', () => {
        expect(actions.setFilter('NOT_DONE')).toEqual({
            type: 'SET_FILTER',
            filter: 'NOT_DONE'
        })
    })
})
