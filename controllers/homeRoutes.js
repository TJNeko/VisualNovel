const router = require('express').Router();
const { Story, User, Choice } = require('../models');
const withAuth = require('../utils/auth');

//initial loading page
router.get('/', async (req, res) => {
  try {
    //if not logged in, login 
    
    //else start over the game or continue


    // Get all story and JOIN with user data
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const stories = storyData.map((story) => story.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      stories, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/story/:id', async (req,res) => {
//   try{
//     const storyData = await Story.findByPk(req.params.id, {
//         include:{
//           model:Choice,
//           // include: User
//         }
//     });
  
//     const story = storyData.get({plain: true});
//     console.log("Story data pulled " + story);
//     res.json(story);
//   }catch(err){
//     console.error(err);
//   }
// });


//fetching this function to storyHandler.js. 
router.get('/api/story', async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const stories = storyData.map(story => story.get({ plain: true }));

    //only first array of story is sent 
    res.json(stories[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//is above screw, delete above and use this
// router.get('/api/story', async (req, res) => {
//   try {
//     const storyData = await Story.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         // {
//         //   model: Choice,
//         //   attributes: ['has_choice', 'story'],
//         // }
//       ],
//     });

//     const stories = storyData.map(story => story.get({ plain: true }));

//     res.json(stories);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

//after start button clicked, this is called
router.get('/story', async (req, res) => {
  try {
    
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model: Choice,
        //   attributes: ['has_choice', 'story'],
        // }
      ],
    });

    const stories = storyData.map((s) => { 
      return s.get({plain: true });
    });

    res.render('story', {

     story:stories[0],//one object
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Story }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
