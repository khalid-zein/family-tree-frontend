import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { dataUrl } from "../../data/ApiUrls";
import { ToastContainer, toast } from "react-toastify";

const CreateMembers = () => {
    const [userName, setuserName] = useState("")
    const [parentId, setParentId] = useState("")
    const navigate = useNavigate()

    const handleCreateMembers = (e) => {
        e.preventDefault()

        if(userName && parentId) {
            fetch('https://albaalawiyeastafr.org/trees/api/create-member/', {
                method: "POST",
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user_name: userName, parent: parentId}),
            })
            .then((res) => {
                if(res.ok) {
                    res.json()
                    .then((data) => {
                        setuserName('')
                        setParentId('')
                        toast.success(`You have successfully added ${data.user_name} to membership!`)
                        setTimeout(() => {
                            navigate('/admin')
                            window.location.reload()    
                        }, 2000);
                    })
                }
            })
            .catch((err) => {
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