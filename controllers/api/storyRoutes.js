const router = require('express').Router();
const { Story, User } = require('../../models');
const withAuth = require('../../utils/auth');

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
