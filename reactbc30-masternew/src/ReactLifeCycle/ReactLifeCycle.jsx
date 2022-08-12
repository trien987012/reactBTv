import React, { Component } from 'react';
import Child from './Child';
class ReactLifeCycle extends Component {
    // componentDidUpdate(prevProps,prevState,[thamso3]) 

    constructor(props){
        super(props);
        this.state ={
            number:1,
            like:1,
            count:60,
            product: {
                id:1,
                name:'',
                like:1
            }
        }
        console.log('constructor ');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;
    }
    shouldComponentUpdate(newProps,newState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render')
        return (
            <div className='container mt-2'>
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-success' onClick={() =>{
                    this.setState({
                        number: this.state.number + 1
                    });
                }}>+</button>
                <h3>Like: {this.state.like}</h3>
                <button className='btn btn-danger' onClick={()=>{
                    // this.setState({
                    //     like: this.state.like + 1
                    // })
                    let product =this.state.product;
                    product.like += 1;

                    this.setState({
                        product:{...product}
                    })
                }}>+</button>

                <Child number={this.state.number}
                product={this.state.number}/>
            </div>
        );
    }
    timeout = {};
    componentDidMount(){
        this.timeout = setInterval(()=>{
            this.setState({
                count:this.state.count -1
            });
            console.log(this.state.count);
        },1000);
        //chay 1 lan sau khi render
        console.log('componentDidMount');
    }

    componentWillUnmount (){
        //willunmount chay truoc khi component mat khoi giao dien
        clearInterval(this.timeout);
    }
}

export default ReactLifeCycle;
