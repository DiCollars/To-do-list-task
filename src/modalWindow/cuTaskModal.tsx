import React, { useState, useEffect } from 'react';
import '../modalWindow/modal.css';
import { Formik, Field, Form } from "formik";
import DB, { getCategories } from '../database/db';
import { CUTaskModalProps, Category } from '../actions/interfaces';

function CUTaskModal(props: CUTaskModalProps) {
    const db = DB();
    let items = getCategories(db);
    const [list, setList] = useState<Array<Category>>([]);

    useEffect(() => {
        items.then(result => { setList(result) });
    }, []);

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
                            <Field name="categoryId" as="select">
                                <option value='0' >Выберите категорию</option>
                                {list?.map((category: Category) => 
                                <option key={category.id} value={category.id} >{category.name}</option>
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
