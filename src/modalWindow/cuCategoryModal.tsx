import React from 'react';
import '../modalWindow/modal.css';
import { Formik, Field, Form } from "formik";
import { CUCategoryModalProps } from '../actions/interfaces';

function CUCategoryModal(props: CUCategoryModalProps) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <span>{props.headText}</span>
                <Formik
                    initialValues={{ name: props.placeholderName, description: props.placeholderDescription }}
                    onSubmit={(values) => {
                        props.handleSubmit(values);
                    }}
                >
                    <Form>
                        <div>
                            <Field name='name' type='text' placeholder='Введите имя категории' />
                        </div>
                        <div>
                            <Field name='description' type='text' placeholder='Введите описание категории' />
                        </div>
                        <div>
                            <button type='submit'>{props.submitButtonText}</button>
                            <button onClick={props.onCloseButtonClick}>Закрыть</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            </div >);
}

export default CUCategoryModal;
