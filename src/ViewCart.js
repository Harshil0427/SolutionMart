import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function ViewCart() {
    const [myData, setData] = useState([]);
    let navigate = useNavigate();

    // useEffect(() => {
    //     getData()
    // });

    function getData() {
        var myformdata = new FormData();
        var id = localStorage.getItem('user_id');
        myformdata.append('user_id', id);

        axios.get(`https://dummyjson.com/carts/user/${id}`, myformdata)
            .then((response) => {
                setData(response.data.carts);
            });
        navigate("/PlaceOrder");
    }

    // function calculateTotalAmount() {
    //     let total = 0;
    //     if (myData) {
    //         for (const item of myData) {
    //             total += item.price * item.quantity;
    //         }
    //     }
    //     return total;
    // };

    // function RemoveData(id) {

    //     const confirmed = window.confirm("Are you sure you want to remove this product from the cart?");

    //     if (!confirmed) {
    //         // If the user cancels, do nothing
    //         return;
    //     }

    //     var myformdata = new FormData();
    //     myformdata.append("id", id);

    //     axios.post(`https://dummyjson.com/carts/${id}`, myformdata)
    //         .then((response) => {
    //             setData(response.data);

    //             if (response.data.flag === '1') {
    //                 console.log(response.data);
    //                 // alert(response.data.message);
    //             }
    //             else {
    //                 alert(response.data.message);
    //             }
    //         }).catch(function (response) {
    //             console.error(response);
    //         });
    //     getData();
    // }

    // function UpdateQuantityPlus(cid, pqty, id) {
    //     var newqty = parseInt(pqty)
    //     var n = newqty + 1;
    //     var myformdata = new FormData();
    //     myformdata.append("id", cid);
    //     myformdata.append("quantity", n);

    //     axios.post(`https://dummyjson.com/carts/${id}`, myformdata)
    //         .then(res => {
    //             console.log(res.data);
    //             getData();
    //         })
    // }

    // function UpdateQuantityMinus(cid, pqty, id) {
    //     var newqty = parseInt(pqty)
    //     var n = newqty - 1;
    //     var myformdata = new FormData();
    //     myformdata.append("id", cid);
    //     myformdata.append("quantity", n);

    //     axios.post(`https://dummyjson.com/carts/${id}`, myformdata)
    //         .then(res => {
    //             console.log(res.data);
    //             getData();
    //         })
    // }

    return (
        <>
            <h2>View Cart List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        {/* <th>Sr No.</th>
                        <th>Cart ID</th>
                        <th>Product ID</th> */}
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Details</th>
                        <th>Qty</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myData && myData.length ? (myData.map((p, index) =>
                        <tr key={index}>
                            {/* <td>{index + 1}</td>
                            <td>{p.cart_id}</td>
                            <td>{p.product_id}</td> */}
                            <td>{p.title}</td>
                            <td><img alt={p.images} src={p.images} width={150}></img></td>
                            <td>
                                {/* <Button onClick={() => UpdateQuantityPlus(p.id, p.quantity)}>+</Button> */}
                                <p>{p.product_qty}</p>
                                {/* <Button onClick={() => UpdateQuantityMinus(p.id, p.quantity)}>-</Button> */}
                            </td>
                            <td>Rs. {p.price}</td>
                            {/* <td><Button variant="danger" onClick={() => RemoveData(p.id)}>Remove</Button></td> */}
                        </tr>
                    )) : "No Record Found"}
                    <tr>
                        <td colSpan={'4'} align="center">Total Amount :</td>
                        {/* <td colSpan={'2'}>Rs. {calculateTotalAmount()}/-</td> */}
                    </tr>
                </tbody>
            </table>
            <a href="/APproduct"><button className="btn btn-success">Continue Shopping</button></a> |
            <a href="/PlaceOrder"><button className="btn btn-warning"> Confirm Order</button></a>
        </>
    );
}

export default ViewCart;