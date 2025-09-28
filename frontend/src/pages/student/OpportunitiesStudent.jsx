import { useState, useEffect } from "react";
import api from "../../api/api";

export default function Opportunities() {
  const [opps, setOpps] = useState([]);

  useEffect(() => {
    const fetchOpps = async () => {
      try {
        const res = await api.get("/opportunities");
        setOpps(res.data);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
      }
    };
    fetchOpps();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Opportunities</h1>
      {opps.length > 0 ? (
        <ul className="space-y-2 mt-4">
          {opps.map((o) => (
            <li key={o.opportunity_id} className="p-3 border rounded">
              {o.title} — {o.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No opportunities available.</p>
      )}
    </div>
  );
}
