// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/Landing.css'
import Logo from '../assets/logo.png'
import img from '../assets/call.png'
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <>
            <section className='banner1'>
                <div className="header container-fluid">
                    <img src={Logo} alt="img" width={100} className='mt-4'/>
                    <Link  to={"/prof/signin"} className='btn btn-light mt-4'>Devenir formateur ?</Link>
                    <button className='btn btn-info mt-4 m-2'>Se connecter ?</button>
                </div>
                <div className="description container-fluid pt-5">
                    <h1 className='fw-bold text-light mt-5'>Parlez le monde : apprenez une langue, ouvrez des horizons !</h1>
                    <p className='text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo obcaecati accusantium 
                        veritatis laudantium optio eos iure ad facilis similique dolore dolorem tempora quidem sint quae, officiis aliquam
                         molestiae consequatur.</p>
                        <Link to={'/langue'} className='btn btn-info p-3'>
                            Créer un compte étudiant
                        </Link>
                </div>
            </section>
            <section className="banner2 pt-5">
                <div className="container-fluid">
                    <h4 className='fw-bold mt-5'>Pourquoi choisir <b className='text-success'>INFINITY Learning</b></h4>
                    <div>
                        <div className='explication'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis facilis enim aperiam ducimus a
                                 itaque id pariatur at, dolores commodi cupiditate vitae,
                                  reiciendis dolore rerum harum asperiores ipsam iste?</p>
                            <button className='btn btn-success'>S&apos;inscrire maintenant</button>
                        </div>
                        <div className='images'>
                            <img src={img} alt="img" width={300}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="temoignage container-fluid pt-5">   
                <h4 className='text-light fw-bold'>Témoignages de nos étudiants</h4>

            </section>
        </>
    )
}

export default Landing;