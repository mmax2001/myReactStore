import { useState } from "react";

export const Form = () =>{

    const [form,setForm] = useState ({
        nombre:"",
        apellido:"",
        email:"",
        emailValidate:"",
    });

    const handleInputData = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    };
    console.log(form)
    
    return(
        <div className="my-2 container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    className="form-control my-2"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese su nombre, por favor"
                    value={form.nombre}
                    onChange={handleInputData}
                    style={{width:"340px"}}
                />

                <label htmlFor="apellido">Apellido:</label>
                <input
                    className="form-control my-2"
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Ingrese su apellido, por favor"
                    value={form.apellido}
                    onChange={handleInputData}
                    style={{width:"340px"}}
                />
                <label htmlFor="email">Email:</label>
                <input
                    className="form-control my-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su email, por favor"
                    value={form.email}
                    onChange={handleInputData}
                    style={{width:"340px"}}
                />
                <label htmlFor="emailValidate">Validar email:</label>
                <input
                    className="form-control my-2"
                    type="email"
                    id="emailValidate"
                    name="emailValidate"
                    placeholder="Ingrese su email nuevamente, por favor"
                    value={form.emailValidate}
                    onChange={handleInputData}
                    style={{width:"340px"}}
                />
                <button type="submit" className="my-3 btn btn-primary">
                    Enviar
                </button>
            </form>

        </div>

    )

}