import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataUrl } from "../data/ApiUrls";

const CreateMembers = () => {
  const [formData, setFormData] = useState({
    userName: "",
    parents: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateMembers = async (e) => {
    e.preventDefault();

    const { userName, parents } = formData;

    try {
      if (formData) {   
        const response = await fetch(`${dataUrl}/create_family_member/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({user_name: userName, parents: parents}),
        });
        console.log(response)

        if (response.ok) {
          const data = await response.json();
          // setData([...members, formData]);
          setFormData({ userName: "", parents: "" });
          toast.success(`Successfully added ${data.user_name} to membership!`);         
          window.location.reload()
        } else {
          throw new Error("Server returned an error");
        }
      } else {
        toast.error("Please fill in all input fields!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="colored"
      />
      <div>
        <form onSubmit={handleCreateMembers}>
          <div>
            <input
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter username..."
              className="entry"
            />
          </div>
          <div>
            <input
              name="parents"
              value={formData.parents}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter relatives..."
              className="entry"
            />
          </div>
          <button type="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default CreateMembers;
