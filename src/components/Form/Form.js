import { useState } from "react";

export const Form = () =>{

    const [form,setForm] = useState ({
        nombre:"",
        apellido:"",
        email:"",
        asunto:"",
        consulta:"",
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
        <>
        <div className="my-2 container">
            <form onSubmit={handleSubmit}>
                <h1>Contactanos</h1>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    className="form-control my-2"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese su nombre, por favor"
                    value={form.nombre}
                    onChange={handleInputData}
                    style={{width:"360px"}}
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
                    style={{width:"360px"}}
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
                    style={{width:"360px"}}
                />

                <label htmlFor="asunto">Asunto:</label>
                <input
                    className="form-control my-2"
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Ingrese aqui el asunto de su consulta, por favor"
                    value={form.asunto}
                    onChange={handleInputData}
                    style={{width:"360px"}}
                />

                <label htmlFor="consulta">Consulta:</label>
                <input
                    className="form-control my-2"
                    type="text"
                    id="consulta"
                    name="consulta"
                    placeholder="Ingrese aqui su consulta, por favor"
                    value={form.consulta}
                    onChange={handleInputData}
                    style={{width:"360px",height:"150px"}}
                />
                <button type="submit" className="my-3 btn btn-primary">
                    Enviar
                </button>
            </form>
            
        </div>
        </>
    )

}