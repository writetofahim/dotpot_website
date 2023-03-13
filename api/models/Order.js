const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
{
    client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    },
    total_cost: {
    type: Number,
    required: true
    },
    selected_items: {
    type: Object,
    required: true
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
