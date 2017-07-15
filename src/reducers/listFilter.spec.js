import listFilter from './listFilter';

describe('listFilter reducer', () => {
    it('should handle initial undefined state', () => {
        expect(
            listFilter(undefined, {})
        ).toEqual('ALL')
    })

    it('should handle SET_FILTER', () => {
        expect(
            listFilter([],
                {
                    type: 'SET_FILTER',
                    filter: 'NOT_DONE'
                }
            )
        ).toEqual('NOT_DONE')

        expect(
            listFilter([],
                {
                    type: 'SET_FILTER',
                    filter: 'DONE'
                }
            )
        ).toEqual('DONE')

        expect(
            listFilter([],
                {
                    type: 'SET_FILTER',
                    filter: 'ALL'
                }
            )
        ).toEqual('ALL')
    })
})