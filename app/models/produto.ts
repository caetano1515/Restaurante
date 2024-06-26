import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Tipo from './tipo.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Tipo)
  declare tipo: BelongsTo<typeof Tipo>
}
