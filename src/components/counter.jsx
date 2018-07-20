import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            tags: ['tag1', 'tag2', 'tag3']

        };

        this.styles ={
            fontSize: 10,
            fontWeight: 'bold'
        }
    }
    render() {

        return (

        <React.Fragment>
            <span style={this.getBadgeClasses()} className ={classes}> {this.formatCount()} </span><br/>
             <button className="btn btn-secondary btn-sm">increment</button>

            <ul>
          {this.state.tags.map(tag=> <li key={tag}>{tag} </li>)}


            </ul>

         </React.Fragment>
       );

    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){

        const {count } = this.state;

        const x = <h1>zero</h1>

        return count === 0 ?  x : count;
    }
}

export default Counter;
