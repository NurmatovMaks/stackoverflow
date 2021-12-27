const ProblemService = require("./../services/problem-service");
const { CREATE_SUCCESS } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const { id } = req.user;
    const { images } = req.files;
    await ProblemService.create(title, description, id, tag, images);
    res.json(CREATE_SUCCESS);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    let { q, page, limit, tag } = req.query;
    page = page || 1;
    limit = limit || 6;

    const offset = page * limit - limit;
    const problems = await ProblemService.getAll({ offset, limit, q, tag });

    // console.log(req.query);
    res.json(problems);
  } catch (error) {
    res.status(404).json({ message: "Tag not found" });
  }
};

module.exports = {
  create,
  getAll,
};
