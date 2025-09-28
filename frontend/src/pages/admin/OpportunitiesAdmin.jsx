import { useState, useEffect } from "react";
import api from "../../api/api";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOps = async () => {
      try {
        const res = await api.get("/opportunities");
        setOpportunities(res.data);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
      }
    };
    fetchOps();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Opportunities</h1>
      {opportunities.length > 0 ? (
        <ul className="space-y-2">
          {opportunities.map((o) => (
            <li key={o.opportunity_id} className="p-3 border rounded">
              {o.title} — {o.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No opportunities found.</p>
      )}
    </div>
  );
}
