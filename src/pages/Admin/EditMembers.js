import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataUrl } from "../../data/ApiUrls";
import { ToastContainer, toast } from "react-toastify";

const EditMembers = () => {
    const { id } = useParams()
    const navigate =useNavigate()
    const [formData, setFormData] = useState({
        id: id, userName: ""
    })

    useEffect(() => {
        fetch(`${dataUrl}/update-delete/${id}/`)
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    setFormData({...formData, 
                        userName: data.user_name, 
                        id: data.id 
                    })
                })
            }
        })
        .catch((err) => console.log(err.message))
    }, [])

    const handleEditMembers = (e) => {
        e.preventDefault()

        fetch(`${dataUrl}/update-delete/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: formData.userName,
                parent: formData.id
            })
        })
        .then((res) => {
            res.json().then((data) => {
                toast.success(`${data.user_name}'s details have been successfully updated!`)
                setTimeout(() => {
                    navigate('/admin')
                    window.location.reload()
                }, 1000);
            })
        })
        .catch((err) => console.log(err.message))
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
                <form onSubmit={handleEditMembers}>
                    <div>
                        <input 
                            value={formData.userName}
                            onChange={(e) => setFormData({...formData, userName: e.target.value})}
                            type='text' 
                            placeholder="Enter First Name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={formData.id}
                            onChange={(e) => setFormData({...formData, id: e.target.value})}
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