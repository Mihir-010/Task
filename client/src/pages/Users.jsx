
// import React, { useEffect, useState } from "react";
// import { Table, Button } from "react-bootstrap";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 5; // Adjust per your needs

//   useEffect(() => {
//     fetch("http://localhost:3000/api/auth/users/member")
//       .then((response) => response.json())
//       .then((data) => setUsers(data.users))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Pagination Logic
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Team Members</h2>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>User</th>
//             <th>Created</th>
//             <th>Status</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1 + indexOfFirstUser}</td>
//               <td>
//                 <img
//                   src={user.profileImage || "https://via.placeholder.com/40"}
//                   alt={user.name}
//                   className="rounded-circle me-2"
//                   style={{ width: "40px", height: "40px" }}
//                 />
//                 {user.name}
//                 <br />
//                 <small className="text-muted">{user.role}</small>
//               </td>
//               <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//               <td>
//                 <span className={`badge bg-${getStatusClass(user.status)}`}>
//                   {user.status}
//                 </span>
//               </td>
//               <td>{user.email}</td>
//               <td>
//                 <Button variant="primary" size="sm" className="me-1">
//                   🔍
//                 </Button>
//                 <Button variant="warning" size="sm" className="me-1">
//                   ✏️
//                 </Button>
//                 <Button variant="danger" size="sm">🗑</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-center">
//         {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
//           <Button
//             key={i}
//             variant={currentPage === i + 1 ? "dark" : "light"}
//             className="mx-1"
//             size="sm"
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Function to determine Bootstrap class for status
// const getStatusClass = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Banned":
//       return "danger";
//     case "Pending":
//       return "warning";
//     default:
//       return "light";
//   }
// };

// export default Users;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Adjust per your needs

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/users/member")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Team Members</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Place</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1 + indexOfFirstUser}</td>
              <td>
                <img
                  src={user.profileImage || "https://via.placeholder.com/40"}
                  alt={user.name}
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.place}</td>
              <td>{new Date(user.dateOfBirth).toLocaleDateString()}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            className={`btn btn-${currentPage === i + 1 ? "dark" : "light"} mx-1 btn-sm`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
