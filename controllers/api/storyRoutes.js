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
router.get('/story', async (req, res) => {
    try {
        const lastPosition = req.cookies.story_position || 0;
        const storyData = await Story.findAll({
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
          const stories = storyData.map((s) => { 
            return s.get({plain: true });
          });
          res.render('story', { stories, current_index: lastPosition });
        } catch (err) {
          res.status(500).json(err);
        }
      });
      router.post('/next', withAuth, async (req, res) => {
        try {
            const updatedIndex = req.body.updatedIndex;
            res.cookie('story_position', updatedIndex);
            res.redirect('/story');
        } catch (err) {
            res.status(500).json(err);
          }
        });


module.exports = router;
