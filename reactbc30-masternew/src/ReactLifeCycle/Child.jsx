import React, { Component,PureComponent } from 'react';
/* 
Purecomponent: l component khong co lifecycle shouldComponentUpdate, no se xu ly render li khi props thay doi      
(doi voi props la primitive value: number, string ,boolean,undefined,null).
doi voi reference value thi can tao bien dia chi moi va clone du lieu ra = spread operator({...},[...])
*/
class Child extends PureComponent {
    constructor(props){
        super(props);
        this.state ={

        }
        console.log('constructor c');
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps c')
        return null;
    }
    // shouldComponentUpdate(newProps,newState) {
    //     //state number(this.props.number) thay doi thi return true, nguoc lai thi false
    //     if (this.props.number !== newProps.number){
    //         return true;
    //     }
    //     console.log('shouldComponentUpdate child');
    //     return false;
    // } 

    render() {
        console.log('render child')
        return (
            <div className='bg-dark p-5 display-4 text-light' >
                <h3>Number child: {this.props.number}</h3>
                Child component
                <h3>Product: {this.props.product.name} - like: {this.props.product.like}</h3>
            </div>
            
        );
    }

    componentDidMount(){
        //chay moi lan state hoac props thay doi
        //han che setState trong nay , neu co lenh setState phai co if.
        console.log('componentDidMount child')
    }
    
}

export default Child;
