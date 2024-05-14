import ProdutosController from '#controllers/produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()


