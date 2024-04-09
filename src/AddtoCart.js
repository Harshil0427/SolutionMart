import React from "react";
import axios from "axios";
import "./App.css";

function AddtoCart() {
  const [myData, setData] = React.useState({});

  const onChangeEvent = (e) => {
    setData((myData) => ({
      ...myData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    var myformData = new FormData();
    myformData.append("id", myData.txt1);
    myformData.append("id", myData.txt2);
    myformData.append("quantity", myData.txt3);
    axios.post("https://dummyjson.com/carts/addp", myformData)
      .then(function (response) {
        console.log(response);
        setData(response.data.carts);

        if (response.data.flag === '1') {
          console.log(response.data);
          alert(response.data.message);
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
      <h2>Add-to-Cart Form</h2>
      <form onSubmit={submitValue}>
        <label>User_Id : </label>
        <input
          type="text"
          name="txt1"
          placeholder="Enter Your User_Id"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <label>Product_Id : </label>
        <input
          type="text"
          name="txt2"
          placeholder="Enter Your Product_Id"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <label>Product_Qty : </label>
        <input
          type="text"
          name="txt3"
          placeholder="Enter Your Product_Qty"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <button type="submit" className="btn btn-success">
          Add-to-Cart
        </button>
      </form>
    </div>
  );
}

export default AddtoCart;