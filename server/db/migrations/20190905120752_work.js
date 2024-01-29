export async function up(knex) {
  return knex.schema.createTable('work', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('links')
    table.string('linkDescription')
    table.string('description')
    table.string('field')
    table.string('tools')
    table.string('images')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('work')
}
