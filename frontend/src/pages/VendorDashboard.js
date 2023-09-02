import React from "react";
import Table from "../components/table";
import Featured from "../components/featured"; // Create a new component for vendor-specific table

const VendorDashboard = () => {
    return (
        <div className="vendor-dashboard">
            <h1>Welcome, Vendor!</h1>
            <Featured />
            <h2>Your Sales</h2>
            <Table />
        </div>
    );
};

export default VendorDashboard;