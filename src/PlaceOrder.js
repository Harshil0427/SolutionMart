import React from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [myData, setData] = React.useState({});
  let navigate = useNavigate();

  const onChangeEvent = (e) => {
    setData((myData) => ({
      ...myData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    var myformData = new FormData();
    var id = localStorage.getItem('user_id');
    myformData.append("user_id", id);
    myformData.append("shipping_name", myData.txt1);
    myformData.append("shipping_mobile", myData.txt2);
    myformData.append("shipping_address", myData.txt3);
    myformData.append("payment_method", myData.txt4)
    axios.post("", myformData)
      .then(function (response) {
        console.log(response);
        setData(response.data.order_list);

        if (response.data.flag === '1') {
          console.log(response.data);
          localStorage.setItem('is_loggedin',true);
          alert(response.data.message);
          navigate('/ViewOrder');
        }
        else {
          alert(response.data.message);
        }
      }).catch(function (response) {
        console.error(response);
      });
  }

  return (
    <div>
      <h2>Place Order Form</h2>
      <form onSubmit={submitValue}>
        <label>Shipping_Name : </label>
        <input
          type="text"
          name="txt1"
          placeholder="Enter Your Shipping_Name"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <label>Shipping_Mobile : </label>
        <input
          type="text"
          name="txt2"
          placeholder="Enter Your Shipping_Mobile"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <label>Shipping_Address : </label>
        <input
          type="text"
          name="txt3"
          placeholder="Enter Your Shipping_Address"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <label>Payment_Method : </label>
        <input
          type="text"
          name="txt4"
          placeholder="Enter Your Payment_Method"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <button type="submit" className="btn btn-success">
          Place-Order
        </button>
      </form>
    </div>
  );
}

export default PlaceOrder;