import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdutoIngrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: number

  @column()
  declare ingredienteId: number
}
