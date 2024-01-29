import React, { useState } from 'react';
import './Checkout.css'; // Import your CSS file

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateReceipt();
  };

  const generateReceipt = () => {
    const orderNumber = 1; // Assuming it's the first appointment

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const receiptContent = `
      Appointment Receipt
      -------------------

      Order Number: ${orderNumber}
      Full Name: ${formData.fullName}
      Contact Number: ${formData.contactNumber}
      Address: ${formData.address}

      Appointment Details
      -------------------
      Arrival Time: 3:30 PM
      Location: Negombo

      Date: ${formattedDate}

      Thank you for booking your appointment!
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Appointment Receipt</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(`<pre>${receiptContent}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="checkout-container">
      <h2 className='title1'>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
