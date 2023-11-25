import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataUrl } from "../../data/ApiUrls";
import { ToastContainer, toast } from "react-toastify";

const EditMembers = () => {
    const { id } = useParams()
    const navigate =useNavigate()
    const [formData, setFormData] = useState({
        id: id, firstName: "", parentId: ""
    })

    useEffect(() => {
        fetch(`${dataUrl}/update-delete/${id}`)
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    setFormData({...formData, 
                        firstName: data.first_name, 
                        parentId: data.parent 
                    })
                })
            }
        })
    }, [])

    const handleEditMembers = (e) => {
        e.preventDefault()

        fetch(`${dataUrl}/update-delete/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                parent: formData.parentId
            })
        })
        .then((res) => {
            res.json().then((data) => {
                toast.success(`${data.first_name}'s details have been successfully updated!`)
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
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            type='text' 
                            placeholder="Enter First Name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={formData.parentId}
                            onChange={(e) => setFormData({...formData, parentId: e.target.value})}
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