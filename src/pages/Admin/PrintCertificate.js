import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import certImage from '../../assets/img/baalawi-certificate.png'

const PrintCertificate = ({members}) => {
    const certificateContentRef = useRef(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [input, setInput] = useState('')
    
    // console.log(members)
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

      // const filteredMembers = members.filter((member) => member.first_name.toLowerCase().includes(input.toLowerCase()))
      // console.log(filteredMembers)
    return ( 
        <>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter search id..' 
            />
          </form>

          <div>
            {members.map((member, index) => (
              <div 
                onClick={() => handlePrintDetails(member)} 
                key={index} 
                style={{cursor: 'pointer'}}
              >
                  <p>{member.id}</p>
                  <p>{member.user_name}</p>
                  <div>
                    {/* eslint-disable-next-line no-restricted-globals */}
                    {member.parent.length > 0 && (
                      <p>{parent[0].user_name}</p>
                    )}
                  </div>
              </div>
            ))}
          </div>

            {/* Use a ref to reference the certificate content */}
            <div ref={certificateContentRef}>
                {selectedMember ? (
                    <>
                        <h2>Certificate Content</h2>
                        <h4>Certificate for {selectedMember.first_name}</h4>
                        {/* <p>{selectedMember.parent}</p> */}
                    </>
                ) : (<></>)}
            </div>
        </>
     );
}
 
export default PrintCertificate;