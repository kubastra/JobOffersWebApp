import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: "", company: "", location: "", description: "" });

  const fetchJobs = () => {
    fetch("http://localhost:8080/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addJob = () => {
    fetch("http://localhost:8080/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      fetchJobs();
      setForm({ title: "", company: "", location: "", description: "" });
    });
  };

  const deleteJob = (id) => {
    fetch(`http://localhost:8080/api/jobs/${id}`, {
      method: "DELETE",
    }).then(() => fetchJobs());
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Job Offers</h1>

      <div style={{ marginBottom: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button onClick={addJob}>Add Job</button>
      </div>

      {jobs.map((job) => (
        <div key={job.id} style={{ border: "1px solid #ddd", padding: "16px", marginBottom: "12px", borderRadius: "8px" }}>
          <h3>{job.title}</h3>
          <p>{job.company} — {job.location}</p>
          <p>{job.description}</p>
          <button onClick={() => deleteJob(job.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;