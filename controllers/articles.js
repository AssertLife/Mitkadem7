const articles = require('../models/articles')

const getArticle = (req,res) => {
    const id = parseInt(req.params.id)
    const article = articles.getArticle(id)
    if (!article) {
        return res.status(404).json({ error: 'Article not found' })
    }
    res.json(article)
}

const getAllArticles = (req,res) => {
    res.json(articles.getAllArticles())
}

const createArticle = (req,res) => {
    const { title, published, author, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content required' })
    }
    const id = articles.addArticle(title, published, author, content)
    res.status(201).json(articles.getArticle(id))
}

const updateArticle = (req,res) => {
    const id = parseInt(req.params.id)
    const updates = req.body
    const updated = articles.updateArticle(id, updates)
    if (!updated) {
        return res.status(404).json({ error: 'Article not found' })
    }
    res.json(updated)
}

const deleteArticle = (req,res) => {
    const id = parseInt(req.params.id)
    const deleted = articles.deleteArticle(id)
    if (!deleted) {
        return res.status(404).json({ error: 'Article not found' })
    }
    res.json(deleted)
}

module.exports = { getArticle, getAllArticles, createArticle, updateArticle, deleteArticle }
