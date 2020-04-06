import React, { Component } from 'react';

import ItemIterator from './itemIIterator';

class SearchComponent extends Component {

    filteredItems = [];

    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            items: []
          };
    }

    componentDidMount() {
        
        fetch(this.props.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
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
            <input type="text" className="input" onKeyUp={(evt) => this.filterElementByValue(evt.target.value)}placeholder="Pokemon or type" />
            {this.renderLoader()}
            <ItemIterator results={this.state.items}></ItemIterator>
        </>
        );
    }


    renderLoader () {
        return (this.state.isLoaded) ? null : <div className="loader" ></div>;
    }

    filterElementByValue (value) {

        let k = 0;
        let filteredItemsByName = [];

        if(value.length >= 2) {
            filteredItemsByName = this.state.data.filter((item) => {
                if(item.Name.indexOf(value) !== -1 && k <= 4){ 
                    ++k;
                } else if (item.Types.indexOf(value)) {
                    ++k;
                }

                return  (k <= 4 && (item.Name.indexOf(value) || item.Types.indexOf(value)));
            });
        }

        this.setState({
            items: filteredItemsByName
        });
    }

}

export default SearchComponent;
