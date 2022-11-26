import React,{Component} from "react";

class Counter extends Component {

    // state={
    //     count: this.props.counter.value,
    // }

    styles = {
        fontSize: '20px'
    }

    render() { 
        console.log(this.props);
        return (<div>
            <h4>Counter # {this.props.counter.id}</h4>
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.handleIncrement(this.props.counter)} className="btn btn-primary">increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">delete</button>
        </div>);
    }


   
    getBadgeClasses(){
        let classes = "badge m-2";
        classes += this.props.counter.value == 0 ? " text-bg-warning" : " text-bg-secondary";
        return classes;
    }

    formatCount(){
        const count = this.props.counter.value;
        return count == 0 ? <h1 style = {this.styles}>Zero</h1> : count;
    }
}
 
export default Counter;