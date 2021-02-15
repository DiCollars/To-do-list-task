import React from 'react';
import '../modalWindow/modal.css'

interface ModalProps {
    /** summary */
    textStyle: string;
    text: string;
    callBack: any;
    onOpenButtonStyle: string;
    onConfirmButtonClick: any;
    onCloseButtonStyle: string;
    onCloseButtonClick: any;
}

function Modal(props: ModalProps) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <span className={props.textStyle}>{props.text}</span>
                <div>{props.callBack}</div>
                <button className={props.onOpenButtonStyle} onClick={props.onConfirmButtonClick}>
                    Да
                </button>
                <button className={props.onCloseButtonStyle} onClick={props.onCloseButtonClick}>
                    Нет
                </button>
            </div>
        </div>);
}

export default Modal;