const models = require("../database/models");

const createLowongan = async (req, res) => {
    try {
        const lowongan = await models.Lowongan.create(req.body);
        // return res.status(201).json({ lowongan });
        return res.status(201).json({
            status: 201,
            message: "Lowongan successfully created",
            data: lowongan
        });
    } catch (error) {
        // return res.status(500).json({error: error.message});
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

const getAllLowongan = async (req, res) => {
    try {
        const lowongan = await models.Lowongan.findAll({
            include: [
                {
                    model: models.Perusahaan,
                    as: "perusahaans"
                },
                {
                    model: models.Lamaran,
                    as: "lowongans"
                }
            ]
        });
        // return res.status(200).json({ lowongan });
        return res.json({
            status: 200,
            message: "Lowongan successfully displayed",
            data: lowongan
        });
    } catch (error) {
        // return res.status(500).send(error.message);
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

const getLowonganById = async (req, res) => {
    try {
        const { lowonganId } = req.params;
        const lowongan = await models.Lowongan.findOne({
            where: { id: lowonganId },
            include: [],
        });
        if (lowongan) {
            // return res.status(200).json({ lowongan });
            return res.status(200).json({
                status: 200,
                message: "Lowongan successfully displayed",
                data: lowongan
            });
        }
        // return res.status(400).send("Lowongan with the specified ID does not exists");
        return res.status(404).json({
            status: 404,
            message: "Lowongan with the specified ID does not exists"
        });
    } catch (error) {
        // return res.status(500).send(error.message);
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

const updateLowongan = async (req, res) => {
    try {
        const { lowonganId } = req.params;
        const [updated] = await models.Lowongan.update(req.body, {
            where: { id: lowonganId }
        });
        if (updated) {
            const updatedLowongan = await models.Lowongan.findOne({ where: { id: lowonganId }});
            // return res.status(200).json({ lowongan: updatedLowongan });
            return res.status(200).json({
                status: 200,
                message: "Lowongan successfully updated",
                data: updatedLowongan
            });
        }
        throw new Error("Lowongan not found");
    } catch (error) {
        // return res.status(500).send(error.message);
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

const deleteLowongan = async (req, res) => {
    try {
        const { lowonganId } = req.params;
        const deleted = await models.Lowongan.destroy({
            where: { id: lowonganId }
        });
        if (deleted) {
            // return res.status(204).send("Lowongan deleted");
            return res.status(204).json({
                status: 204,
                message: "Lowongan successfully deleted"
            });
        }
        throw new Error("Lowongan not found");
    } catch (error) {
        // return res.status(500).send(error.message);
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

module.exports = {
    createLowongan,
    getAllLowongan,
    getLowonganById,
    updateLowongan,
    deleteLowongan
}