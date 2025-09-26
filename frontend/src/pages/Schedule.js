import React, { useEffect, useState } from 'react';
import { getSchedule } from '../api/api';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const token = localStorage.getItem('token');
  const class_grade = '10'; // Example, replace with dynamic grade

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSchedule(class_grade, token);
      setSchedule(data);
    };
    fetchData();
  }, [class_grade, token]);

  return (
    <div>
      <h1>Schedule</h1>
      {schedule.map(s => (
        <div key={s.id}>
          <p>{s.day_of_week} - {s.subject} {s.holiday_activity ? `(Holiday: ${s.holiday_activity})` : ''}</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
