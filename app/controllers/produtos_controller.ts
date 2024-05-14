
import Produto from "#models/produto"
import type { HttpContext } from "@adonisjs/core/http"


export default class ProdutosController {
  // getAll
  async index({ request }: HttpContext) {
    const page = request.input('page')
    return await Produto.query().paginate(page, 5)
  }

  // get
  async show({ params }: HttpContext) {
    return await Produto.findOrFail(params.id)
  }

  // post
  async store({ request }: HttpContext) {
    const dados = request.only(['nome', 'preco', 'tamanho', 'typoId'])
    return await Produto.create(dados)
  }

  // update
  async update({ params, request }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    const dados = request.only(['nome', 'preco', 'tamanho', 'typoId'])

    produto.merge(dados)
    return await produto.save()
  }

  // delete
  async destroy({ params }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    try {
      await produto.delete()
      return { "msg": "Excluido com sucesso!", produto }
    } catch (error) {

      return { mensagem: error }
    }

  }

}
