import React, {useState} from "react";
import "./Accueil.css"
import { Header } from "./Header/Header.jsx";
import { Profs } from "./Profs/Profs.jsx";
import { Menus } from "./Menus/Menus.jsx";
import DetailProf from "./Profs/DetailProf/DetailProf.jsx";
import { Lessons } from "./Lessons/Lessons.jsx";
import { Exercice } from "./Exercice/Exercice.jsx";
import Post from "./Post/Post.jsx";
import { profData } from "../../../data/profs.js";

export const AccueilProf = ()=>{
    const data = profData
    const [profs,setProfs] = useState(data)
    const [valueSearch,setValueSearch] = useState('')
    const [cliquedProf,setCliquedProf] = useState(null)
    const [lessons,DisplayLessons] = useState(false)
    const [exercice,DisplayExercice] = useState(false)

    const setProf = (prof) =>{
        setCliquedProf(prof)
        DisplayExercice(false)
        DisplayLessons(false)
    }

    const setExercice=()=>{
        DisplayExercice(true)
        setCliquedProf(null)
        DisplayLessons(false)
    }

    const setLessons=()=>{
        DisplayLessons(true)
        setCliquedProf(null)
        DisplayExercice(false)
    }

    return (
        <div className="accueil justify-content-center align-items-center w-100 h-100">
            <Header/>
            <div className="card-group align-items-center contents">
                <div className="liste-profs">
                    <div className="intro">
                        <div className="texte">Liste de vos élèves</div>
                        <input 
                            type="text" 
                            className="form-control search-prof"
                            value={valueSearch}
                            onChange={(e)=>{

                                setValueSearch(e.target.value)

                                if(e.target.value.trim() !== ''){
                                    data.forEach(d=>{
                                        if(d.nom.includes(e.target.value)){
                                            setProfs([d])
                                        }
                                    })
                                }else{
                                    setProfs(data)
                                }

                            }}
                        />
                    </div>
                    <div className="list">
                        <Profs profs={profs} setProf={setProf}/>
                    </div>
                </div>
                <div className="details liste-profs">
                    {
                        (cliquedProf !== null) && <DetailProf prof={cliquedProf}/>
                    }
                    {
                        (exercice) && <Exercice/>
                    }
                    {
                        (lessons) && <Lessons/>
                    }
                    <Post/>
                </div>
                <div className="menu liste-profs">
                    <Menus setLessons={setLessons} setExercice={setExercice}/>
                </div>
            </div>
        </div>
    );
}