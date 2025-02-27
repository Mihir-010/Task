
// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { BsThreeDotsVertical } from "react-icons/bs"; // Action icon

// const TeamList = () => {
//   const [teamLeads, setTeamLeads] = useState([]);
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     const fetchData = async (role, setData) => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/auth/users/${role}`);
//         const result = await response.json();

//         if (result.users) {
//           setData(result.users);
//         } else {
//           console.error(`Unexpected API response for ${role}:`, result);
//         }
//       } catch (error) {
//         console.error(`Error fetching ${role}:`, error);
//       }
//     };

//     fetchData("teamLead", setTeamLeads);
//     fetchData("member", setMembers);
//   }, []);

//   const containerStyle = {
//     padding: "20px",
//     textAlign: "center",
//     background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
//     color: "#333",
//     animation: "fadeIn 1.5s ease-in-out"
//   };

//   const tableWrapperStyle = {
//     background: "rgba(255, 255, 255, 0.9)",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     backdropFilter: "blur(5px)",
//     margin: "20px auto",
//     width: "90%",
//     maxWidth: "800px"
//   };

//   const tableStyle = {
//     color: "#555"
//   };

//   const profilePicStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     border: "2px solid #ccc"
//   };

//   const actionIconStyle = {
//     cursor: "pointer",
//     transition: "transform 0.2s ease-in-out",
//   };

//   return (
//     <div style={containerStyle}>
//       <h4>Team Leads & Members</h4>
//       <div>
//         {/* Team Leads Table */}
//         <div style={tableWrapperStyle}>
//           <h5>Team Leads</h5>
//           <Table responsive striped hover style={tableStyle}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Profile</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {teamLeads.map((lead) => (
//                 <tr key={lead._id}>
//                   <td>{lead.name}</td>
//                   <td>{lead.email}</td>
//                   <td>
//                     <img
//                       src={lead.profilePhoto || "https://via.placeholder.com/40"}
//                       alt={lead.name}
//                       style={profilePicStyle}
//                     />
//                   </td>
//                   <td style={actionIconStyle}>
//                     <BsThreeDotsVertical size={18} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>

//         {/* Members Table */}
//         <div style={tableWrapperStyle}>
//           <h5>Members</h5>
//           <Table responsive striped hover style={tableStyle}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Profile</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {members.map((member) => (
//                 <tr key={member._id}>
//                   <td>{member.name}</td>
//                   <td>{member.email}</td>
//                   <td>
//                     <img
//                       src={member.profilePhoto || "https://via.placeholder.com/40"}
//                       alt={member.name}
//                       style={profilePicStyle}
//                     />
//                   </td>
//                   <td style={actionIconStyle}>
//                     <BsThreeDotsVertical size={18} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamList;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs"; // Action icon

const TeamList = () => {
  const [teamLeads, setTeamLeads] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async (role, setData) => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/users/${role}`);
        const result = await response.json();

        if (result.users) {
          setData(result.users);
        } else {
          console.error(`Unexpected API response for ${role}:`, result);
        }
      } catch (error) {
        console.error(`Error fetching ${role}:`, error);
      }
    };

    fetchData("teamLead", setTeamLeads);
    fetchData("member", setMembers);
  }, []);

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
    color: "#333",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const tablesContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const tableWrapperStyle = {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    flex: "1 1 45%", // Flex settings for responsiveness
    minWidth: "300px",
  };

  const tableStyle = {
    color: "#555",
  };

  const profilePicStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ccc",
  };

  const actionIconStyle = {
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <h4>Team Leads & Members</h4>
      <div style={tablesContainer}>
        {/* Team Leads Table */}
        <div style={tableWrapperStyle}>
          <h5>Team Leads</h5>
          <Table responsive striped hover style={tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Profile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teamLeads.map((lead) => (
                <tr key={lead._id}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>
                    <img
                      src={lead.profilePhoto || "https://via.placeholder.com/40"}
                      alt={lead.name}
                      style={profilePicStyle}
                    />
                  </td>
                  <td style={actionIconStyle}>
                    <BsThreeDotsVertical size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Members Table */}
        <div style={tableWrapperStyle}>
          <h5>Members</h5>
          <Table responsive striped hover style={tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Profile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member._id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>
                    <img
                      src={member.profilePhoto || "https://via.placeholder.com/40"}
                      alt={member.name}
                      style={profilePicStyle}
                    />
                  </td>
                  <td style={actionIconStyle}>
                    <BsThreeDotsVertical size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TeamList;