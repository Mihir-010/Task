// import React from 'react'
// import { ListGroup, Button } from "react-bootstrap";
// import { FaTasks, FaTachometerAlt, FaCheckCircle, FaSpinner, FaUsers, FaTrash, FaCog } from "react-icons/fa";


// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column p-3 bg-light vh-100 sidebar">
//     {/* Logo */}
//     <h4 className="text-primary fw-bold mb-4">TaskMe</h4>

//     {/* Menu Items */}
//     <ListGroup variant="flush">
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaTachometerAlt className="me-2" /> Dashboard
//       </ListGroup.Item>
//       <ListGroup.Item action className="d-flex align-items-center active">
//         <FaTasks className="me-2" /> Tasks
//       </ListGroup.Item>
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaCheckCircle className="me-2" /> Completed
//       </ListGroup.Item>
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaSpinner className="me-2" /> In Progress
//       </ListGroup.Item>
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaUsers className="me-2" /> Team
//       </ListGroup.Item>
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaTrash className="me-2" /> Trash
//       </ListGroup.Item>
//     </ListGroup>

//     {/* Settings Button */}
//     <div className="mt-auto">
//       <ListGroup.Item action className="d-flex align-items-center">
//         <FaCog className="me-2" /> Settings
//       </ListGroup.Item>
//     </div>
//   </div>
//   )
// }

// export default Sidebar
import React from 'react';
import { ListGroup } from "react-bootstrap";
import { FaTasks, FaTachometerAlt, FaCheckCircle, FaSpinner, FaUsers, FaTrash, FaCog } from "react-icons/fa";

const Sidebar = ({ onTeamClick }) => {
  return (
    <div className="d-flex flex-column p-3 bg-light vh-100 sidebar">
      {/* Logo */}
      <h4 className="text-primary fw-bold mb-4">TaskMe</h4>

      {/* Menu Items */}
      <ListGroup variant="flush">
        <ListGroup.Item action className="d-flex align-items-center">
          <FaTachometerAlt className="me-2" /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center active">
          <FaTasks className="me-2" /> Tasks
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <FaCheckCircle className="me-2" /> Completed
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <FaSpinner className="me-2" /> In Progress
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center" onClick={onTeamClick}>
          <FaUsers className="me-2" /> Team
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <FaTrash className="me-2" /> Trash
        </ListGroup.Item>
      </ListGroup>

      {/* Settings Button */}
      <div className="mt-auto">
        <ListGroup.Item action className="d-flex align-items-center">
          <FaCog className="me-2" /> Settings
        </ListGroup.Item>
      </div>
    </div>
  );
};

export default Sidebar;
