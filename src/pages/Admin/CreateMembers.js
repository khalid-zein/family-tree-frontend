import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { dataUrl } from "../../data/ApiUrls";

const CreateMembers = ({addMember}) => {
    const [userName, setuserName] = useState("")
    const [parentId, setParentId] = useState("")
    const navigate = useNavigate()

    const handleCreateMembers = (e) => {
        e.preventDefault()

        if(userName && parentId) {
            fetch(`${dataUrl}/create-member/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user_name: userName, parent: parentId}),
            })
            .then((res) => {
                if(res.ok) {
                    res.json()
                    .then((data) => {
                        console.log(data);
                        addMember(data)
                        setuserName('')
                        setParentId('')
                        toast.success(`You have successfully added ${data.user_name} to membership!`)
                        
                        navigate('/admin/members')   
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error('Please fill in all input fields!')
            })
        } 

    }

    return ( 
        <>
            <ToastContainer 
                position = 'top-center'
                autoClose = {2000}
                hideProgressBar = {true}
                closeOnClick = {true}
                pauseOnHover = {true}
                draggable = {true}
                progress = {undefined}
                theme= 'colored'
            />
            <div>
                <form onSubmit={handleCreateMembers}>
                    <div>
                        <input 
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
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