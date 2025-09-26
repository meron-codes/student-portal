import React, { useEffect, useState } from 'react';
import { getResults } from '../api/api';

const Results = () => {
  const [results, setResults] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchResults = async () => {
      const data = await getResults(user.id, token);
      setResults(data);
    };
    fetchResults();
  }, [user.id, token]);

  return (
    <div>
      <h1>Results</h1>
      {results.map(r => (
        <div key={r.id}>
          <p>{r.subject}: {r.grade} (GPA: {r.gpa})</p>
        </div>
      ))}
    </div>
  );
};

export default Results;

