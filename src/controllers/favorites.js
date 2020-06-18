const express = require('express');
const router = express.Router();

const {getFavorites, addFavorite, removeFavorite} = require('../services/favorites');

router.get('/byuserid/:userId', async (req, res) => {
  let userId = req.params.userId;

  try {
    const result = await getFavorites(userId);
    const favorites = result.Items.map(item => item.mealId);

    res.json({favorites});
  } catch (e) {
    res.status(500).send({
      message: "Error occurred while getting favorites",
      error: e
    })
  }
});

router.post('/', async (req, res) => {
  const {userId, mealId} = req.body;

  try {
    await addFavorite(mealId, userId);
    res.send({
      message: "Added to favorites successfully"
    })
  } catch (e) {
    res.status(500).send({
      message: "Error occurred while adding",
      error: e.message
    })
  }
});

router.delete('/', async (req, res) => {
  const {userId, mealId} = req.body;

  try {
    await removeFavorite(mealId, userId);

    res.status(200).send({
      message: "Added to favorites successfully"
    });
  } catch (e) {
    res.status(500).send({
      message: "Error occurred while adding",
      error: e.message
    })
  }
});

module.exports = router;
