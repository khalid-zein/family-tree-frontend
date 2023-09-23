import { useEffect, useState } from "react";
import axios from "axios";


const CreateMembers = () => {
    const [name, setName] = useState("")
    const [familyMembers, setFamilyMembers] = useState("")

    const handleCreateMembers = (e) => {
        e.preventDefault()

        axios.post(process.env.REACT_APP_CREATE_MEMBERS , {
            name, familyMembers
        })
        .then((res) => {
            console.log(res)

            setName('')
            setFamilyMembers('')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        handleCreateMembers()
    })

    return ( 
        <>
            <div>
                <form onSubmit={handleCreateMembers}>
                    <div>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text' 
                            placeholder="Enter name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={familyMembers}
                            onChange={(e) => setFamilyMembers(e.target.value)}
                            type='text' 
                            placeholder="Enter family members..."
                            className="entry"
                        />
                    </div>
                    <button>Submit</button><br></br>
                </form>
            </div>
        </>
     );
}
 
export default CreateMembers;