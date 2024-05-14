import ProdutoIngrediente from '#models/produto_ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ProdutoIngrediente.createMany([
      {
        "produtoId": 1,
        "ingredienteId": 1
      },
      {
        "produtoId": 2,
        "ingredienteId": 2
      },
      {
        "produtoId": 3,
        "ingredienteId": 3
      },
      {
        "produtoId": 4,
        "ingredienteId": 4
      },
      {
        "produtoId": 5,
        "ingredienteId": 5
      },
      {
        "produtoId": 6,
        "ingredienteId": 6
      },
      {
        "produtoId": 7,
        "ingredienteId": 7
      },
      {
        "produtoId": 8,
        "ingredienteId": 8
      },
      {
        "produtoId": 9,
        "ingredienteId": 9
      },
      {
        "produtoId": 10,
        "ingredienteId": 10
      }
    ]
    )
  }
}
