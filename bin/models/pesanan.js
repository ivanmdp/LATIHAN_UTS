const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pesanan',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pesanan',
        required: true,
    },
    jumlah: {
        type: Number,
    },
    status: {
        typr: String,
    },
    tanggal_pesanan:{
        type: Date,
    }
});

const Produk = mongoose.model('Pesanan', pesananSchema);
module.exports = Pesanani;