import React, { Component } from 'react';

class ItemIterator extends Component {

    render() {

        return (<ul className="suggestions">
            {this.props.results.map(this.renderItems)}
        </ul>);

    }

    renderItems () {
        return (<>
            <li>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="" />
                <div className="info">
                    <h1>
                    <span className="hl">{this.firstName}</span>{this.secondName}</h1>
                    <span className="type electric">Electric</span>
                    <span className="type normal">Normal</span>
                </div>
            </li>
        </>);
    }


    renderNoResults () 
    {
        
        if (this.props.results){

        }
        
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


