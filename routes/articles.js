const express = require('express')
var router = express.Router()

const articles = require('../controllers/articles')

router.get('/', articles.getAllArticles);
router.get('/:id', articles.getArticle);
router.post('/', articles.createArticle);
router.put('/:id', articles.updateArticle);
router.delete('/:id', articles.deleteArticle);

module.exports = router
