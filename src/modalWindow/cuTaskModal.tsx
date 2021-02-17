import React, { useState, useEffect } from 'react';
import '../modalWindow/modal.css';
import { Formik, Field, Form } from "formik";
import DB, { getCategories } from '../database/db';

interface Props {
    onCloseButtonClick: any;
    onConfirmButtonClick: any;
    headText: string;
    submitButtonText: string;
    handleSubmit: any,
    placeholderName: string,
    placeholderDescription: string
}

function CUTaskModal(props: Props) {
    const db = DB();
    let items = getCategories(db);
    const [list, setList]: any = useState(null);

    useEffect(() => {
        items.then(result => { setList(result) });
    }, []);

    console.log(list);

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
                            <Field name='name' type='text' placeholder='Введите имя задания' />
                            <Field name="id" as="select">
                                <option value='null' >Выберите категорию</option>
                                {list && list.map((category: any) => 
                                <option value={category.id} >{category.name}</option>
                                )}
                            </Field>
                        </div>

                        <Field name='description' type='text' placeholder='Введите описание задания' />
                        <div>
                            <button type='submit'>{props.submitButtonText}</button>
                            <button onClick={props.onCloseButtonClick}>Закрыть</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >);
}

export default CUTaskModal;