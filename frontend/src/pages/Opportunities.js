import React, { useEffect, useState } from 'react';
import { getOpportunities } from '../api/api';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOpportunities(token);
      setOpportunities(data);
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Opportunities</h1>
      {opportunities.map(o => (
        <div key={o.id}>
          <h3>{o.title}</h3>
          <p>{o.description}</p>
          {o.link && <a href={o.link} target="_blank" rel="noopener noreferrer">More info</a>}
        </div>
      ))}
    </div>
  );
};

export default Opportunities;
