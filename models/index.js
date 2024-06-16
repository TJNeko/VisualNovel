const User = require('./User');
const Story = require('./Story');
// const Choice = require('./Choice');
User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { 
  User, 
  Story, 
  // Choice 
};
