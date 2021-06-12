import React from 'react'
import { DeepMap, FieldError, FieldValues, useForm, UseFormRegister } from 'react-hook-form';

import './styles.scss';

import { REQUIRED_ERROR, PATTERN_ERROR, MIN_ERROR, MAX_ERROR } from '../../utils/globals';

type InputProps = {
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



const Input = ({ label, type, register, errors, reference, validations }: InputProps) => {
    console.log(errors[reference])


    return (<>
        <label>{label}</label>
        <input type={type} {...register(reference, validations)} />
        {errors[reference]?.type === REQUIRED_ERROR ? 'Este campo es requerido' : ''}
        {errors[reference]?.type === PATTERN_ERROR ? 'Algo no está bien... ¿seguro que lo escribiste bien?' : ''}
        {errors[reference]?.type === MIN_ERROR ? 'El valor mínimo para este campo es: 18' : ''}
        {errors[reference]?.type === MAX_ERROR ? 'El valor máximo para este campo es: 100' : ''}
    </>)
}


export const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);


    /* Nombre completo
           -> Email
           -> Celular
           -> Rango de edad 18 - 100 inclusivos */

    return (
        <div className="form-container">



            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre:"
                    type="text" reference="name" validations={{ required: true, pattern: /^[a-zA-ZñÑ]*$/ }} register={register} errors={errors} />

                <Input label="Email:" type="text" reference="email" register={register} errors={errors}
                    validations={{ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }} />

                <Input label="Celular:" type="number" reference="phone" register={register} errors={errors} validations={{ required: true }} />

                <Input label="Edad:" type="number" reference="age" register={register} errors={errors} validations={{ required: true, min: 18, max: 100 }} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

