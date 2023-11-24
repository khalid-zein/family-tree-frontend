import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { dataUrl } from "../../data/ApiUrls";

const EditMembers = ({ members }) => {
    const { id } = useParams()
    const paramsId = Number(id)
    const [formData, setFormData] = useState({
        id: "", firstName: "", parentId: ""
    })
    const memberDetails = members.find((member) => member.id == paramsId)
    // console.log(memberDetails)

    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData, [e.target.value]: e.target.value
        }))
    }

    useEffect(() => {
        axios.get(`${dataUrl}/update-delete/${id}`)
        .then((res) => {
            console.log(res.data.first_name)
            setFormData({...formData, 
                firstName: res.data.first_name, 
                parentId: res.data.parent 
            })
        })
    }, [])

    const handleEditMembers = (e) => {
        e.preventDefault()

        axios.put(`${dataUrl}/update-delete/${id}`,
            JSON.stringify({
                first_name: formData.firstName,
                parent: formData.parentId
            })
        )
        .then((res) => {
            console.log(res)
        })
    }
    return ( 
        <>
            <div>
                <form onSubmit={handleEditMembers}>
                    <div>
                        <input 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            type='text' 
                            placeholder="Enter First Name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={formData.parentId}
                            onChange={handleInputChange}
                            type='number' 
                            placeholder="Enter Parent's Id..."
                            className="entry"
                        />
                    </div>
                    <button >
                        Submit
                    </button>
                    <br></br>
                </form>
            </div>
            
        </>
     );
}
 
export default EditMembers;