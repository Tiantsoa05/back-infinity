import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'; // Locale (adaptez à votre région si nécessaire)
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Header} from '../Accueil/Header/Header.jsx';
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'Visioconférence',
      start: new Date(2024, 10, 20),
      end: new Date(2024, 10, 20),
      allDay: true,
    },
    {
      title: 'Nouveau chapitre',
      start: new Date(2024, 10, 21),
      end: new Date(2024, 10, 21),
      allDay: true,
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Entrez le titre de l'événement :");
    if (title) {
      setEvents([...events, { title, start, end, allDay: true }]);
    }
  };

  return (
    <div>
      <Header/>
      <h1>Calendrier de Gestion de l'Agenda</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "70vh", width: "20vw",margin: '50px' }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => alert(`Événement : ${event.title}`)}
      />
    </div>
  );
};

export default CalendarPage;
