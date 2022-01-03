const ProblemService = require("./../services/problem-service");
const { CREATE_SUCCESS, DELETE_SUCCESS } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const { id } = req.user;
    let images;
    if (req.files) {
      images = req.files.images;
    }
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

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProblemService.deleteOne(id);
    res.json({ message: DELETE_SUCCESS });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  deleteOne,
};
