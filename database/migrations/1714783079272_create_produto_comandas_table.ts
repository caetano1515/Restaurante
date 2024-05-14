import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produto_comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().references('produtos.id')
      table.integer('comanda_id').unsigned().references('comandas.id')
      table.decimal('quantidade')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
