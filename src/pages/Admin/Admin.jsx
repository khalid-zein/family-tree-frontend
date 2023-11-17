// import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { apiUrl, dataUrl } from "../../data/ApiUrls";
import axios from "axios";

const Admin = ({ members, loading, error, setData }) => {
    
     
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`/${dataUrl}/update-delete/${id}`)
            console.log(res)
        } catch (error) {
            console.warn(error)
        }
        alert('Member updated successfully!')
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${dataUrl}/view-list/${id}`)
            console.log(res)
            
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
                        {members.map((item, index) => (
                            <tbody key={index}>
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