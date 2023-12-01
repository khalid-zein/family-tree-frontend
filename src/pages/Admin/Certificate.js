import { useRef, useState } from "react"
// import certificate from "../../assets/img/baalawi-certificate.png"

const Certificate = ({members, loading, error}) => {
    const [search, setSearch] = useState('')

    const filteredMember =  members.filter((member) => member.first_name.toLowerCase().includes(search.toLowerCase()))

    const printCertificate = () => {
        alert('Certificate will be printed in a bit')
        
    }



    return ( 
        <>
            <div>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>


            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredMember.map((item) => (
                        <div onClick={printCertificate} style={{padding: '20px 0px 20px 10px'}}>
                            <p>{item.id}</p>
                            <p>{item.first_name}</p>
                            <p>{item.parent}</p>
                        </div>
                    ))
                )}
            </div>
        </>
     );
}
 
export default Certificate;