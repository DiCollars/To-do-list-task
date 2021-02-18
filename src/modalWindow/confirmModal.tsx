import React from 'react';
import '../modalWindow/modal.css';
import { ConfirmModalProps } from '../actions/interfaces';

function Modal(props: ConfirmModalProps) {
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