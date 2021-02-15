import React from 'react';
import '../modalWindow/modal.css'

interface Props {
    textStyle: string;
    text: string;
    callBack: any;
    onOpenButtonStyle: string;
    confirmText: string;
    onConfirmButtonClick: any;
    onCloseButtonStyle: string;
    onCloseButtonClick: any;
}

function Modal(props: Props) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <span className={props.textStyle}>{props.text}</span>
                <div>{props.callBack}</div>
                <button className={props.onOpenButtonStyle} onClick={props.onConfirmButtonClick}>
                    {props.confirmText}
                </button>
                <button className={props.onCloseButtonStyle} onClick={props.onCloseButtonClick}>
                    Закрыть
                </button>
            </div>
        </div>);
}

export default Modal;