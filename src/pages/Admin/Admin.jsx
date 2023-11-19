// import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { dataUrl } from "../../data/ApiUrls";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { EditContext } from "../../context/AppContext";

const Admin = ({ members, loading, error, setData }) => {
    const { editFirstName, editParentId, setEditFirstName, setEditParentId } = useContext(EditContext)
    
     
    const handleEditMembers = async (id) => {
        const updatedMember = { first_name: editFirstName, parent: editParentId}

        try {
            const res = await axios.put(`/${dataUrl}/update-delete/${id}`, 
                JSON.stringify(updatedMember)
            )
            setData(members.map((member) => member.id === id ? { ...res } : member))
            setEditFirstName('')
            setEditParentId('')
            console.log(res)
        } catch (error) {
            console.warn(error)
        }
        // alert('Member updated successfully!')
    }

    const handleDeleteMember = async (id) => {
        try {
            await axios.delete(`${dataUrl}/update-delete/${id}`)
            const newMembers = members.filter((member) => member.id !== id)
            setData(newMembers)
            console.log(newMembers)
        } catch (error) {
            console.warn(error)
        }
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
                <div style={{color: "white"}}>
                    <p>{error}</p>

                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>Parent's Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {members.map((member, index) => (
                            <tbody key={index}>
                                <tr>
                                <td>{member.parent}</td>
                                <td>{member.first_name}</td>
                                <td>{member.last_name}</td>
                                <td className="">
                                    <Link to={`/admin/edit-member/${member.id}`}>
                                        <button onClick={handleEditMembers}>
                                            <BsPencilSquare />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={handleDeleteMember}>
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