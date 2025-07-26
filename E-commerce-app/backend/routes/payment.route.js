const express = require("express");
const router = express.Router();

// Payment feature is disabled
router.post("/create-checkout-session", (req, res) => {
    res.status(501).json({ message: "Payment feature is disabled." });
});

router.post("/checkout-success", (req, res) => {
    res.status(501).json({ message: "Payment feature is disabled." });
});

export default router;
