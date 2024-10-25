const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ulasan',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ulasan',
        required: true,
    },
    rating: {
        type: Number,
    },
    komentar: {
        typr: String,
    },
    tanggal_ulasan:{
        type: Date,
    }
});

const Produk = mongoose.model('Ulasan', ulasanSchema);
module.exports = Ulasan;