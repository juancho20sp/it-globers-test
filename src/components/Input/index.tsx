import React from 'react';
import './styles.scss';

// Types
import { InputProps } from '../../utils/interfaces/inputProps';

import {
    ErrorTypes
} from './errorTypes';

import {
    ErrorMessages
} from './errorMessages';




// This component renders the error message of a form field
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
        <p className="errorMessage">{message}</p>
    )
}

export const Input = ({ label, type, register, errors, reference, validations }: InputProps) => {
    return (<div className="form-row">
        <label>{label}</label>

        {/* We must register the reference and the validations on each field */}
        <input type={type} {...register(reference, validations)} />


        {/* If the error type matches with any of the ones defined before, we will show it on the using the <ErrorMessage /> component */}
        {errors[reference]?.type === ErrorTypes.REQUIRED_ERROR ? <ErrorMessage message={ErrorMessages.REQUIRED_FIELD_ERROR_MSG} /> : ''}

        {errors[reference]?.type === ErrorTypes.PATTERN_ERROR ? <ErrorMessage message={ErrorMessages.SPECIAL_CHARACTER_ERROR_MSG} /> : ''}

        {errors[reference]?.type === ErrorTypes.MIN_ERROR ? <ErrorMessage message={ErrorMessages.MIN_AGE_ERROR_MSG} /> : ''}

        {errors[reference]?.type === ErrorTypes.MAX_ERROR ? <ErrorMessage message={ErrorMessages.MAX_AGE_ERROR_MSG} /> : ''}

        {errors[reference]?.type === ErrorTypes.MIN_LENGTH_ERROR ? <ErrorMessage message={ErrorMessages.MIN_LENGTH_ERROR_MSG} /> : ''}

        {errors[reference]?.type === ErrorTypes.MAX_LENGTH_ERROR ? <ErrorMessage message={ErrorMessages.MAX_LENGTH_ERROR_MSG} /> : ''}
    </div>)
}
