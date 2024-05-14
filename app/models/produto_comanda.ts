import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdutoComanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: number

  @column()
  declare comandaId: number

  @column()
  declare quantidade: number
}
