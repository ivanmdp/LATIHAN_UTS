const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori: {
        type: String,
    },
    deskripsi:{
        type: String,
    },
    create_at: {
        type: Date,
    },
    upload_at: {
        type: Date,
    },
    statu: {
        type: Boolean,
    }
   
});

const Kategori = mongoose.model('Kategori',kategoriSchema);
module.exports = Kategori;