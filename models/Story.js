const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Story extends Model {}

Story.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    story: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    has_choice: {
      type: DataTypes.BOOLEAN,
    },
    is_dead: {
      type: DataTypes.BOOLEAN,
    },
    choices: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("choices"));
      },
      set: function (val) {
        console.log("Setting value!")
        // val should be an array of objects
        // that has "text" and "next_story_id"
        let isValid = true;
        console.log(val)

        for(choice of val) {
          if(
            !choice.hasOwnProperty("text") || 
            !choice.hasOwnProperty("next_story_id")) {
              isValid = false;
            }
        }

        if (isValid) {
          console.log("Choices are valid!")
          return this.setDataValue("choices", JSON.stringify(val));
        } else {
          console.log("Invalid value in setting choice!");
          return null;
        }
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "story",
  }
);

module.exports = Story;
