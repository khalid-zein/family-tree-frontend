import React, { useEffect, useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { dataUrl } from '../../data/ApiUrls';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import jsPDF from 'jspdf';
import '../../index.css';

import customPdfTemplate from '../../assets/cert.pdf';
import CreateMembers from '../../components/CreateMembers';

const PrintCertificate = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [memberId, setMemberId] = useState('');
  const [members, setMembers] = useState(null)

   
 

  const handleSearch = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${dataUrl}/search_family_member/?member_id=${memberId}`)
      console.log(response.data)
      if (memberId) {
        setMembers(response.data)
      } else {
        console.log('no search item present')
      }
    } catch (error) {
      console.error(error)
    }
    
  }



  const handlePrintDetails = (member) => {
    setSelectedMember(member);
    printCertificate();
  };

  const printCertificate = async () => {
    const existingPdfBytes = await fetch(customPdfTemplate).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page = pdfDoc.getPage(0);

    // Add user details to the PDF
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

  // const filteredMembers = members.filter((member) =>
  //   member.user_name.toLowerCase().includes(input.toLowerCase())
  // );

  return (
    <>
      <CreateMembers />
      <div className='md:my-32 sm:my-16 my-8'>
        <form onSubmit={handleSearch} >
          <label  className='md:px-24 px-8 font-semibold text-gray-800' htmlFor="">Search Member by ID</label>
          <input
            value={memberId}
            type='number'
            className='entry'
            onChange={(e) => setMemberId(e.target.value)}
            placeholder="Search  by id..." 
          />
        </form>

        <div className='md:px-16 p-8'>
          <div>
            {members && members.map((member, index) => (
              <div key={index} className='bg-gray-100 w-64 p-4 rounded-md my-4'>
                <p>{member.user_name}</p>
                <div>
                  <button 
                    onClick={() => handlePrintDetails(member)}
                    className="px-3 py-2 bg-orange-500 "
                  >
                    Print Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintCertificate;
