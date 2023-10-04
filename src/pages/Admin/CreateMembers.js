import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/supabaseConfig";

const CreateMembers = () => {
    const [fathersName, setFathersName] = useState("")
    const [children, setChildren] = useState("")

    const handleCreateMembers = async (e) => {
        e.preventDefault()
        const navigate = useNavigate
        
        try {
            const { data, error } = await supabase
                .from('family_members')
                .insert([{fathersName, children}])
                .select()

            if (error) {
                console.log(error)
            }

            if (data) {
                setFathersName('')
                setChildren('')
                navigate('/admin')
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
                            value={fathersName}
                            onChange={(e) => setFathersName(e.target.value)}
                            type='text' 
                            placeholder="Enter Father's name..."
                            className="entry"
                        />
                    </div>
                    <div>
                        <input 
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
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