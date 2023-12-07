import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import certImage from '../../assets/img/baalawi-certificate.png'
import { FadeLoader } from "react-spinners";
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { FaPrint } from "react-icons/fa6";
import { dataUrl } from "../../data/ApiUrls";
import { Link } from "react-router-dom";
import axios from "axios";


const Admin = ({ members, loading, error, setData }) => {
    const certificateContentRef = useRef(null);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleDeleteMember = async (id) => {
        axios.delete(`${dataUrl}/update-delete/${id}`)
            .then((res) => {
                const newMembers = members.filter((member) => member.id !== id)
                setData(newMembers)
                window.location.reload()
            })
            .catch(err => console.error(err));
    }


  const handlePrintDetails = (member) => {
    setSelectedMember(member);
    generateCertificate(member);
  };

  const generateCertificate = async (member) => {
    const contentDiv = certificateContentRef.current;

    if (!contentDiv) {
      console.error('Certificate content not mounted');
      return;
    }

    // Create a clone of the content div to avoid affecting the original styles
    const clonedContent = contentDiv.cloneNode(true);

    // Append the clone to the body for styling and printing
    document.body.appendChild(clonedContent);

    // Apply print-specific styles
    clonedContent.setAttribute('style', `
      margin: 0;
      padding: 0;
      font-size: 12pt; /* Adjust the font size as needed */
    `);

    // Add an image element with the specified attributes
    const imgElement = document.createElement('img');
    imgElement.src = certImage; // Update the path accordingly
    imgElement.alt = 'Certificate Image';
    imgElement.style.width = '100%'; // Adjust the width as needed

    // Append the image to the cloned content
    clonedContent.appendChild(imgElement);

    // Use html2canvas to generate the canvas for printing
    const canvas = await html2canvas(clonedContent);

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Append the canvas to the new window
    printWindow.document.body.appendChild(canvas);

    // Trigger the print dialog
    printWindow.print();

    // Remove the cloned content and close the new window after printing
    document.body.removeChild(clonedContent);
    printWindow.close();
  };

    return ( 
        <>
            {loading ? (
                <div className="flex items-center justify-center p-8">
                    <FadeLoader 
                        color="#fff" 
                        loading={loading}
                        size={50}
                        aria-label="Loading Content..."
                        members-testid="loader"
                    />
                </div>
            ) : (
                <div>
                    <p>{error}</p>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>Parent's Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {members.map((member, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{member.parent}</td>
                                    <td>{member.first_name}</td>
                                    <td>{member.last_name}</td>
                                    <td className="">
                                        <Link to={`/admin/edit-member/${member.id}/`}>
                                            <button>
                                                <BsPencilSquare />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMember(member.id)}>
                                            <BiTrash /> 
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handlePrintDetails(member)}>
                                            <FaPrint /> 
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    
                    {/* Use a ref to reference the certificate content */}
                    <div ref={certificateContentRef}>
                        {selectedMember && (
                        <>
                            <h2>Certificate Content</h2>
                            <h4>Certificate for {selectedMember.user_name}</h4>
                            <p>{selectedMember.parent}</p>
                        </>
                        )}
                    </div>
                </div>
            )}
        </>
     );
}
 
export default Admin;