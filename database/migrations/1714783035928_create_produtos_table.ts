import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.decimal('preco').notNullable()
      table.string('tamanho', 45)
      table.integer('tipo_id').unsigned().references('tipos.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
