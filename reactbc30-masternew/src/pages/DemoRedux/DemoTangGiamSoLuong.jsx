import React, { Component } from 'react';
import {connect} from 'react-redux'
class DemoTangGiamSoLuong extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Demo tang giam so luong</h3>
                <p>
                    Number: {this.props.number} ok?
                </p>
                <button className='btn btn-success' onClick={()=>{
                    //9action: dai dien du lieu gui len store lam thay doi state
                    const action ={
                        type:'TANG_SO_LUONG',//thuoc tinh
                        newNumber: this.props.number +1
                    }
                    //du lieu hm this.props.dispatch de gui du lieu len redux
                    this.props.dispatch(action);
                }}>+</button>

                <button className='btn btn-danger' onClick={()=>{
                    //9action: dai dien du lieu gui len store lam thay doi state
                    const action ={
                        type:'GIAM_SO_LUONG',//thuoc tinh
                        newNumber: this.props.number  - 1
                    }
                    //du lieu hm this.props.dispatch de gui du lieu len redux
                    this.props.dispatch(action);
                }}>-</button>
            </div>
        );
    }
}

//HOC
/*
chuyen s
*/
const mapStateToProps =(rootReducer) =>{
    return {
        number: rootReducer.number
    }
}

//component chua state redux = connect()(DemoTangGiamSoLuong);
export default connect(mapStateToProps)(DemoTangGiamSoLuong)
