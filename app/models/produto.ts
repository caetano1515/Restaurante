import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare preco: number

  @column()
  declare tamanho: string

  @column()
  declare tipoId: number
}
