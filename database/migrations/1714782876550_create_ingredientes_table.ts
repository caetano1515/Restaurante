import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ingredientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.text('descricao', 'mediumtext')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
