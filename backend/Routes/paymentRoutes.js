const express = require('express');
const router = express.Router();

// Mock function to simulate payment processing (replace with real payment gateway logic)
const processPayment = (paymentDetails) => {
    // Simulate payment processing logic
    if (paymentDetails.cardNumber === '1234567890123456') {
        // Simulate a successful payment for this specific card number
        return { success: true, transactionId: 'TXN1234567890' };
    }
    // Simulate a failed payment for other card numbers
    return { success: false, error: 'Payment failed due to insufficient funds.' };
};

// Payment processing endpoint
router.post('/process-payment', (req, res) => {
    const { cardNumber, cardExpiry, cardCVC } = req.body;

    // Validate payment details (simple validation for demonstration)
    if (!cardNumber || !cardExpiry || !cardCVC) {
        return res.status(400).json({ error: 'All payment details are required.' });
    }

    // Process the payment (this is where you would integrate with a real payment gateway)
    const paymentResult = processPayment({ cardNumber, cardExpiry, cardCVC });

    if (paymentResult.success) {
        // Payment succeeded
        return res.status(200).json({ message: 'Payment processed successfully!', transactionId: paymentResult.transactionId });
    } else {
        // Payment failed
        return res.status(400).json({ error: paymentResult.error });
    }
});

module.exports = router;