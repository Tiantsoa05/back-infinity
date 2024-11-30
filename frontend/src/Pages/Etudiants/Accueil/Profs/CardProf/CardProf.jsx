import React from "react";


export const CardProf = ({ prof, setProf }) => {
  return (
    <div className="card-prof-profile" onClick={()=>setProf(prof)}>
        <div className="card-group gap-4 card-prof align-items-center">
            <div className="image-prof">
                <img src={prof.image} alt="image" className="img-fluid" />
            </div>
            <div className="names">
                <h5>{prof.nom} {prof.prenom}</h5>
            </div>
        </div>
        <div className="description">
            <div>{prof.diplome}</div>
            <div>{prof.niveau}</div>
            <div>{prof.cout}</div>
        </div>
    </div>
  );
};