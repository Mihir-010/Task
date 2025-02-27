
import { useEffect, useState } from "react";
 // Keep external styles if needed

const TeamCard = () => {
  const [members, setMembers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/teamleads-members")
      .then((res) => res.json())
      .then((data) => {
        if (data.users) {
          setMembers(data.users);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {filteredMembers.map((member) => (
          <div
            key={member._id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              background: "linear-gradient(135deg, #6E8EF5, #88D3CE)", // Gradient Background
              color: "#fff",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Profile Image */}
            <img
              src={member.profilePhoto || "https://via.placeholder.com/100"}
              alt={member.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
                border: "3px solid white",
              }}
            />
            <h3 style={{ marginBottom: "5px", fontSize: "18px" }}>{member.name}</h3>
            <p style={{ fontSize: "14px" }}>Email: {member.email}</p>
            <p style={{ fontSize: "14px" }}>place: {member.place}</p>
            <p style={{ fontSize: "14px" }}>DateOfBirth: {member.dateOfBirth}</p>
            <p style={{ fontSize: "14px" }}>PhoneNumber: {member.phoneNumber}</p>

            <span
              style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                background: member.role === "teamLead" ? "#ff9a9e" : "#00c9ff",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {member.role === "teamLead" ? "Team Lead" : "Member"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
