export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('about_work').del()

  // Inserts seed entries
  await knex('about_work').insert([
    {
      title: '4176',
      subtitle: 'Poster',
      year: '2023',
      images: 'client/images/about/4176.jpg',
    },
    {
      title: 'REVULVA',
      subtitle: 'Event Poster',
      year: '2024',
      images: 'client/images/about/vulvaDisco.jpg',
    },
    {
      title: 'The Nightfly',
      subtitle: 'Album Poster',
      year: '2024',
      images: 'client/images/about/donaldFagan.jpg',
    },
    {
      title: 'The Gilded Lily',
      subtitle: 'Event Poster',
      year: '2022',
      images: 'client/images/about/gildedLily01.jpg',
    },
    {
      title: 'Japes DOOM Release',
      subtitle: 'Event Poster',
      year: '2024',
      images: 'client/images/about/japes01.jpg',
    },
    {
      title: 'Octopus in Heels',
      subtitle: 'Single Cover',
      year: '2023',
      images: 'client/images/about/pussyNheels.jpg',
    },
    {
      title: 'Muddy Waters',
      subtitle: 'Album Cover',
      year: '2021',
      images: 'client/images/about/muddyWaters.jpg',
    },
    {
      title: 'NOVA',
      subtitle: 'Album Cover',
      year: '2023',
      images: 'client/images/about/songsFromHome.jpg',
    },
    {
      title: 'TREES',
      subtitle: 'Poster',
      year: '2023',
      images: 'client/images/about/trees.jpg',
    },
    {
      title: 'NOVA',
      subtitle: 'Event Poster',
      year: '2023',
      images: 'client/images/about/superNova.jpg',
    },
    {
      title: 'REVULVA',
      subtitle: 'Event Poster',
      year: '2022',
      images: 'client/images/about/vulvaAkl.jpg',
    },
  ])
}
