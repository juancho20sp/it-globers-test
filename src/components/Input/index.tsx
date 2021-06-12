import React from 'react';
import './styles.scss';

import {
    REQUIRED_ERROR,
    PATTERN_ERROR,
    MIN_ERROR,
    MAX_ERROR,
    MIN_LENGTH_ERROR,
    MAX_LENGTH_ERROR
} from './errorTypes';

import {
    REQUIRED_FIELD_ERROR_MSG,
    SPECIAL_CHARACTER_ERROR_MSG,
    MIN_AGE_ERROR_MSG,
    MAX_AGE_ERROR_MSG,
    MIN_LENGTH_ERROR_MSG,
    MAX_LENGTH_ERROR_MSG
} from './errorMessages';


import { InputProps } from '../../utils/interfaces/inputProps';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
        <p className="errorMessage">{message}</p>
    )
}

export const Input = ({ label, type, register, errors, reference, validations }: InputProps) => {

    return (<>
        <label>{label}</label>
        <input type={type} {...register(reference, validations)} />

        {errors[reference]?.type === REQUIRED_ERROR ? <ErrorMessage message={REQUIRED_FIELD_ERROR_MSG} /> : ''}

        {errors[reference]?.type === PATTERN_ERROR ? <ErrorMessage message={SPECIAL_CHARACTER_ERROR_MSG} /> : ''}

        {errors[reference]?.type === MIN_ERROR ? <ErrorMessage message={MIN_AGE_ERROR_MSG} /> : ''}

        {errors[reference]?.type === MAX_ERROR ? <ErrorMessage message={MAX_AGE_ERROR_MSG} /> : ''}

        {errors[reference]?.type === MIN_LENGTH_ERROR ? <ErrorMessage message={MIN_LENGTH_ERROR_MSG} /> : ''}

        {errors[reference]?.type === MAX_LENGTH_ERROR ? <ErrorMessage message={MAX_LENGTH_ERROR_MSG} /> : ''}
    </>)
}
