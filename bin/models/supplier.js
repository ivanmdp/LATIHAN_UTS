const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Supplier',
        required: true,
    },
    nama_supplier: {
        type: String,
    },
    alamat: {
        typr: String,
    },
    kontak:{
        type: String,
    },
    email: {
        type: String,
    },
    tanggal_mendaftar: {
        type: Date,
    }
});

const Produk = mongoose.model('Supplier', supllierSchema);
module.exports = Supplier;