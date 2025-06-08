import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [complaints, setComplaints] = useState([]);
  const [athletes, setAthletes] = useState([]);
  const [investigations, setInvestigations] = useState([]);
  const [reports, setReports] = useState([]);

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: "0 auto",
      maxWidth: "1200px",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#203c5c",
      color: "#fff",
      borderRadius: "8px",
    },
    tab: {
      padding: "10px 20px",
      cursor: "pointer",
      borderBottom: "2px solid transparent",
    },
    activeTab: {
      borderBottom: "2px solid #ff9800",
    },
    content: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      marginTop: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    th: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
      backgroundColor: "#203c5c",
      color: "#fff",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#ff9800",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ddd",
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderDashboard = () => (
    <div>
      <h2>Admin Case Management</h2>
      <p>Monitor progress of cases and track real-time updates.</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Case ID</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Assigned To</th>
            <th style={styles.th}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data */}
          <tr>
            <td style={styles.td}>C001</td>
            <td style={styles.td}>In Progress</td>
            <td style={styles.td}>John Doe</td>
            <td style={styles.td}>High</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderComplaints = () => (
    <div>
      <h2>Whistleblower Reporting</h2>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Complaint Details</label>
          <textarea style={styles.input} rows="4" placeholder="Enter complaint details"></textarea>
        </div>
        <button style={styles.button} onClick={(e) => e.preventDefault()}>
          Submit Complaint
        </button>
      </form>
    </div>
  );

  const renderAthletes = () => (
    <div>
      <h2>Create Unverified Athlete Account</h2>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Athlete Name</label>
          <input style={styles.input} type="text" placeholder="Enter athlete name" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Sport</label>
          <input style={styles.input} type="text" placeholder="Enter sport" />
        </div>
        <button style={styles.button} onClick={(e) => e.preventDefault()}>
          Create Athlete
        </button>
      </form>
    </div>
  );

  const renderInvestigations = () => (
    <div>
      <h2>Case Assignment</h2>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Case ID</label>
          <input style={styles.input} type="text" placeholder="Enter case ID" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Assign To</label>
          <select style={styles.input}>
            <option value="analyst">Analyst</option>
            <option value="investigator">Investigator</option>
          </select>
        </div>
        <button style={styles.button} onClick={(e) => e.preventDefault()}>
          Assign Case
        </button>
      </form>
    </div>
  );

  const renderReports = () => (
    <div>
      <h2>Review Reports</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Athlete Name</th>
            <th style={styles.th}>Result</th>
            <th style={styles.th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data */}
          <tr>
            <td style={styles.td}>John Doe</td>
            <td style={styles.td}>Doped</td>
            <td style={styles.td}>Positive Test Result</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.nav}>
        <h1>Admin Dashboard</h1>
        <div>
          {["dashboard", "complaints", "athletes", "investigations", "reports"].map((tab) => (
            <span
              key={tab}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : {}),
              }}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>
      </div>
      <div style={styles.content}>
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "complaints" && renderComplaints()}
        {activeTab === "athletes" && renderAthletes()}
        {activeTab === "investigations" && renderInvestigations()}
        {activeTab === "reports" && renderReports()}
      </div>
    </div>
  );
};

export default AdminDashboard;
