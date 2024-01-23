import React from 'react'

export default function Members() {
  return (
    <p>Members</p>
//     <div><div>
//     {members && members.map((item) => (
//       <p>{item.user_name}</p>
//     ))}
//   </div>
//   // <div>
//   //   <p>{error}</p>
//   //   <table className="table-auto">
//   //     <thead>
//   //       <tr>
//   //         <th>ID</th>
//   //         <th>Parent's Name</th>
//   //         <th>Child's Name</th>
//   //         <th>Update</th>
//   //         <th>Delete</th>
//   //         <th>Print Certificate</th>
//   //       </tr>
//   //     </thead>
//   //     <tbody>
//   //       {filteredMembers.map((member, index) => (
  //         <tr key={index}>
  //           <td>{member.id}</td>
  //           <td>{member.user_name}</td>
  //           <td>
  //             {member.parent.length > 0 && (
  //               <div>
  //                 {member.parent.map((parent, parentIndex) => (
  //                   <p key={parentIndex}>{parent.user_name}</p>
  //                 ))}
  //               </div>
  //             )}
  //           </td>
  //           <td className="">
  //             <Link to={`/admin-edit/${member.id}/`}>
  //               <button>
  //                 <BsPencilSquare />
  //               </button>
  //             </Link>
  //           </td>
  //           <td>
  //             <button onClick={() => handleDeleteMember(member.id)}>
  //               <BiTrash /> 
  //             </button>
  //           </td>
  //           <td>
  //             <button onClick={() => handlePrintDetails(member)}>
  //               Print Certificate
  //             </button>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div></div>
  )
}
