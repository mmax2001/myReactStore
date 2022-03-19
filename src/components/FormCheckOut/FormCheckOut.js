import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from "react-bootstrap";
import { useContext ,useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { createOrder } from "../../firebase/createOrder";
import { OrderCode } from "./OrderCode";

export default function FormCheckOut() {
  
  const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    ValidateEmail: Yup.string()
      .required("Campo Requerido")
      .oneOf([Yup.ref('Email'), null], "El email ingresado no coincide")
      .required('Campo Requerido')
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    BuyerName: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required("Campo Requerido"),
    Phone: Yup.number()
      .required("Campo Requerido")
      .min(8, `Mínimo  8 caracteres`),
  });

  const {cartBuy,totalItemsPrice,clearCart} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  
  const [dataBuyer,setDataBuyer] = useState ({
        email:"",
        ValidateEmail:"",
        nombre:"",
        telefono:"",        
  });

  
  const handleSubmit = (values) =>{
    
    setDataBuyer(values);
    createOrder(values, cartBuy, totalItemsPrice, setOrderId, clearCart);
    alert("La orden ha sido enviada");
        
  };
    
  
  if (orderId) {
        return <OrderCode order={orderId}/>
  }

  if(cartBuy.length===0){
    return <Navigate to="/"/>
  }

  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          ValidateEmail:"",
          BuyerName: "",
          Phone: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          setDataBuyer(dataBuyer);       
          handleSubmit(values);
        }}          
        
      >
        <div className="container my-5">
          <h2>Finalizar Compra</h2>
          <hr />

        <Form>
          <FormGroup>
            <label htmlFor='BuyerName'>Nombre : </label>
            <Field
              className='form-control'
              name='BuyerName'
              placeholder=''
              type='text'        
            />
            <ErrorMessage
              name='BuyerName'
              component='div'
              className='field-error text-danger'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='Email'>Correo Electronico: </label>
            <Field
              className='form-control'
              name='Email'
              placeholder=''
              type='email'
            />
            <ErrorMessage
              name='Email'
              component='div'
              className='field-error text-danger'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='Email'>Reingresar Correo Electronico: </label>
            <Field
              className='form-control'
              name='ValidateEmail'
              placeholder=''
              type='email'
            />
            <ErrorMessage
              name='ValidateEmail'
              component='div'
              className='field-error text-danger'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='Phone'>Teléfono: </label>
            <Field
              className='form-control'
              name='Phone'
              placeholder=''
              type='number'
            />
            <ErrorMessage
              name='Phone'
              component='div'
              className='field-error text-danger'
            />
          </FormGroup>
          <Row style={{marginTop:"10px"}}>
            <Col lg={12} md={12}>
              <Button
                color='primary'
                className='mr-1 mb-1 btn-block'
                type='submit'
              >
                Enviar Orden
              </Button>
            </Col>
          </Row>
        </Form>
        </div>
      </Formik>
    </>
  );
}
