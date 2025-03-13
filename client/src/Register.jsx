import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex flex-col items-center justify-center p-10">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2 text-sm">Enter your personal details to use all site features</p>
          <button
            onClick={toggleForm}
            className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-indigo-500 transition"
          >
            SIGN IN
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 bg-white rounded-r-lg">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <div className="flex justify-center gap-3 mt-4">
            <a href="#" className="text-gray-500 text-xl"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="text-gray-500 text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-500 text-xl"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="text-gray-500 text-sm mt-2">Use your email for registration</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })} className="w-full px-4 py-2 border rounded" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            
            <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} className="w-full px-4 py-2 border rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            
            <input type="password" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} className="w-full px-4 py-2 border rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            
            <input type="text" placeholder="Place" {...register("place")} className="w-full px-4 py-2 border rounded" />
            <input type="date" placeholder="Date of Birth" {...register("dateOfBirth")} className="w-full px-4 py-2 border rounded" />
            <input type="text" placeholder="Phone Number" {...register("phoneNumber")} className="w-full px-4 py-2 border rounded" />
            
            <select {...register("role")} className="w-full px-4 py-2 border rounded">
              <option value="member">Member</option>
              <option value="teamLead">Team Lead</option>
            </select>
            
            <button type="submit" className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Sign Up</button>
          </form>
          
          <p className="mt-4 text-sm">
            Already have an account? <span className="text-indigo-500 cursor-pointer" onClick={toggleForm}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


// import React from "react";
// import { useForm } from "react-hook-form";

// const Register = ({ toggleForm }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error("Registration failed", error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
//       <h1>Create Account</h1>
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
//         <a href="#" style={{ textDecoration: "none", fontSize: "20px" }}><i className="fab fa-facebook-f"></i></a>
//         <a href="#" style={{ textDecoration: "none", fontSize: "20px" }}><i className="fab fa-google-plus-g"></i></a>
//         <a href="#" style={{ textDecoration: "none", fontSize: "20px" }}><i className="fab fa-linkedin-in"></i></a>
//       </div>
//       <span>or use your email for registration</span>
//       <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        
//         <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        
//         <input type="password" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        
//         <input type="text" placeholder="Place" {...register("place")} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         <input type="date" placeholder="Date of Birth" {...register("dateOfBirth")} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         <input type="text" placeholder="Phone Number" {...register("phoneNumber")} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        
//         <select {...register("role")} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
//           <option value="member">Member</option>
//           <option value="teamLead">Team Lead</option>
//           <option value="admin">Admin</option>
//         </select>
        
//         <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Sign Up</button>
//       </form>
//       <p>
//         Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleForm}>Sign In</span>
//       </p>
//     </div>
//   );
// };

// export default Register;


// import React from "react";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = ({ toggleForm }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         toast.success("Registration successful!");
//       } else {
//         toast.error(result.message || "Registration failed");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
//       <ToastContainer />
//       <h1>Create Account</h1>
//       <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        
//         <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        
//         <input type="password" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
//         {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        
//         <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Sign Up</button>
//       </form>
//       <p>
//         Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleForm}>Sign In</span>
//       </p>
//     </div>
//   );
// };

// export default Register;
