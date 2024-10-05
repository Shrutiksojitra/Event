import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/events/';

const getEvents = () => {
  return axios.get(API_URL);
};

const createEvent = (eventData, token) => {
  return axios.post(API_URL, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const rsvpEvent = (eventId, token) => {
  return axios.post(
    `${API_URL}${eventId}/rsvp`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  getEvents,
  createEvent,
  rsvpEvent,
};
