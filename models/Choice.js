const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
        model: 'story',
        key: 'id',
      },
      allowNull: false
    },
    choice:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }

    
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
    modelName: 'choice',
  }
);

module.exports = Choice;
