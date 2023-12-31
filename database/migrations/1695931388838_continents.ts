import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'continents'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.boolean('is_active').defaultTo(false).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
