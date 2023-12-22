import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import certImage from '../../assets/img/baalawi-certificate.png';
import "../../index.css"

const PrintCertificate = ({ members, loading, error }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [input, setInput] = useState('')

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
          filteredMembers.map((member) => (
            <div
              onClick={() => handlePrintDetails(member)}
              key={member.id}
              style={{ cursor: 'pointer' }}
            >
              <p>{member.id}</p>
              <p>{member.user_name}</p>
              {member.parent.length > 0 && (
                <div>
                  {member.parent.map((parent, parentIndex) => (
                    <p key={parentIndex}>{parent.user_name}</p>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PrintCertificate;
