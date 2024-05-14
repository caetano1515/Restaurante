import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare endereco: string

  @column()
  declare sexo: string

  @column()
  declare telefone: string

  @column()
  declare cargoId: number
}
