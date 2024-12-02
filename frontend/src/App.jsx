import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landing from './Pages/Landing'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './Pages/login';
import InscriForm from './Pages/Inscription.jsx';
import Payer from './Pages/payer.jsx';
import { Accueil } from './Pages/Etudiants/Accueil/Accueil.jsx';
import  Langue  from './Pages/Etudiants/Langue/Langue.jsx';
import TestNiveau from './Pages/Etudiants/TestNiveau/TestNiveau.jsx';
import Dashboard from './Pages/Etudiants/Dashboard/Dashboard.jsx';
import Courses from './Pages/Etudiants/Contenus/Courses/Courses.jsx';
import Chat from './Pages/prof/Chat.jsx';
import Message from './Pages/prof/Message.jsx';
import MessageInput from './Pages/prof/MessageInput.jsx';
import Chapters from './Pages/Etudiants/Contenus/Courses/Chapter/Chapters.jsx';
import { Exercice } from './Pages/Etudiants/Accueil/Exercice/Exercice.jsx';
import ChatStudent from './Pages/Etudiants/Chat/ChatStudent.jsx';
import InscriptionProf from './Pages/prof/Inscription/InscriptionProf.jsx';
import { AccueilProf } from './Pages/prof/Accueil/AccueilProf.jsx';
import CalendarPage from './Pages/prof/gerercalendrier/calendrier.jsx';
import socket from './tools/socket.js';
import HomePage from './Pages/Etudiants/TestNiveau/AcueilTest.jsx';

socket.emit('message-client', "hi")
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/Inscription" element={<InscriForm />} /> 
        <Route path="/payer" element={<Payer />} />
        <Route path="/lang/:langue" element={<TestNiveau />} />
        <Route path='/langue' element={<Langue />} />
        <Route path='/home' element={<Accueil/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path="/Message" element={<Message/>} />
        <Route path="/MessageInput" element={<MessageInput/>} />
        <Route path="/courses/:titre" element={<Chapters/>} />
        <Route path='/practice' element={<Exercice/>} />
        <Route path='/messenger/:id' element={<ChatStudent/>} />
        <Route path='/prof/signin' element={<InscriptionProf/>} />
        <Route path='/prof/home' element={<AccueilProf/>} />
        <Route path='/prof/calendar' element={<CalendarPage/>} />
        <Route path='/test/home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
