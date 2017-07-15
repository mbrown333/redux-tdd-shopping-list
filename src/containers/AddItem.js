import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

class AddItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    input;

    handleSubmit(e) {
        e.preventDefault();
        if (!this.input.value || !this.input.value.trim()) {
            return
        }

        this.props.addItem(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref={(node) => this.input = node} />
                    <button type="submit">Add To List</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = {
    addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);