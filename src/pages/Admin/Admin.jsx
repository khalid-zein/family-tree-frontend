// import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { dataUrl } from "../../data/ApiUrls";
import { useParams } from "react-router-dom";

const Admin = ({ membersList, loading, error, setData }) => {
    const list = membersList.map((item) => item.parent)
    const { id } = useParams()
    
     
    const handleUpdate = () => {
        console.log(id)
        
        
        alert('Member updated successfully!')
    }

    const handleDelete = (deletedMember) => {
        axios.delete(`${dataUrl}/update-delete/${deletedMember.id}`, {

        })
        .then((res) => {
            if (res.ok) {
                const newMembersList = membersList.filter((member) => member.id == deletedMember.id)
                setData(newMembersList)
            }
        })
        alert('Member updated successfully!')
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
                        data-testid="loader"
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
                        {membersList.map((item) => (
                            <tbody>
                                <tr>
                                <td>{item.parent}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td className="">
                                    <button onClick={handleUpdate}>
                                        <BsPencilSquare />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={handleDelete}>
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