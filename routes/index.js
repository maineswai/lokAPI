const { Router } = require("express");

// Controllers
const controllersPerusahaan = require("../controllers/perusahaan"); 
const controllersPelamar = require("../controllers/pelamar");
const controllersLowongan = require("../controllers/lowongan");
const controllersLamaran = require("../controllers/lamaran");

const router = Router();

router.get("/", (req,res) => res.send("Welcome"));

// Perusahaan
router.post("/perusahaan", controllersPerusahaan.createPerusahaan);
router.get("/perusahaan", controllersPerusahaan.getAllPerusahaan);
router.get("/perusahaan/:perusahaanId", controllersPerusahaan.getPerusahaanById);
router.put("/perusahaan/:perusahaanId", controllersPerusahaan.updatePerusahaan);
router.delete("/perusahaan/:perusahaanId", controllersPerusahaan.deletePerusahaan);

// Pelamar
router.post("/pelamar", controllersPelamar.createPelamar);
router.get("/pelamar", controllersPelamar.getAllPelamar);
router.get("/pelamar/:pelamarId", controllersPelamar.getPelamarById);
router.put("/pelamar/:pelamarId", controllersPelamar.updatePelamar);
router.delete("/pelamar/:pelamarId", controllersPelamar.deletePelamar);

// Lowongan
router.post("/lowongan", controllersLowongan.createLowongan);
router.get("/lowongan", controllersLowongan.getAllLowongan);
router.get("/lowongan/:lowonganId", controllersLowongan.getLowonganById);
router.put("/lowongan/:lowonganId", controllersLowongan.updateLowongan);
router.delete("/lowongan/:lowonganId", controllersLowongan.deleteLowongan);

// Lamaran
router.post("/lamaran", controllersLamaran.createLamaran);
router.get("/lamaran", controllersLamaran.getAllLamaran);
router.get("/lamaran/:lamaranId", controllersLamaran.getLamaranById);
router.put("/lamaran/:lamaranId", controllersLamaran.updateLamaran);
router.delete("/lamaran/:lamaranId", controllersLamaran.deleteLamaran);

module.exports = router;