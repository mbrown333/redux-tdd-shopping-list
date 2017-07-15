import React from 'react'

class Filter extends React.Component {
    filter(filter) {
        this.props.onFilterClick(filter)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.filter('ALL')}>
                    All
                </button>
                <button onClick={() => this.filter('NOT_DONE')}>
                    Not Done
                </button>
                <button onClick={() => this.filter('DONE')}>
                    Done
                </button>
            </div>
        )
    }
}

export default Filter