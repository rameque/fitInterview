import React, { Component } from 'react';

import ItemIterator from './itemIIterator';

class SearchComponent extends Component {

    filteredItems = [];

    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }

    componentDidMount() {
        
        fetch(this.props.urlPath)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    };

    render () {
        return ( <>

            <label htmlFor="maxCP" className="max-cp">
                <input type="checkbox" id="maxCP" />
                <small>
                    Maximum Combat Points
                </small>
            </label>
            <input type="text" className="input" onKeyUp={(evt) => this.filterElementByValue(evt)}placeholder="Pokemon or type" />
            {this.renderLoader()}
            <ItemIterator results={this.filteredItems}></ItemIterator>
        </>
        );
    }


    renderLoader () {
        return (this.state.isLoaded) ? null : <div className="loader" ></div>;
    }

    filterElementByValue (evt) {
        console.log('evt: ', evt)
        this.filteredItems = [];//this.props.items.filter()
    }

}

export default SearchComponent;
