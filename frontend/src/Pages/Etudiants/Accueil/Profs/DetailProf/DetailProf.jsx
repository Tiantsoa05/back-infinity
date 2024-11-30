import React from "react";
import "./DetailProf.css"
import { Link } from "react-router-dom";

const DetailProf = ({prof})=>{
    return(
        <div className="detail-prof">
            <div className="image-prof-detail">
                <img src={prof.image} alt="image" className="img-fluid detail-image"/>
            </div>
            <div className="names">
                <h5>{prof.nom} {prof.prenom}</h5>
                <p>Diplome: {prof.diplome}</p>
                <p>Niveau de langue: {prof.niveau}</p>
                <p>Cout: {prof.cout}</p>
            </div>
            <div className="buttons">
                <Link to={"/payer"}>
                    <div className="btn btn-primary">Suivre le prof</div>
                </Link>
                <div className="btn btn-primary">Ne pas suivre</div>
            </div>
        </div>
    )
}

export default DetailProf