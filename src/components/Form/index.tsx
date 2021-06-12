import React from 'react'
import { useForm } from 'react-hook-form';

import './styles.scss';
import { Input } from '../Input';


export const Form: React.FC<{ openModal: any }> = ({ openModal }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)

        openModal();

        reset({});
    };

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre:"
                    type="text" reference="name" validations={{ required: true, pattern: /^[a-zA-ZñÑ ]*$/, minLength: 3, maxLength: 50 }} register={register} errors={errors} />

                <Input label="Email:" type="text" reference="email" register={register} errors={errors}
                    validations={{ required: true, maxLength: 130, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }} />

                <Input label="Celular:" type="number" reference="phone" register={register} errors={errors} validations={{ required: true, minLength: 10, maxLength: 12 }} />

                <Input label="Edad:" type="number" reference="age" register={register} errors={errors} validations={{ required: true, min: 18, max: 100, maxLength: 3 }} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

