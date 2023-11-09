const express = require('express');
const knex = require('../ormInstance');
const router = express.Router();

router.get('/', (_req, res) => {
  knex('posts')
    .orderBy('id', 'desc')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  knex('posts')
    .insert({
      title: req.body.title,
      body: req.body.body
    })
    .then(postId => {
      res.status(201).json({ newPostId: postId[0] });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;