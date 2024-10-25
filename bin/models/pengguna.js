const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pengguna',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pengguna',
        required: true,
    },
    nama: {
        type: String,
    },
    email: {
        typr: String,
    },
    password:{
        type: String,
    },
    alamat:{
        type: String,
    },
    tanggal_daftar: {
        type: String,
    }
});

const Produk = mongoose.model('Pengguna', penggynnaSchema);
module.exports = Pengguna;