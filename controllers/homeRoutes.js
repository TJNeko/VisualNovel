const router = require("express").Router();
const { Story, User } = require("../models");
const withAuth = require("../utils/auth");

//initial loading page
router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage", {
      //  stories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//fetching this function to storyHandler.js.
router.get("/api/story", async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const stories = storyData.map((story) => story.get({ plain: true }));

    res.render("story", {
      story: stories[2],
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//after start button clicked, this is called
router.get("/story", async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const stories = storyData.map((s) => {
      return s?.get({ plain: true });
    });
    res.render("/intro", {
      stories: stories, //all stories
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/story/:id", async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const story = storyData.get({ plain: true });
    if(story.has_choice) {
      res.render("storyWithChoices", {
        story: story, //one story
        logged_in: req.session.logged_in,
      });
    } else if(story.is_dead){
      res.render("dead", {
        story: story, //one story
        logged_in: req.session.logged_in,
      });
    }else if(story.is_dead===false){
      res.render("escape", {
        story: story, //one story
        logged_in: req.session.logged_in,
      });
    }else{
      res.render("story", {
        story: story, //one story
        logged_in: req.session.logged_in,
      });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
