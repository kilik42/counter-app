import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);

        //one way of binding handleincrement obj
        //this.handleIncrement = this.handleIncrement.bind(this);
        this.state = {
            count : 0,
            tags: ['tag1', 'tag2', 'tag3']

        };

        this.styles ={
            fontSize: 10,
            fontWeight: 'bold'
        }
    }

    handleIncrement = (product) => {
      console.log(product);
      console.log("increment clicked", this);
      this.setState({count: this.state.count + 1});
    }

    // doHandleIncrement = ()=> {
    //   this.handleIncrement({id:1});
    // }
    render() {

        return (

        <React.Fragment>
            <span style={this.getBadgeClasses()} className ={classes}> {this.formatCount()} </span><br/>
             <button  onCLick = {()=> this.handleIncrement(product)} className="btn btn-secondary btn-sm">increment</button>

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
