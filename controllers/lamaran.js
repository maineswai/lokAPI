const models = require("../database/models");

const createLamaran = async (req, res) => {
    try {
        const lamaran = await models.Lamaran.create(req.body);
        return res.status(201).json({
            lamaran,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllLamaran = async (req, res) => {
    try {
        const lamaran = await models.Lamaran.findAll({
            include: [
                {
                    model: models.Lowongan,
                    as: "lowongan"
                },
                {
                    model: models.Pelamar,
                    as: "pelamar"
                }
            ]
        });
        return res.status(200).json({ lamaran });
    } catch (error) {
        return res.status(500).send(error.message);
    } 
}

const getLamaranById = async (req, res) => {
    try {
        const { lamaranId } = req.params;
        const lamaran = await models.Lamaran.findOne({
            where: { id: lamaranId },
            include: [],
        });
        if (lamaran) {
            return res.status(200).json({ lamaran });
        }
        return res.status(400).send("Lamaran with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateLamaran = async (req, res) => {
    try {
        const { lamaranId } = req.params;
        const [updated] = await models.Lamaran.update(req.body, {
            where: { id: lamaranId }
        });
        if (updated) {
            const updatedLamaran = await models.Lamaran.findOne({ where: { id: lamaranId }});
            return res.status(200).json({ lamaran: updatedLamaran });
        }
        throw new Error("Lamaran not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteLamaran = async (req, res) => {
    try {
        const { lamaranId } = req.params;
        const deleted = await models.Lamaran.destroy({
            where: { id: lamaranId }
        });
        if (deleted) {
            return res.status(204).send("Lamaran deleted");
        }
        throw new Error("Lamaran not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createLamaran,
    getAllLamaran,
    getLamaranById,
    updateLamaran,
    deleteLamaran
}