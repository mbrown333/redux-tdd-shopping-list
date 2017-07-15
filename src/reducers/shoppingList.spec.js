import shoppingList from './shoppingList'

describe('shoppingList reducer', () => {
    it('should handle initial undefined state', () => {
        expect(
            shoppingList(undefined, {})
        ).toEqual([])
    })

    it('should handle ADD_ITEM', () => {
        expect(
            shoppingList([], {
                type: 'ADD_ITEM',
                item: 'Milk',
                id: 0
            })
        ).toEqual([
            {
                item: 'Milk',
                done: false,
                id: 0
            }
        ])

        expect(
            shoppingList([
                {
                    item: 'Milk',
                    done: false,
                    id: 0
                }
            ], {
                    type: 'ADD_ITEM',
                    item: 'Bread',
                    id: 1
                })
        ).toEqual([
            {
                item: 'Milk',
                done: false,
                id: 0
            },
            {
                item: 'Bread',
                done: false,
                id: 1
            }
        ])
    })

    it('should handle MARK_ITEM_DONE', () => {
        expect(
            shoppingList([
                {
                    item: 'Milk',
                    done: false,
                    id: 0
                },
                {
                    item: 'Bread',
                    done: false,
                    id: 1
                },
                {
                    item: 'Beer',
                    done: false,
                    id: 2
                }
            ], {
                    type: 'MARK_ITEM_DONE',
                    id: 2
                })
        ).toEqual([
            {
                item: 'Milk',
                done: false,
                id: 0
            },
            {
                item: 'Bread',
                done: false,
                id: 1
            },
            {
                item: 'Beer',
                done: true,
                id: 2
            }
        ])
    })

})