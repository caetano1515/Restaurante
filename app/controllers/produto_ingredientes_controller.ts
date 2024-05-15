import ProdutoIngrediente from '#models/produto_ingrediente'
import type { HttpContext } from '@adonisjs/core/http'



export default class ProdutosIngredientesIngredientesController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await ProdutoIngrediente.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await ProdutoIngrediente.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['produtoId','ingredienteId'])
    return await ProdutoIngrediente.create(dados)
  }

  async update({params, request}: HttpContext){
    const produtosingrediente = await ProdutoIngrediente.findOrFail(params.id)
    const dados = request.only(['produtoId','ingredienteId'])
    produtosingrediente.merge(dados)
    return await produtosingrediente.save()
  }

  async destroy({params}: HttpContext){
    const produtosingrediente = await ProdutoIngrediente.findOrFail(params.id)
      await produtosingrediente.delete()
      return {'produtosingrediente deletado:': produtosingrediente}

  }
}
