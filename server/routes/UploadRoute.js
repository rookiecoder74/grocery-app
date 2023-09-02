const { Router } = require("express");
const Product = require("../models/UploadModel.js");
const router = Router();

router.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/api/addproducts", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        console.log("Product Added Successfully...");
        console.log(newProduct);
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
