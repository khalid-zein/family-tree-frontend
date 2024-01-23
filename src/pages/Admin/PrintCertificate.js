import React, { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { dataUrl } from '../../data/ApiUrls';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import jsPDF from 'jspdf';
import '../../index.css';

import customPdfTemplate from '../../assets/cert.pdf';

const PrintCertificate = ({ members, setData, loading, error }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [input, setInput] = useState('');

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`${dataUrl}/update-delete/${id}`);
      const newMembers = members.filter((member) => member.id !== id);
      setData(newMembers);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrintDetails = (member) => {
    setSelectedMember(member);
    printCertificate();
  };

  const printCertificate = async () => {
    const existingPdfBytes = await fetch(customPdfTemplate).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page = pdfDoc.getPage(0);

    // Add user details to the PDF
    // const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);  
    const helveticaFontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);  


    page.drawText(`This Certificate is to certify that ${selectedMember?.user_name}`, {
      x: 100,
      y: 550,
      font: helveticaFontBold,
      size: 18,
    });

    page.drawText('is a member of the Baalawi Family & is related to:', {
      x: 100,
      y: 530,
      font: helveticaFont,
      size: 14,
    });

    if (selectedMember?.parent.length > 0) {
      const parentDetails = selectedMember.parent.map((parent) => `${parent.id}: ${parent.user_name}`).join('\n');
      page.drawText(parentDetails, { x: 100, y: 510, font: helveticaFont, size: 12 });
    }

    const modifiedPdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

    const printWindow = window.open('', '_blank');
    const printUrl = URL.createObjectURL(modifiedPdfBlob);
    printWindow.location.href = printUrl;
  };

  const filteredMembers = members.filter((member) =>
    member.user_name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search member.." 
        />
      </form>

      <div>
        <p>{error}</p>
        {loading ? (
          <p>Loading member's list..</p>
        ) : (
          <div>
            <p>{error}</p>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Parent's Name</th>
                  <th>Child's Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Print Certificate</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.id}</td>
                    <td>{member.user_name}</td>
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
                      <Link to={`/admin-edit/${member.id}/`}>
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PrintCertificate;
