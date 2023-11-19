import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditMembers = ({ members, editFirstName, setEditFirstName, editParentId, setEditParentId }) => {
    const { id } = useParams()
    const member = members.find((member) => member.id === Number(id))
     
    useEffect(() => {
        if (member) {
            setEditFirstName(member.firstName)
            setEditParentId(member.parentId)
        }
    }, [member, setEditFirstName, setEditParentId])

    const handleEditMembers = (e) => {

    }
    return ( 
        <>
            { editFirstName !== "" && editParentId !== "" ? (
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input 
                                value={editFirstName}
                                onChange={(e) => setEditFirstName(e.target.value)}
                                type='text' 
                                placeholder="Enter First Name..."
                                className="entry"
                            />
                        </div>
                        <div>
                            <input 
                                value={editParentId}
                                onChange={(e) => setEditParentId(e.target.value)}
                                type='number' 
                                placeholder="Enter Parent's Id..."
                                className="entry"
                            />
                        </div>
                        <button onSubmit={() => handleEditMembers(member.id)}>
                            Submit
                        </button>
                        <br></br>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Whoops! Member Not Found!</h2>
                    <p>Well, that's dissapointing.</p>
                    <p>
                        <Link to='/admin'>
                            Check the list of all Members
                        </Link>
                    </p>
                </div>
            )}
        </>
     );
}
 
export default EditMembers;