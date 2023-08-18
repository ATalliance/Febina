import React from 'react';
import './Vendorstyle.css';

const VendorDetails = () => {
  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.target.name.value;
    const country = event.target.country.value;
    const mobile = event.target.mobile.value;
    const gst = event.target.gst.value;

    const formData = {
      "name": name,
      "Mobilenumber": parseInt(mobile),
      "GST": parseInt(gst),
      "country": country
    };

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = "Data submitted successfully!";
        messageDiv.style.display = "block"; // Display the message div

        // Reset form fields
        event.target.name.value = "";
        event.target.country.value = "+91"; // Set default value
        event.target.mobile.value = "";
        event.target.gst.value = "";
      } else {
        console.error("Error submitting data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="card">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Submit Details</h1>
      <form id="myForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required maxLength="100" />
        
        <label htmlFor="country">Country Code:</label>
        <select id="country" name="country">
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (United States)</option>
          {/* Add more options as needed */}
        </select>
        
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required pattern="[0-9]{10}" placeholder="10-digit number" />
        
        <label htmlFor="gst">GST:</label>
        <input type="text" id="gst" name="gst" />
        
        <button type="submit">Submit</button>
      </form>
      <div id="message"></div>
    </div>
  );
};

export default VendorDetails;
