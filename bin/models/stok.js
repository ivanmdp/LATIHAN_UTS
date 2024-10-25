const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Stok',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Stok',
        required: true,
    },
    jumlah: {
        type: Number,
    },
    tanggal_update: {
        typr: String,
    },
    keterangan:{
        type: String,
    },
    lokasi: {
        type: String,
    }
});

const Produk = mongoose.model('Stok', stokSchema);
module.exports = Stok;