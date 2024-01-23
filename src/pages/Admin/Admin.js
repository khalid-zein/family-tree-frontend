import React from 'react';
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Admin = ({ members, loading, error }) => {
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
                                {member?.parent.length > 0 ? (
                                    <div>
                                        {member.parent.map((user, index) => (
                                            <span key={index}>{user.user_name}, </span>
                                        ))}
                                    </div>
                                ): (
                                    <p>No parent input availabele</p>
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