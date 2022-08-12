import React, { Component } from 'react';

class GioHangItem extends Component {
    render() {
        let {dienThoai,addtocart} = this.props;
        return (
            <div className='card'>
                <img src={dienThoai.hinhAnh} alt='...' height={400} />
                <div className='card-body text-center'>
                    <h3>{dienThoai.tenSP}</h3>
                    <p>{dienThoai.giaBan.toLocaleString()}</p>
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#modelId" onClick={() => {
                        addtocart(dienThoai);
                    }}>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default GioHangItem;
