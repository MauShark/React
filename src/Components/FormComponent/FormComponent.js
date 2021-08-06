import { Input } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./FormComponent.css"
function FormComponent({ addProduct }) {
  let initialState = {
    nombre: "",
    apellido:"",
    telefono:"",
    email: "",
  };
  let [values, setValues] = useState(initialState);

  let handleOnChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    addProduct(values);
    setValues({ ...initialState });
  };

  return (
    <div className="form-container">
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
            placeholder="apellido"
            onChange={handleOnChange}
            name="apellido"
            value={values.apellido}
          />
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="telefono"
            onChange={handleOnChange}
            name="telefono"
            value={values.telefono}
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
        <Button type="submit">¡Finalizar!</Button>
      </Form>
    </div>
  );
}

export default FormComponent;
