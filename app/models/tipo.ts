import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Produto from './produto.js'

export default class Tipo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @hasMany(() => Produto)
  declare produto: HasMany<typeof Produto>
}
