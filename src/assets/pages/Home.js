import React, { useEffect, useState } from 'react';
import EventService from '../services/EventService';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    EventService.getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
