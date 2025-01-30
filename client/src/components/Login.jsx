// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../utils/api";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/auth/login", formData);
//       const { token, user } = res.data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", user.role);

//       // Redirect based on role
//       if (user.role === "admin") navigate("/admin-dashboard");
//       else if (user.role === "teamLead") navigate("/teamlead-dashboard");
//       else navigate("/member-dashboard");
//     } catch (error) {
//       alert(error.response.data.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mb-2 p-2 border w-full"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="mb-4 p-2 border w-full"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/api";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", formData);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      // Redirect based on role
      if (user.role === "admin") navigate("/admin-dashboard");
      else if (user.role === "teamLead") navigate("/teamlead-dashboard");
      else navigate("/member-dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/register" className="text-decoration-none">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
