// import clsx from "clsx";
// import moment from "moment";
// import React, { useState } from "react";
// import { FaBug, FaTasks, FaThumbsUp, FaUser } from "react-icons/fa";
// import { GrInProgress } from "react-icons/gr";
// import {
//   MdKeyboardArrowDown,
//   MdKeyboardArrowUp,
//   MdKeyboardDoubleArrowUp,
//   MdOutlineDoneAll,
//   MdOutlineMessage,
//   MdTaskAlt,
// } from "react-icons/md";
// import { RxActivityLog } from "react-icons/rx";
// import { useParams } from "react-router-dom";
// import { toast } from "sonner";
// import { tasks } from "../assets/data";
// import Tabs from "../components/Tabs";
// import { PRIOTITYSTYELS, TASK_TYPE, getInitials } from "../utils";
// import Loading from "../components/Loader";
// import Button from "../components/Button";

// const assets = [
//   "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/804049/pexels-photo-804049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// ];

// const ICONS = {
//   high: <MdKeyboardDoubleArrowUp />,
//   medium: <MdKeyboardArrowUp />,
//   low: <MdKeyboardArrowDown />,
// };

// const bgColor = {
//   high: "bg-red-200",
//   medium: "bg-yellow-200",
//   low: "bg-blue-200",
// };

// const TABS = [
//   { title: "Task Detail", icon: <FaTasks /> },
//   { title: "Activities/Timeline", icon: <RxActivityLog /> },
// ];

// const TASKTYPEICON = {
//   commented: (
//     <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white'>
//       <MdOutlineMessage />,
//     </div>
//   ),
//   started: (
//     <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
//       <FaThumbsUp size={20} />
//     </div>
//   ),
//   assigned: (
//     <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white'>
//       <FaUser size={14} />
//     </div>
//   ),
//   bug: (
//     <div className='text-red-600'>
//       <FaBug size={24} />
//     </div>
//   ),
//   completed: (
//     <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
//       <MdOutlineDoneAll size={24} />
//     </div>
//   ),
//   "in progress": (
//     <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white'>
//       <GrInProgress size={16} />
//     </div>
//   ),
// };

// const act_types = [
//   "Started",
//   "Completed",
//   "In Progress",
//   "Commented",
//   "Bug",
//   "Assigned",
// ];

// const TaskDetails = () => {
//   const { id } = useParams();

//   const [selected, setSelected] = useState(0);
//   const task = tasks[3];

//   return (
//     <div className='w-full flex flex-col gap-3 mb-4 overflow-y-hidden'>
//       <h1 className='text-2xl text-gray-600 font-bold'>{task?.title}</h1>

//       <Tabs tabs={TABS} setSelected={setSelected}>
//         {selected === 0 ? (
//           <>
//             <div className='w-full flex flex-col md:flex-row gap-5 2xl:gap-8 bg-white shadow-md p-8 overflow-y-auto'>
//               {/* LEFT */}
//               <div className='w-full md:w-1/2 space-y-8'>
//                 <div className='flex items-center gap-5'>
//                   <div
//                     className={clsx(
//                       "flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full",
//                       PRIOTITYSTYELS[task?.priority],
//                       bgColor[task?.priority]
//                     )}
//                   >
//                     <span className='text-lg'>{ICONS[task?.priority]}</span>
//                     <span className='uppercase'>{task?.priority} Priority</span>
//                   </div>

//                   <div className={clsx("flex items-center gap-2")}>
//                     <div
//                       className={clsx(
//                         "w-4 h-4 rounded-full",
//                         TASK_TYPE[task.stage]
//                       )}
//                     />
//                     <span className='text-black uppercase'>{task?.stage}</span>
//                   </div>
//                 </div>

//                 <p className='text-gray-500'>
//                   Created At: {new Date(task?.date).toDateString()}
//                 </p>

//                 <div className='flex items-center gap-8 p-4 border-y border-gray-200'>
//                   <div className='space-x-2'>
//                     <span className='font-semibold'>Assets :</span>
//                     <span>{task?.assets?.length}</span>
//                   </div>

//                   <span className='text-gray-400'>|</span>

//                   <div className='space-x-2'>
//                     <span className='font-semibold'>Sub-Task :</span>
//                     <span>{task?.subTasks?.length}</span>
//                   </div>
//                 </div>

//                 <div className='space-y-4 py-6'>
//                   <p className='text-gray-600 font-semibold test-sm'>
//                     TASK TEAM
//                   </p>
//                   <div className='space-y-3'>
//                     {task?.team?.map((m, index) => (
//                       <div
//                         key={index}
//                         className='flex gap-4 py-2 items-center border-t border-gray-200'
//                       >
//                         <div
//                           className={
//                             "w-10 h-10 rounded-full text-white flex items-center justify-center text-sm -mr-1 bg-blue-600"
//                           }
//                         >
//                           <span className='text-center'>
//                             {getInitials(m?.name)}
//                           </span>
//                         </div>

//                         <div>
//                           <p className='text-lg font-semibold'>{m?.name}</p>
//                           <span className='text-gray-500'>{m?.title}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className='space-y-4 py-6'>
//                   <p className='text-gray-500 font-semibold text-sm'>
//                     SUB-TASKS
//                   </p>
//                   <div className='space-y-8'>
//                     {task?.subTasks?.map((el, index) => (
//                       <div key={index} className='flex gap-3'>
//                         <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-50-200'>
//                           <MdTaskAlt className='text-violet-600' size={26} />
//                         </div>

//                         <div className='space-y-1'>
//                           <div className='flex gap-2 items-center'>
//                             <span className='text-sm text-gray-500'>
//                               {new Date(el?.date).toDateString()}
//                             </span>

//                             <span className='px-2 py-0.5 text-center text-sm rounded-full bg-violet-100 text-violet-700 font-semibold'>
//                               {el?.tag}
//                             </span>
//                           </div>

//                           <p className='text-gray-700'>{el?.title}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               {/* RIGHT */}
//               <div className='w-full md:w-1/2 space-y-8'>
//                 <p className='text-lg font-semibold'>ASSETS</p>

//                 <div className='w-full grid grid-cols-2 gap-4'>
//                   {task?.assets?.map((el, index) => (
//                     <img
//                       key={index}
//                       src={el}
//                       alt={task?.title}
//                       className='w-full rounded h-28 md:h-36 2xl:h-52 cursor-pointer transition-all duration-700 hover:scale-125 hover:z-50'
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <Activities activity={task?.activities} id={id} />
//           </>
//         )}
//       </Tabs>
//     </div>
//   );
// };

// const Activities = ({ activity, id }) => {
//   const [selected, setSelected] = useState(act_types[0]);
//   const [text, setText] = useState("");
//   const isLoading = false;

//   const handleSubmit = async () => {};

//   const Card = ({ item }) => {
//     return (
//       <div className='flex space-x-4'>
//         <div className='flex flex-col items-center flex-shrink-0'>
//           <div className='w-10 h-10 flex items-center justify-center'>
//             {TASKTYPEICON[item?.type]}
//           </div>
//           <div className='w-full flex items-center'>
//             <div className='w-0.5 bg-gray-300 h-full'></div>
//           </div>
//         </div>

//         <div className='flex flex-col gap-y-1 mb-8'>
//           <p className='font-semibold'>{item?.by?.name}</p>
//           <div className='text-gray-500 space-y-2'>
//             <span className='capitalize'>{item?.type}</span>
//             <span className='text-sm'>{moment(item?.date).fromNow()}</span>
//           </div>
//           <div className='text-gray-700'>{item?.activity}</div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className='w-full flex gap-10 2xl:gap-20 min-h-screen px-10 py-8 bg-white shadow rounded-md justify-between overflow-y-auto'>
//       <div className='w-full md:w-1/2'>
//         <h4 className='text-gray-600 font-semibold text-lg mb-5'>Activities</h4>

//         <div className='w-full'>
//           {activity?.map((el, index) => (
//             <Card
//               key={index}
//               item={el}
//               isConnected={index < activity.length - 1}
//             />
//           ))}
//         </div>
//       </div>

//       <div className='w-full md:w-1/3'>
//         <h4 className='text-gray-600 font-semibold text-lg mb-5'>
//           Add Activity
//         </h4>
//         <div className='w-full flex flex-wrap gap-5'>
//           {act_types.map((item, index) => (
//             <div key={item} className='flex gap-2 items-center'>
//               <input
//                 type='checkbox'
//                 className='w-4 h-4'
//                 checked={selected === item ? true : false}
//                 onChange={(e) => setSelected(item)}
//               />
//               <p>{item}</p>
//             </div>
//           ))}
//           <textarea
//             rows={10}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder='Type ......'
//             className='bg-white w-full mt-10 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-blue-500'
//           ></textarea>
//           {isLoading ? (
//             <Loading />
//           ) : (
//             <Button
//               type='button'
//               label='Submit'
//               onClick={handleSubmit}
//               className='bg-blue-600 text-white rounded'
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TaskDetails;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Tabs from "../components/Tabs";
import Loading from "../components/Loader";
import Button from "../components/Button";

const TABS = [
  { title: "Task Detail", icon: "📋" },
  { title: "Activities/Timeline", icon: "📜" },
];

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
      const data = await response.json();
      if (response.ok) {
        setTask(data);
      } else {
        toast.error("Failed to fetch task");
      }
    } catch (error) {
      toast.error("Error fetching task");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Task deleted successfully");
        navigate("/tasks"); // Redirect to tasks list
      } else {
        toast.error("Failed to delete task");
      }
    } catch (error) {
      toast.error("Error deleting task");
    }
  };

  const handleEdit = async () => {
    const updatedTitle = prompt("Enter new title", task.title);
    if (!updatedTitle) return;
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: updatedTitle }),
      });
      if (response.ok) {
        toast.success("Task updated successfully");
        fetchTask();
      } else {
        toast.error("Failed to update task");
      }
    } catch (error) {
      toast.error("Error updating task");
    }
  };

  if (loading) return <Loading />;
  if (!task) return <p className="text-center">Task not found</p>;

  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">{task.title}</h1>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {selected === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Task Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      task.stage === "todo"
                        ? "bg-blue-100 text-blue-800"
                        : task.stage === "in-progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {task.stage}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">Priority:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">Created At:</span>
                  <span className="text-sm text-gray-600">
                    {new Date(task.date).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">Assets:</span>
                  <span className="text-sm text-gray-600">
                    {task.assets?.length || 0}
                  </span>
                </div>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
                <div className="space-y-2">
                  {task.team?.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                        {member.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Button
                label="Edit Task"
                onClick={handleEdit}
                className="bg-yellow-500 text-white hover:bg-yellow-600"
              />
              <Button
                label="Delete Task"
                onClick={handleDelete}
                className="bg-red-600 text-white hover:bg-red-700"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Activities/Timeline</h3>
            <div className="space-y-4">
              {task.activities?.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    {activity.type?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{activity.by?.name}</p>
                    <p className="text-xs text-gray-500">{activity.activity}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(activity.date).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default TaskDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import Tabs from "../components/Tabs";
// import Loading from "../components/Loader";
// import Button from "../components/Button";

// const TABS = [
//   { title: "Task Detail", icon: "📋" },
//   { title: "Activities/Timeline", icon: "📜" },
// ];

// const TaskDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [task, setTask] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selected, setSelected] = useState(0);

//   useEffect(() => {
//     fetchTask();
//   }, [id]);

//   const fetchTask = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
//       const data = await response.json();
//       if (response.ok) {
//         setTask(data);
//       } else {
//         toast.error("Failed to fetch task");
//       }
//     } catch (error) {
//       toast.error("Error fetching task");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this task?")) return;
//     try {
//       const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         toast.success("Task deleted successfully");
//         navigate("/tasks"); // Redirect to tasks list
//       } else {
//         toast.error("Failed to delete task");
//       }
//     } catch (error) {
//       toast.error("Error deleting task");
//     }
//   };

//   const handleEdit = async () => {
//     const updatedTitle = prompt("Enter new title", task.title);
//     if (!updatedTitle) return;
//     try {
//       const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title: updatedTitle }),
//       });
//       if (response.ok) {
//         toast.success("Task updated successfully");
//         fetchTask();
//       } else {
//         toast.error("Failed to update task");
//       }
//     } catch (error) {
//       toast.error("Error updating task");
//     }
//   };

//   if (loading) return <Loading />;
//   if (!task) return <p className="text-center">Task not found</p>;

//   return (
//     <div className="w-full flex flex-col gap-3 mb-4 overflow-y-hidden">
//       <h1 className="text-2xl text-gray-600 font-bold">{task.title}</h1>
//       <Tabs tabs={TABS} setSelected={setSelected}>
//         {selected === 0 ? (
//           <>
//             <p className="text-gray-500">Created At: {new Date(task.date).toDateString()}</p>
//             <Button label="Edit Task" onClick={handleEdit} className="bg-yellow-500 text-white" />
//             <Button label="Delete Task" onClick={handleDelete} className="bg-red-600 text-white" />
//           </>
//         ) : (
//           <p>Activities/Timeline will be displayed here.</p>
//         )}
//       </Tabs>
//     </div>
//   );
// };

// export default TaskDetails;
