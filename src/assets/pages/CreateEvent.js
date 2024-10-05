import React, { useState, useContext } from 'react';
import EventService from '../services/EventService';
import AuthContext from '../context/AuthContext';

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxAttendees, setMaxAttendees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, description, date, location, maxAttendees };
    EventService.createEvent(event, user.token).then((response) => {
      console.log('Event created successfully');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Create Event</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Event Location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={maxAttendees}
          onChange={(e) => setMaxAttendees(e.target.value)}
          placeholder="Max Attendees"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
