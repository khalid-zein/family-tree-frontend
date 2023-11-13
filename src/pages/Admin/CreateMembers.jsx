import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataUrl } from "../../data/ApiUrls";

const CreateMembers = () => {
    const [firstName, setFirstName] = useState("")
    const [parentId, setParentId] = useState("")
    const navigate = useNavigate()

    const handleCreateMembers = async (e) => {
        e.preventDefault()
        
        try {
            const data = await axios.post(`${dataUrl}/create-member`, {
                firstName, parentId
            })
            // console.log(data)

            if (data.ok) {
                setFirstName('')
                setParentId('')
                navigate('/admin')
            }

            if (error) {
                console.log(error)
            }
        } catch (err) {
            console.log(err)
        }
    }


    return ( 
        <>
            <div>
                <form onSubmit={handleCreateMembers}>
                    <div>
                        <input 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type='text' 
                            placeholder="Enter First Name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={parentId}
                            onChange={(e) => setParentId(e.target.value)}
                            type='number' 
                            placeholder="Enter Parent's Id..."
                            className="entry"
                        />
                    </div>
                    <button>
                        Submit
                    </button>
                    <br></br>
                </form>
            </div>
        </>
     );
}
 
export default CreateMembers;