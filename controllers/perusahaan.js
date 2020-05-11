const models = require("../database/models");

const createPerusahaan = async (req, res) => {
    try {
        const perusahaan = await models.Perusahaan.create(req.body);
        return res.status(201).json({
            perusahaan,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllPerusahaan = async (req, res) => {
    try {
        const perusahaan = await models.Perusahaan.findAll({
            include: []
        });
        return res.status(200).json({ perusahaan });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPerusahaanById = async (req, res) => {
    try {
        const { perusahaanId } = req.params;
        const perusahaan = await models.Perusahaan.findOne({
            where: { id: perusahaanId },
            include: [],
        });
        if (perusahaan) {
            return res.status(200).json({ perusahaan });
        }
        return res.status(404).send("Perusahaan with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePerusahaan = async (req, res) => {
    try {
        const { perusahaanId } = req.params;
        const [updated] = await models.Perusahaan.update(req.body, {
            where: { id: perusahaanId }
        });
        if (updated) {
            const updatedPerusahaan = await models.Perusahaan.findOne({ where: { id: perusahaanId } });
            return res.status(200).json({ perusahaan: updatedPerusahaan });
        }
        throw new Error("Perusahaan not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePerusahaan = async (req, res) => {
    try {
        const { perusahaanId } = req.params;
        const deleted = await models.Perusahaan.destroy({
            where: { id: perusahaanId }
        });
        if (deleted) {
            return res.status(204).send("Perusahaan deleted");
        }
        throw new Error("Perusahaan not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPerusahaan,
    getAllPerusahaan,
    getPerusahaanById,
    updatePerusahaan,
    deletePerusahaan
}