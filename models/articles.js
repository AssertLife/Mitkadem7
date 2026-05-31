const articles = [
    {
        id : 1,
        title : 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    },
    {
        id : 2,
        title : 'Not my cake',
        author: 'Not John Doe',
        published: 'Not February 11, 2024',
        content: 'Not Lorem ipsum'
    }
]

let nextId = 3

const getArticle = (id) => {
    return articles.find((article) => article.id === id)
}

const getAllArticles = () => {
    return articles
}

const addArticle = (title, published, author, content) => {
    const id = nextId++
    const newArticle = { id, title, author, published, content }
    articles.push(newArticle)
    return id
}

const updateArticle = (id, updates) => {
    const index = articles.findIndex((article) => article.id === id)
    if (index === -1) return null
    articles[index] = { ...articles[index], ...updates }
    return articles[index]
}

const deleteArticle = (id) => {
    const index = articles.findIndex((article) => article.id === id)
    if (index === -1) return null
    const deleted = articles.splice(index, 1)
    return deleted[0]
}

module.exports = { getArticle, getAllArticles, addArticle, updateArticle, deleteArticle }
