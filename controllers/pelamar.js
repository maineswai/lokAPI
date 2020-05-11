const models = require("../database/models/");

const createPelamar = async (req, res) => {
    try {
        const pelamar = await models.Pelamar.create(req.body);
        return res.status(201).json({
            pelamar,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllPelamar = async (req, res) => {
    try {
        const pelamar = await models.Pelamar.findAll({
            include: [
                {
                    model: models.Lamaran,
                    as: "lamarans",
                    include: [
                        {
                            model: models.Lowongan,
                            as: "lowongan"
                        }
                    ]
                }
            ]
        });
        return res.status(200).json({ pelamar })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPelamarById = async (req, res) => {
    try {
        const { pelamarId } = req.params;
        const pelamar = await models.Pelamar.findOne({
            where: { id: pelamarId},
            include: [],
        });
        if (pelamar) {
            return res.status(200).json({ pelamar });
        }
        return res.status(404).send("Pelamar with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePelamar = async (req, res)=> {
    try {
        const { pelamarId } = req.params;
        const [updated] = await models.Pelamar.update(req.body, {
            where: { id: pelamarId }
        });
        if (updated) {
            const updatedPelamar = await models.Pelamar.findOne({ where: { id: pelamarId }});
            return res.status(200).json({ pelamar: updatedPelamar });
        }
        throw new Error("Pelamar not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePelamar = async (req, res) => {
    try {
        const { pelamarId } = req.params;
        const deleted = await models.Pelamar.destroy({
            where: { id: pelamarId }
        });
        if (deleted) {
            return res.status(204).send("Pelamar deleted");
        }
        throw new Error("Pelamar not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPelamar,
    getAllPelamar,
    getPelamarById,
    updatePelamar,
    deletePelamar
}