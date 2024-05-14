import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
}
