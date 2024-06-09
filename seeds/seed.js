const sequelize = require('../config/connection');
const { User, Story, Choice } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const choiceData = require('./choiceData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  for (const story of storyData) {
    await Story.create({
      ...story,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  await Choice.bulkCreate(choiceData);
  process.exit(0);
};

seedDatabase();
