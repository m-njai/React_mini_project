import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Adjust the path if necessary
import backgroundImage from '../images/background.jpg'; // Import the background image

function PaymentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    postalAddress: '',
    shippingAddress: '',
    email: '',
    phoneNumber: '',
    paymentMethod: '',
    paymentDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and order here
    navigate('/thank-you');
  };

  return (
    <div className="payment-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="container">
        <h2 className="my-4 text-animation">Payment Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Postal Address</label>
            <input type="text" className="form-control" name="postalAddress" value={formData.postalAddress} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input type="text" className="form-control" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select className="form-control" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
              <option value="">Select a Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Payment Details</label>
            <input type="text" className="form-control" name="paymentDetails" value={formData.paymentDetails} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit Payment</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
