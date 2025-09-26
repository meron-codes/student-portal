import React, { useEffect, useState } from 'react';
import { getAnnouncements } from '../api/api';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnnouncements(token);
      setAnnouncements(data);
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Announcements</h1>
      {announcements.map(a => (
        <div key={a.id}>
          <h3>{a.title}</h3>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
