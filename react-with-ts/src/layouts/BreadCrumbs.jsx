// import { Link, useLocation } from "react-router-dom";

// export function Breadcrumbs() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <nav className="mb-4 flex" aria-label="Breadcrumb">
//       <ol className="inline-flex items-center space-x-1 md:space-x-3">
//         <li className="inline-flex items-center">
//           <Link to="/" className="text-blue-gray-600 hover:text-blue-gray-900">
//             Home
//           </Link>
//         </li>
//         {pathnames.map((name, index) => {
//           const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <li key={name}>
//               <div className="flex items-center">
//                 <span className="mx-2.5 text-blue-gray-400">/</span>
//                 {isLast ? (
//                   <span className="text-blue-gray-800">{name}</span>
//                 ) : (
//                   <Link
//                     to={routeTo}
//                     className="text-blue-gray-600 hover:text-blue-gray-900"
//                   >
//                     {name}
//                   </Link>
//                 )}
//               </div>
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// }
