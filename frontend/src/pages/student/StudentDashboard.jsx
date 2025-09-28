import React, { useEffect, useState } from "react";
import { getResults, getSchedules, getOpportunities, getFeedbacks } from "../../api";

const StudentDashboard = () => {
  const [results, setResults] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getResults().then(res => setResults(res.data)).catch(err => console.error(err));
    getSchedules().then(res => setSchedules(res.data)).catch(err => console.error(err));
    getOpportunities().then(res => setOpportunities(res.data)).catch(err => console.error(err));
    getFeedbacks().then(res => setFeedbacks(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">My Results</h2>
          <ul>
            {results.map(r => <li key={r.result_id}>{r.grade} - {r.subject}</li>)}
          </ul>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">My Schedule</h2>
          <ul>
            {schedules.map(s => <li key={s.schedule_id}>{s.day} - {s.subject}</li>)}
          </ul>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Opportunities</h2>
          <ul>
            {opportunities.map(o => <li key={o.opportunity_id}>{o.title}</li>)}
          </ul>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Feedback</h2>
          <ul>
            {feedbacks.map(f => <li key={f.feedback_id}>{f.message}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
