const Visit = require("../../db/models/visits");

const getAllVisits = async (req, res) => {
  try {
    const allVisit = await Visit.find({ userId: req.user._id });

    return res.json({ data: allVisit });
  } catch {
    return res.status(500).json({ error });
  }
};

const createNewVisit = async (req, res) => {
  try {
    const { patientName, doctorName, visitDate, complaint } = req.body;

    req.body.userId = req.user._id;
    console.log(req.user._id);
    const visit = await Visit.create(req.body);

    return res.json({ visit });
  } catch {
    return res.status(500).json({ error });
  }
};

const changeVisit = async (req, res) => {
  try {
    const { _id, patientName, doctorName, visitDate, complaint } = req.body;

    const changingVisit = await Visit.updateOne({ _id }, req.body._id);

    return res.json({ changingVisit: req.body });
  } catch {
    return res.status(500).json({ error });
  }
};

const deleteVisit = async (req, res) => {
  try {
    const remoteVisit = await Visit.deleteOne({ _id: req.body._id });

    return res.json();
  } catch {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getAllVisits,
  createNewVisit,
  deleteVisit,
  changeVisit,
};
