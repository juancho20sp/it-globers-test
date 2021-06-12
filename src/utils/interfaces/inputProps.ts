import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';


export interface InputProps {
    label: string;
    reference: string;
    register: UseFormRegister<FieldValues>
    errors: DeepMap<FieldValues, FieldError>;
    type: string;
    validations?: {
        required?: any;
        min?: any;
        max?: any;
        minLength?: any;
        maxLength?: any;
        pattern?: any;
    }
}