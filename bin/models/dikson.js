const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
    produk_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Diskon',
        required: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Dsikon',
        required: true,
    },
    presentasi_diskon: {
        type: Number,
    },
    tanggal_mulai: {
        typr: Date,
    },
    tanggal_selesai:{
        type: Date,
    },
    keteranga: {
        type: String,
    }
});

const Produk = mongoose.model('Dsikon', DiskonSchema);
module.exports = Diskon;