// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// import TaskBoard from  "./TaskBoard"
// import TaskCard from "./TaskCard";
// import Sidebar from "./Pages/Sidebar";

// const TeamLeadDashboard = () => {
//   return (
//     <div className="d-flex">
//      <Sidebar/>
//       <Container fluid className="p-4">
//         <Row>
//           <Col md={8}>
//             <TaskBoard />
//           </Col>
//           <Col md={4}>
//             <TaskCard />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default TeamLeadDashboard;
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskBoard from "./TaskBoard";
import TaskCard from "./TaskCard";
import Sidebar from "./Pages/Sidebar";
import axios from "axios";

const TeamLeadDashboard = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  // Function to fetch team members
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/users/member");
      setTeamMembers(response.data.users);
    } catch (error) {
      console.error("Error fetching team members", error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar onTeamClick={fetchTeamMembers} />
      <Container fluid className="p-4">
        <Row>
          <Col md={8}>
            <TaskBoard />
          </Col>
          <Col md={4}>
            <h4>Team Members</h4>
            {teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <TaskCard key={member._id} task={member} />
              ))
            ) : (
              <p>No team members available</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamLeadDashboard;
