import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseConfig";

const Admin = () => {
    const [familyMembers, setFamilyMembers] = useState([])
    // const [search, setSearch] = useState('')

    useEffect(() => {
      const getFamilyMembers = async () => {
        const { data, error } = await supabase
            .from('family_members')
            .select()
            .order('id', {descending: false})

        if (data) {
            setFamilyMembers(data)
            console.log(data)
        }

        if (error) {
            console.log(error)
        }
      }

      getFamilyMembers()
    }, [])

    // const handleSearch = (e) => {
    //     setSearch(e.target.value)
    // }

    // const filteredMembers = familyMembers.filter((item) => item.id.includes(search.toLowerCase()))
    
    return ( 
        <>
            <div style={{color: "white"}}>
                {/* <form onSubmit={handleSearch}>
                    <input 
                        value={search}
                        onChange={handleSearch}
                        type='search' 
                        placeholder="Search family member..." 
                    />

                </form> */}

                <table class="table-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Father's Name</th>
                        <th>Children</th>
                    </tr>
                </thead>
                {familyMembers.map((item) => (
                    <tbody>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.fathersName}</td>
                        <td>{item.children}</td>
                        </tr>
                    </tbody>
                ))}
                </table>
            </div>
        </>
     );
}
 
export default Admin;