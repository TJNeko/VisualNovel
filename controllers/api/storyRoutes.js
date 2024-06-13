const router = require('express').Router();
const { Story, Choice, User } = require('../../models');
const withAuth = require('../../utils/auth');


// router.get('/story', async (req,res) => {

//   try{
//     const storyData = await Story.findAll({
//         include:{
//           model:Choice,
//           // include: User
//         }
//     });
  
//     const stories = storyData.get({plain: true});
//     console.log("Story data pulled " + stories[0]);
//     res.render("story",{
//       story:stories[0],
//       loggedIn:req.session.loggedIn
//     });
//     res.json(stories);
//   }catch(err){
//     console.error(err);
//   }
// });

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newStory = await Story.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newStory);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



module.exports = router;
