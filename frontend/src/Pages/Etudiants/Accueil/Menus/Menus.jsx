import React from "react";
import { Link } from "react-router-dom";
import "./Menus.css"

export const Menus = ({setLessons,setExercice}) => {
    return (
        <div className="menus">
            <Link to={'/courses'}>
                <div className="card btn cursor-pointer justify-content-center btn-lesson">Leçons</div>
            </Link>
            <Link to={'/practice'}>
                <div className="card btn cursor-pointer justify-content-center btn-exo">Pratique</div>
            </Link>
        </div>
    )
}