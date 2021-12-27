const { DataTypes } = require("sequelize");
const sequelize = require("./../db.js");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});

const Problem = sequelize.define("problem", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  tag: { type: DataTypes.ENUM(["JavaScript", "Pyton", "Java", "Kotlin"]) },
});

const Picture = sequelize.define("picture", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  image: { type: DataTypes.STRING },
});

const Comments = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
});

const Reply = sequelize.define("reply", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
});

User.hasMany(Problem);
Problem.belongsTo(User);

User.hasMany(Reply);
Reply.belongsTo(User);

User.hasMany(Comments);
Comments.belongsTo(User);

Problem.hasMany(Reply);
Reply.belongsTo(Problem);

// Problem.hasMany(Comments);
// Comments.belongsTo(Problem);

Problem.hasMany(Picture);
Picture.belongsTo(Problem);

Reply.hasMany(Comments);
Comments.belongsTo(Reply);

module.exports = {
  User,
  Problem,
  Picture,
  Reply,
  Comments,
};
