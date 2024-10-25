const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pembayaran',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pembayaran',
        required: true,
    },
    metode_pembayaran: {
        type: String,
    },
    jumlah: {
        typr: Number,
    },
    tanggal_pembayaran:{
        type: Date,
    },
    status: {
        type: String,
    }
});

const Produk = mongoose.model('Produk', transaksiSchema);
module.exports = Transaksi;