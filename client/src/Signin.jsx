

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signin = ({ toggleForm }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message || "Login failed!");

//       // Role-based navigation
//       if (result.user.role === "teamLead") navigate("/teamLead-dashboard");
//       else if (result.user.role === "member") navigate("/member-dashboard");
//       else {
//         toast.error("Access denied! Only teamLead or member can log in.");
//         return;
//       }

//       toast.success("Login successful! Redirecting...", { autoClose: 1500 });
//     } catch (error) {
//       toast.error(error.message || "Login failed! Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Sign In</h1>
//       <div style={styles.socialContainer}>
//         <a href="#" style={styles.social}><i className="fab fa-facebook-f"></i></a>
//         <a href="#" style={styles.social}><i className="fab fa-google-plus-g"></i></a>
//         <a href="#" style={styles.social}><i className="fab fa-linkedin-in"></i></a>
//       </div>
//       <span>or use your account</span>

//       <form onSubmit={handleSubmit(onSubmit)} style={styles.form} noValidate>
//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email", { required: "Email is required" })}
//           style={styles.input}
//         />
//         {errors.email && <p style={styles.error}>{errors.email.message}</p>}

//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: "Password is required" })}
//           style={styles.input}
//         />
//         {errors.password && <p style={styles.error}>{errors.password.message}</p>}

//         <a href="#" style={styles.forgotPassword}>Forgot your password?</a>

//         <button type="submit" style={{ ...styles.button, opacity: loading ? 0.7 : 1 }} disabled={loading}>
//           {loading ? "Signing In..." : "Sign In"}
//         </button>
//       </form>

//       <p>
//         Don't have an account?{" "}
//         <span style={styles.toggleLink} onClick={toggleForm}>Sign Up</span>
//       </p>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     textAlign: "center",
//     backgroundColor: "#f9f9f9",
//   },
//   socialContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginBottom: "10px",
//   },
//   social: {
//     textDecoration: "none",
//     fontSize: "20px",
//     padding: "10px",
//     color: "#333",
//     backgroundColor: "#ddd",
//     borderRadius: "50%",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     width: "100%",
//   },
//   error: {
//     color: "red",
//     fontSize: "12px",
//     marginTop: "-8px",
//   },
//   forgotPassword: {
//     color: "blue",
//     textDecoration: "none",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
//   button: {
//     padding: "10px",
//     borderRadius: "5px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//   },
//   toggleLink: {
//     color: "blue",
//     cursor: "pointer",
//   },
// };

// export default Signin;


// ========== SIGNIN COMPONENT ==========
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Login failed!");

      localStorage.setItem("user", JSON.stringify(result.user));
      navigate(result.user.role === "member" ? "/member-dashboard" : "/teamLead-dashboard");
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white flex rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Sign In Section */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-md mt-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-md mt-2"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            <a href="/forgot-password" className="text-sm text-blue-500 block mt-2">Forgot Your Password?</a>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-2 mt-4 rounded-md hover:bg-purple-700 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
        
        {/* Sign Up Section */}
        <div className="w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center justify-center text-white p-8">
          <h2 className="text-2xl font-bold">Hello, Friend!</h2>
          <p className="mt-2 text-center">Register with your personal details to use all site features</p>
          <button
            onClick={() => navigate("/signup")}
            className="border border-white px-6 py-2 rounded-md mt-4 hover:bg-white hover:text-purple-600 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
