import React from 'react';
import { useSelector } from 'react-redux';
import '../modalWindow/modal.css';
import { Formik, Field, Form } from "formik";
import { CUTaskModalProps, Category, State } from '../actions/interfaces';
import { ImCross } from 'react-icons/im';

function CUTaskModal(props: CUTaskModalProps) {
    const list:Array<Category> = useSelector((state: State) => state.Categories);

    return (
        <div className='modal-overlay'>
            <div className='modal-create-update'>
            <ImCross className='logo-img-path cross-size paddingRightTop ' onClick={props.onCloseButtonClick} />
                <div className='head-text'>{props.headText}</div>
                <Formik
                    initialValues={{ name: props.defaultName, description: props.defaultDescription, categoryId: props.defaultCategoryId }}
                    onSubmit={(values) => {
                        props.handleSubmit(values);
                    }}
                >
                    <Form className='form-padding'>
                        <div>
                            <Field name='name' type='text' maxlength='255' placeholder='Введите имя задания' className='field-name'/>
                            <Field name="categoryId" as="select" className='field-category-task'>
                                <option value='0' >Выберите категорию</option>
                                {list?.map((category: Category) => 
                                <option key={category.id} value={category.id} >{category.name}</option>
                                )}
                            </Field>
                        </div>

                        <Field className='field-desc-task' name='description' type='text' maxlength='1536' placeholder='Введите описание задания' />
                        <div>
                            <button className='create-task-button' type='submit'>{props.submitButtonText}</button>
                            <button className='close-task-button' onClick={props.onCloseButtonClick}>Закрыть</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >);
}

export default CUTaskModal;
