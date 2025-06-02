const express = require("express");
const { fetchJoke } = require("../services/jokeService");
const router = express.Router();

const categories = ["random", "dark", "office", "relationship"];

categories.forEach((category) => {
  const route = `/${category}`;
  router.get(route, async (req, res) => {
    try {
      const data = await fetchJoke(category === "random" ? "common" : category);
      res.json(data);
    } catch (error) {
      res.status(500).json({
        error: `Failed to fetch ${category} joke.`,
        details: error.message,
      });
    }
  });
});

router.use((req, res) => {
  res.status(404).json({
    message:
      "Only /random, /dark, /office, and /relationship routes are available",
  });
});

module.exports = router;
