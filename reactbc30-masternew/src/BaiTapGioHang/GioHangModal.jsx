import React, { Component } from 'react';

class GioHangModal extends Component {
    render() {
        let {modalState} = this.props;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <img src={modalState.hinhAnh} alt='...'  className='w-50' />
                                <p>Tên sản phẩm:{modalState.tenSP}</p>
                                <p>Giá bán:{modalState.giaBan}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GioHangModal;
