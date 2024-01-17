import React, { useState} from 'react';
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { dataUrl } from "../../data/ApiUrls";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactDOMServer from 'react-dom/server';
import certImage from '../../assets/img/baalawi-certificate.png';
import "../../index.css"

const PrintCertificate = ({ members, setData, loading, error }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [input, setInput] = useState('')

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
    printCertificate();
  };

  const printCertificate = () => {
    const printWindow = window.open('', '_blank');
    const printContent = (
      <div className="print-content">
        <img src={certImage} alt="Certificate Image" />
        <div className="certificate-text">
          <h2>This Certificate is to certify that {selectedMember?.user_name}</h2>
          <h4>is a member of the Baalawi Family & is related to:</h4>
            {selectedMember?.parent.length > 0 && (
              <div>
                {selectedMember.parent.map((parent, parentIndex) => (
                    <p key={parentIndex}>{parent.id}: {parent.user_name}</p>
                ))}
              </div>
            )}
        </div>
      </div>
    );

    // Render the React component to an HTML string
    const htmlString = ReactDOMServer.renderToStaticMarkup(printContent);

    // Set the HTML string in the print window
    printWindow.document.body.innerHTML = htmlString;

    // Trigger the print dialog
    printWindow.print();

    // Close the new window after printing
    printWindow.close();
  };

    const filteredMembers = members.filter((member) => member.user_name.toLowerCase().includes(input.toLowerCase()))
    // console.log(filteredMembers)

  return (
    <>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search member..' 
        />
      </form>

      <div>
        <p>{error}</p>
        {loading ? (
          <p>Loading member's list..</p>
        ): (
          <div>
            <p>{error}</p>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Parent's Name</th>
                        <th>Child's Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {filteredMembers.map((member, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{member.id}</td>
                            <td>
                                {member.user_name}
                            </td>
                                <td>
                                {member.parent.length > 0 && (
                                  <div>
                                    {member.parent.map((parent, parentIndex) => (
                                      <p key={parentIndex}>{parent.user_name}</p>
                                    ))}
                                  </div>
                                )}  
                                </td>
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
                                    Print Certificate
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PrintCertificate;
