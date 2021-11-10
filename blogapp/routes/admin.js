const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('admin/index')
})

router.get('/post', (req, res) =>{ // para carregar prescisa do prefixo admin/
    res.send('Página de post')
})

router.get('/categorias', (req, res) =>{ // para carregar prescisa do prefixo admin/
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})


module.exports = router