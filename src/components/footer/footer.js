import {BsTelephone,BsWhatsapp,BsFacebook,BsInstagram} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {BiHome} from "react-icons/bi"
import {RiVisaFill} from "react-icons/ri"
import {GrBitcoin} from "react-icons/gr"
import {FaCcMastercard,FaTelegram} from "react-icons/fa"
import logo1 from './logoMarcaB.svg'
import { Link } from 'react-router-dom'


export const FooterBitba=()=>{
    return(
    <>
    <footer className="container my-5">
        {/* <!-- Footer --> */}
        <section className="text-center text-lg-start text-white" style={{backgroundColor: "#45526e"}}>
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Links --> */}
                <section>
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <img src={logo1} alt="logo1" className='logoStyle'/>
                            {/* <img src="imagenes/logoMarcaB.png" alt="Marca Bitba"> */}
                            <p className="parrafoFooter">© 2021 Todos los derechos reservados: Bitba</p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Aceptamos</h6>
                            <GrBitcoin style={{fontSize:"30px",marginRight:"10px"}}/>
                            <RiVisaFill style={{fontSize:"38px",marginRight:"10px"}}/>
                            <FaCcMastercard style={{fontSize:"38px"}}/>
                        </div>

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Enlaces del sitio
                            </h6>
                            <p>
                                <Link to="/" className="text-white" style={{textDecoration:"none"}}>Inicio</Link>        
                            </p>
                            <p>
                                <Link to="/contacto" className="text-white" style={{textDecoration:"none"}}>Contacto</Link>
                            </p>                                   
                        </div>

                        {/* <!-- Grid column --> */}
                        <hr className="w-100 clearfix d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p className="parrafoFooter"><BiHome style={{fontSize:"24px",marginRight:"5px"}} /> Buenos Aires, BA 1824, AR</p>
                            <p className="parrafoFooter"><AiOutlineMail style={{fontSize:"24px",marginRight:"5px"}} /> info@gmail.com</p>
                            <p className="parrafoFooter"><BsTelephone/> + 54 01 0800-0555-1234</p>
                            <p className="parrafoFooter"><BsTelephone/> + 54 01 4765-3421</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}

                <hr />
        
                {/* <!-- Section: Copyright --> */}
                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            {/* <!-- Copyright --> */}
                            <div className="p-3">
                                <p className="parrafoFooter">Seguinos o contactanos tambien en nuestras redes sociales</p>
                            </div>
                            {/* <!-- Copyright --> */}
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-5 col-lg-4 ml-lg-0 textCenter textMdEnd">
                            {/* <!-- Telegram --> */}
                            <a href="www.telegram.com" className="btn btnOutlineLight btnFloating m-1" className="text-white" aria-label="telegram" role="button">
                                <FaTelegram style={{fontSize:"30px",marginRight:"25px"}}/>
                            </a>
                            {/* <!-- Whatsapp --> */}
                            <a href="www.whatsapp.com" className="btn btn-outline-light btn-floating m-1" className="text-white" aria-label="whatsapp" role="button">
                                <BsWhatsapp style={{fontSize:"30px",marginRight:"25px"}}/>
                            </a>
                            {/* <!-- Facebook --> */}
                            <a href="www.facebook.com" className="btn btn-outline-light btn-floating m-1" className="text-white" aria-label="facebook" role="button">
                                <BsFacebook style={{fontSize:"30px",marginRight:"25px"}}/>
                            </a>
                            {/* <!-- Instagram --> */}
                            <a href="www.instagram.com" className="btn btn-outline-light btn-floating m-1" className="text-white" aria-label="instagram" role="button">
                                <BsInstagram style={{fontSize:"30px"}}/>
                            </a> 
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                </section>
                {/* <!-- Section: Copyright --> */}
            </div>
            {/* <!-- Grid container --> */}
        </section>
        {/* <!-- Footer --> */}
    </footer>    
    </>

    )
}