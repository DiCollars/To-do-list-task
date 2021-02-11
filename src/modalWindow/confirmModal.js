import React from 'react';
import '../modalWindow/modal.css'

function Modal(props) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <span>{props.text}</span>
                <button className="modal-close" onClick={props.onCloseButtonClick}>
                    &#10005;
                </button>
                <button className="modal-close" onClick={props.onConfirmButtonClick}>
                    &#10004;
                </button>
            </div>
        </div>);
}

export default Modal;