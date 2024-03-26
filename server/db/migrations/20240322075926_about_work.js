export async function up(knex) {
  return knex.schema.createTable('about_work', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('subtitle')
    table.string('year')
    table.string('images')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('about_work')
}
