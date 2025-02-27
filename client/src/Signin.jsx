

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
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
      </form>
    </div>
  );
};

export default Signin;
