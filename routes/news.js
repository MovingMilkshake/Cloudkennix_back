var express = require('express');
var router = express.Router();

let news = [
        {
            title:"Заголовок с сервера",
            text: "Некий текст с сервера",
            img: "*Ссылка на картинку с сервера*"
        }
    ]

router.get('/', (req, res) => {
    res.send(news)
})

router.put('/', (req, res) => {
    let nw = req.body
    news.push(nw)
    nw.id = news.length
    res.send(nw)
})

module.exports = router