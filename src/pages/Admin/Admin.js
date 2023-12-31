import React from 'react';
import { FadeLoader } from "react-spinners";
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { dataUrl } from "../../data/ApiUrls";
import { Link } from "react-router-dom";
import axios from "axios";


const Admin = ({ members, loading, error, setData }) => {

    const handleDeleteMember = async (id) => {
        axios.delete(`${dataUrl}/update-delete/${id}`)
            .then((res) => {
                const newMembers = members.filter((member) => member.id !== id)
                setData(newMembers)
                window.location.reload()
            })
            .catch(err => console.error(err));
    }


  

    return ( 
        <>
            {loading ? (
                <div className="flex items-center justify-center p-8">
                    <FadeLoader 
                        color="#fff" 
                        loading={loading}
                        size={50}
                        aria-label="Loading Content..."
                        members-testid="loader"
                    />
                </div>
            ) : (
                <div>
                    <p>{error}</p>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Parent's Name</th>
                                <th>Child's Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {members.map((member, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{member.id}</td>
                                    <td>
                                    {member.parent.length > 0 && (
                                        <div>
                                        {member.parent.map((parent, parentIndex) => (
                                            <p key={parentIndex}>{parent.user_name}</p>
                                        ))}
                                        </div>
                                    )}
                                    </td>
                                    <td>{member.user_name}</td>
                                    <td className="">
                                        <Link to={`/admin/edit-member/${member.id}/`}>
                                            <button>
                                                <BsPencilSquare />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMember(member.id)}>
                                            <BiTrash /> 
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    
                </div>
            )}
        </>
     );
}
 
export default Admin;