import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ComandasController from '#controllers/comandas_controller'
import FormaPagamentosController from '#controllers/forma_pagamentos_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import IngredientesesController from '#controllers/ingredientes_controller'
import ProdutosComandasController from '#controllers/produto_comandas_controller'
import ProdutosIngredientesIngredientesController from '#controllers/produto_ingredientes_controller'
import ProdutosController from '#controllers/produtos_controller'
import TiposController from '#controllers/tipos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.resource('/cargos', CargosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/formaPagamamento', FormaPagamentosController ).apiOnly()
router.resource('/funcionario', FuncionariosController ).apiOnly()
router.resource('/ingredientes', IngredientesesController ).apiOnly()
router.resource('/produtosComandas', ProdutosComandasController ).apiOnly()
router.resource('/produtosIngredientes', ProdutosIngredientesIngredientesController ).apiOnly()
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()


