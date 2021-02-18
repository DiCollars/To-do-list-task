export interface Action<T, P> {
    type: T;
    payload?: P;
}

export interface Task {
    name: string;
    description?: string;
    categoryId?: string;
    id?: number | undefined;
}

export interface Category {
    name: string;
    description?: string;
    id?: number | undefined;
}

export interface State {
    TasksV2: Array<Task>;
}

export interface _Modal<T> {
    showModal: T;
}

export interface ConfirmModalProps { //Разобраться какой тип у колбеков
    textStyle: string;
    text: string;
    callBack: any;
    onOpenButtonStyle: string;
    onConfirmButtonClick: any;
    onCloseButtonStyle: string;
    onCloseButtonClick: any;
}

export interface CUCategoryModalProps { //Разобраться какой тип у колбеков
    onCloseButtonClick: any;
    onConfirmButtonClick: any;
    headText: string;
    submitButtonText: string;
    handleSubmit: any,
    placeholderName: string,
    placeholderDescription: string
}

export interface CUTaskModalProps { //Разобраться какой тип у колбеков
    onCloseButtonClick: any;
    onConfirmButtonClick: any;
    headText: string;
    submitButtonText: string;
    handleSubmit: any,
    placeholderName: string,
    placeholderDescription: string
}
