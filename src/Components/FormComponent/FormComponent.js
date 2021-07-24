import { colors, Input } from '@material-ui/core';
import React, { useState } from 'react'
import { Button, Form} from 'semantic-ui-react';
import Products from '../Ticket/Ticket';
function FormComponent({addProduct}) {
    let initialState={
        nombre: "",
        email: "",
    }
    let [values,setValues]=useState(initialState);

    let handleOnChange = (e) => {
		let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    let handleOnSubmit = (e) => {
		e.preventDefault();
		addProduct(values);
        setValues({ ...initialState});
    }
    
    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field>
                    <Input 
                    placeholder="nombre"
                    required
                    onChange={handleOnChange}
                    name="nombre"
                    value={values.nombre}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                    placeholder="email"
                    onChange={handleOnChange}
                    name="email"
                    value={values.email}
                    />
                </Form.Field>
                <Button type='submit'>¡Finalizar!</Button>
            </Form>
        </div>
    )
}

export default FormComponent
