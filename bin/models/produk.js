const mongoose = require("mongoose");

const produjkSchema = new mongoose.Schema({
   nama: {
    typr: String,
   },
   deskripsi: {
    type: String,
   },
   harga: {
    typr: Number,
   },
   stok: {
    type: Number,
   },
   kategori_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kategori',
    require: true,
   }
});

const Produk = mongoose.model('Produk', transaksiSchema);
module.exports = Transaksi;