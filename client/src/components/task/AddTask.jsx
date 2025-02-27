

// import React, { useState, useEffect } from "react";
// import ModalWrapper from "../ModalWrapper";
// import { Dialog } from "@headlessui/react";
// import Textbox from "../Textbox";
// import { useForm } from "react-hook-form";
// import SelectList from "../SelectList";
// import { BiImages } from "react-icons/bi";
// import Button from "../Button";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
// const PRIORITIES = ["HIGH", "MEDIUM", "LOW"];

// const AddTask = ({ open, setOpen }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [team, setTeam] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [stage, setStage] = useState(LISTS[0].toLowerCase()); // Ensure lowercase
//   const [priority, setPriority] = useState(PRIORITIES[1].toLowerCase()); // Ensure lowercase
//   const [assets, setAssets] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   // Fetch user list from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/auth/users/member");
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const submitHandler = async (data) => {
//     setUploading(true);
//     try {
//       const taskData = {
//         title: data.title,
//         team: team.map((member) => member._id),
//         stage: stage.toLowerCase(), // Ensure lowercase
//         date: data.date,
//         priority: priority.toLowerCase(), // Ensure lowercase
//         assets: assets.map((file) => file.name), // Save filenames instead of object URLs
//         activities: [
//           {
//             type: "assigned",
//             activity: `New task has been assigned to you${
//               team.length > 1 ? ` and ${team.length - 1} others.` : "."
//             } The task priority is set as ${priority}, so check and act accordingly. The task date is ${new Date(
//               data.date
//             ).toDateString()}.`,
//             by: JSON.parse(localStorage.getItem("user"))._id, // Use the logged-in user's ID
//           },
//         ],
//       };

//       const response = await fetch("http://localhost:3000/api/tasks/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(taskData),
//       });

//       if (response.ok) {
//         toast.success("Task created successfully!");
//         setOpen(false);
//       } else {
//         toast.error("Failed to create task");
//       }
//     } catch (error) {
//       console.error("Error creating task:", error);
//       toast.error("An error occurred while creating the task");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSelect = (e) => {
//     setAssets(Array.from(e.target.files));
//   };

//   return (
//     <>
//       <ModalWrapper open={open} setOpen={setOpen}>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           <Dialog.Title className="text-base font-bold mb-4">ADD TASK</Dialog.Title>

//           <Textbox
//             placeholder="Task Title"
//             type="text"
//             name="title"
//             label="Task Title"
//             register={register("title", { required: "Title is required" })}
//             error={errors.title?.message}
//           />

//           {/* User Dropdown List */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Assign Team Members</label>
//             <select
//               multiple
//               className="w-full p-2 border rounded"
//               onChange={(e) => {
//                 const selectedUsers = Array.from(e.target.selectedOptions).map((option) =>
//                   JSON.parse(option.value)
//                 );
//                 setTeam(selectedUsers);
//               }}
//             >
//               {users.map((user) => (
//                 <option key={user._id} value={JSON.stringify(user)}>
//                   {user.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-4">
//             <SelectList
//               label="Task Stage"
//               lists={LISTS}
//               selected={stage}
//               setSelected={(value) => setStage(value.toLowerCase())} // Ensure lowercase
//             />
//             <Textbox
//               placeholder="Date"
//               type="date"
//               name="date"
//               label="Task Date"
//               register={register("date", { required: "Date is required" })}
//               error={errors.date?.message}
//             />
//           </div>

//           <div className="flex gap-4">
//             <SelectList
//               label="Priority"
//               lists={PRIORITIES}
//               selected={priority}
//               setSelected={(value) => setPriority(value.toLowerCase())} // Ensure lowercase
//             />
//             <label htmlFor="imgUpload" className="cursor-pointer">
//               <input
//                 type="file"
//                 id="imgUpload"
//                 className="hidden"
//                 onChange={handleSelect}
//                 multiple
//                 accept=".jpg,.png,.jpeg"
//               />
//               <BiImages /> <span>Add Assets</span>
//             </label>
//           </div>

//           <div className="py-6 flex justify-end gap-4">
//             {uploading ? (
//               <span className="text-sm text-red-500">Uploading...</span>
//             ) : (
//               <Button label="Submit" type="submit" />
//             )}
//             <Button label="Cancel" type="button" onClick={() => setOpen(false)} />
//           </div>
//         </form>
//       </ModalWrapper>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// };

// export default AddTask;


import React, { useState, useEffect } from "react";
import ModalWrapper from "../ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "../Textbox";
import { useForm } from "react-hook-form";
import SelectList from "../SelectList";
import { BiImages } from "react-icons/bi";
import Button from "../Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORITIES = ["HIGH", "MEDIUM", "LOW"];

const AddTask = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [team, setTeam] = useState([]);
  const [users, setUsers] = useState([]); // State to store users
  const [stage, setStage] = useState(LISTS[0].toLowerCase());
  const [priority, setPriority] = useState(PRIORITIES[1].toLowerCase());
  const [assets, setAssets] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Fetch user list from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/users/member");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.users || []); // Ensure `data.users` is an array
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  const submitHandler = async (data) => {
    setUploading(true);
    try {
      const taskData = {
        title: data.title,
        team: team.map((member) => member._id),
        stage: stage.toLowerCase(),
        date: data.date,
        priority: priority.toLowerCase(),
        assets: assets.map((file) => file.name),
        activities: [
          {
            type: "assigned",
            activity: `New task has been assigned to you${
              team.length > 1 ? ` and ${team.length - 1} others.` : "."
            } The task priority is set as ${priority}, so check and act accordingly. The task date is ${new Date(
              data.date
            ).toDateString()}.`,
            by: JSON.parse(localStorage.getItem("user"))._id,
          },
        ],
      };

      const response = await fetch("http://localhost:3000/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        toast.success("Task created successfully!");
        setOpen(false);
      } else {
        toast.error("Failed to create task");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("An error occurred while creating the task");
    } finally {
      setUploading(false);
    }
  };

  const handleSelect = (e) => {
    setAssets(Array.from(e.target.files));
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Dialog.Title className="text-base font-bold mb-4">ADD TASK</Dialog.Title>

          <Textbox
            placeholder="Task Title"
            type="text"
            name="title"
            label="Task Title"
            register={register("title", { required: "Title is required" })}
            error={errors.title?.message}
          />

          {/* User Dropdown List */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Assign Team Members</label>
            <select
              multiple
              className="w-full p-2 border rounded"
              onChange={(e) => {
                const selectedUsers = Array.from(e.target.selectedOptions).map((option) =>
                  JSON.parse(option.value)
                );
                setTeam(selectedUsers);
              }}
            >
              {users.map((user) => (
                <option key={user._id} value={JSON.stringify(user)}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <SelectList
              label="Task Stage"
              lists={LISTS}
              selected={stage}
              setSelected={(value) => setStage(value.toLowerCase())}
            />
            <Textbox
              placeholder="Date"
              type="date"
              name="date"
              label="Task Date"
              register={register("date", { required: "Date is required" })}
              error={errors.date?.message}
            />
          </div>

          <div className="flex gap-4">
            <SelectList
              label="Priority"
              lists={PRIORITIES}
              selected={priority}
              setSelected={(value) => setPriority(value.toLowerCase())}
            />
            <label htmlFor="imgUpload" className="cursor-pointer">
              <input
                type="file"
                id="imgUpload"
                className="hidden"
                onChange={handleSelect}
                multiple
                accept=".jpg,.png,.jpeg"
              />
              <BiImages /> <span>Add Assets</span>
            </label>
          </div>

          <div className="py-6 flex justify-end gap-4">
            {uploading ? (
              <span className="text-sm text-red-500">Uploading...</span>
            ) : (
              <Button label="Submit" type="submit" />
            )}
            <Button label="Cancel" type="button" onClick={() => setOpen(false)} />
          </div>
        </form>
      </ModalWrapper>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AddTask;