const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Choice extends Model {}

Choice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    story_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "story",
        key: "id",
      },
      //  allowNull: false
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
          return this.setDataValue("choices", JSON.stringify(val));
        } else {
          console.log("Invalid value in setting choice!");
          return null;
        }
      },
      // type: DataTypes.ARRAY(DataTypes.STRING),
      // allowNull: false
    },

    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "choice",
  }
);

module.exports = Choice;
