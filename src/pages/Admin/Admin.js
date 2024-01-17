import React from 'react';
import { FadeLoader } from "react-spinners";
import { dataUrl } from "../../data/ApiUrls";
import { Link } from "react-router-dom";
import UseFetch from '../../components/UseFetch';

const Admin = ({ loading, error }) => {
    const { data: members } = UseFetch(`${dataUrl}/view-parents/`)
    
    if(!members && loading) {
        return (
            <>
                <p>Loading lineage data...</p>
                <div className="flex items-center justify-center p-8">
                    <FadeLoader 
                        color="#fff" 
                        loading={loading}
                        size={50}
                        aria-label="Loading Content..."
                        members-testid="loader"
                    />
                </div>
            </>
        )
    }
    return (             
        <div>
            <p>{error}</p>
            <h2>All Parents & Children</h2>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Parent's Name</th>
                        <th>Child's Name</th>
                    </tr>
                </thead>
                {members.map((member, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{member.id}</td>
                            <td>
                                {member.user_name}
                            </td>
                            <td>
                                {member?.children.length > 0 ? (
                                    <div>
                                        {member.children.map((child, index) => (
                                            <span key={index}>{child.user_name}, </span>
                                        ))}
                                    </div>
                                ): (
                                    <p>No child input availabele</p>
                                )}    
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <>
                <Link to='/admin-print-certificate'>
                    Print Certificate
                </Link>
            </>
        </div>
     );
}
 
export default Admin;