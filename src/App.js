import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        // AJax call 
    }

    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
      } 
 
      handleIncrement = (counter) => {
         console.log('increment clicked', counter);
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = {...counter};
         counters[index].value ++;
         this.setState({counters})
         console.log(this.state.counters[index]);
     }
 
 
      handleDelete = (counterId) => {
        console.log('event handler called'+counterId);
        let counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
     }
 
     handleReset = () => {
         let counters  = this.state.counters.map(c => {
             c.value = 0;
             return c;
         })
         this.setState({counters});
     }

      getSum = (total, num)  => {
        return total + Math.round(num);
      }

     getTotal = () => {
         const arr=[];
         this.state.counters.map(c => arr.push(c.value));
         const sum  =  arr.reduce(this.getSum);
         return sum
     }

    render() { 
        return (<div><Navbar total = {this.getTotal()}/><main className='container'>
                <Counters onReset={this.handleReset}
                onIncrement = {this.handleIncrement}
                onDelete = {this.handleDelete}
                counters = {this.state.counters}/>
            </main>
            </div>);
    }
}
 
export default App;