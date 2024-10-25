const mongoose = require("mongoose");

const transaksiSchemaSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Produk',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pengguna',
        required: true,
    },
    jumlah: {
        type: Number,
    },
    total_harga: {
        typr: Number,
    },
    tanggal_transaksi:{
        type: Date,
    }
});

const Produk = mongoose.model('Transaksi', transaksiSchema);
module.exports = Transaksi;