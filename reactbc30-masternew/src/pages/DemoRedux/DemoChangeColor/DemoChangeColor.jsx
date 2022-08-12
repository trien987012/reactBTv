import React, { Component } from 'react';
import { connect} from 'react-redux';

class DemoChangeColor extends Component {
    changeColor = (color) =>{
        const action = {
          type:'CHANGE_COLOR',
          imgCar:`./img/products/${color}-car.jpg`
        }
        // gui du lieu len redux
        this.props.dispatch(action);
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>BT xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <h3>LOAI XE</h3>
                        <img className='w-100' src={this.props.imgCar} alt='xe'/>
                    </div>
                    <div className='col-6'>
                        <h3>DOI MAU</h3>
                        <button className='btn mx-2 ' style={{backgroundColor:'red'}} onClick={()=>{
                            this.changeColor('red');
                        }}>RED</button>
                        <button className='btn mx-2  bg-dark text-white' onClick={()=>{
                            this.changeColor('black');
                        }}>BLACK</button>
                        <button className='btn mx-2 ' style={{backgroundColor:'silver'}} onClick={()=>{
                            this.changeColor('silver');
                        }}>SILVER</button>
                        <button className='btn mx-2 ' style={{backgroundColor:'#eee'}} onClick={()=>{
                            this.changeColor('steel');
                        }}>STEEL</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    imgCar: state.imgCar
})

export default connect(mapStateToProps)(DemoChangeColor);








