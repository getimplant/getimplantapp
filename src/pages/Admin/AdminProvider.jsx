// import React, { useState, useEffect ,useContext} from "react";
// import {Getfirestore} from '../Academy/Usefirestore';
// import { AuthContext } from "../Academy/AuthProvider";
// import { Spinner } from "react-bootstrap";
// import ListProducts from "./ListProducts";
// export const AdminContext = React.createContext();
// export const AdminProvider = ({ children }) => {
//   const [message, setMessage] = useState("");
//   const [pending,setPending]=useState(true);
 
//   const context = useContext(AdminContext);
//   const user=context.value.user;
//   useEffect(async() => {
   
//     setPending(false);
//   }, []);
//   const value = {
//       products:"chut",
//   };

//   if (pending) {
//     return (
//       <div>
//         <Spinner animation="grow" size="sm" >
//         ...Loding
//         </Spinner>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <AdminContext.Provider value={{ value }}><ListProducts /></AdminContext.Provider>
//     </div>
//   );
// };

// export default AdminProvider;
