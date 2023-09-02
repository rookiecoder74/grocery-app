import React from "react";
import Table from "../components/table";
import Featured from "../components/featured";

const CustomerDashboard = () => {
    return (
        <div className="customer-dashboard">
            <h1>Welcome, Customer!</h1>
            <Featured />
            <h2>Your Orders</h2>
            <Table />
        </div>
    );
};

export default CustomerDashboard;