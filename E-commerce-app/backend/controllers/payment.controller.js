export const createCheckoutSession = async (req, res) => {
    res.status(501).json({ message: "Payment feature is disabled." });
};

export const checkoutSuccess = async (req, res) => {
    res.status(501).json({ message: "Payment feature is disabled." });
};
