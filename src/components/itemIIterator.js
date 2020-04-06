import React, { Component } from 'react';

class ItemIterator extends Component {

    render() {

        return (
        <>
            <div>{this.props.results.length}</div>
            <ul className="suggestions">
                {this.renderList()}
            </ul>
        </>);

    }

    renderList () {
        return (this.props.results.length) ? this.props.results.map(this.renderItems) : this.renderNoResults()
    }

    renderItems (item) {

        return (<>
            <li>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="" />
                <div className="info">
                    <h1>
                    <span className="hl">{item.Name}</span>{}</h1>
                    <span className="type electric">Electric</span>
                    <span className="type normal">Normal</span>
                </div>
            </li>
        </>);
    }


    renderNoResults () 
    {
        
        return (<li>
            <img src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png" alt="" />
            <div className="info">
                <h1 className="no-results">
                    No results
                </h1>
            </div>
        </li>);
    }

} 

export default ItemIterator;


