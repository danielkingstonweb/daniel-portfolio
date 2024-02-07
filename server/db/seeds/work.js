export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('work').del()

  // Inserts seed entries
  await knex('work').insert([
    {
      title: 'Earthenwares',
      links: 'https://github.com/rubyfrancesgit/Earthenwares',
      linkDescription: 'View Git Repository',
      description: `Earthenwares is a fullstack application created in a group. It's an e-commerce website created to sell pottery targeted at local potters. It included an extensive research & design phase followed by the coding phase. Working in a group of three my group members and I conducted stand up meetings every morning and collaborated at each step of the design and building phases, working to our strengths to produce a fully responsive, fully functional E-Commerce Platform. The timeline for this project was 3 weeks.`,
      field: 'Web/UX Design,Front-End Development,Back-End Development',
      tools:
        'HTML,CSS(Sass),JS,jQuery,Gulp,MongoDB,Postman,nodeJS,Figma,Adobe Suite',
      images:
        'client/images/earthenwares/clear1.png,client/images/earthenwares/clear2.png,client/images/earthenwares/clear3.png',
    },
    {
      title: `Ms Johnson's`,
      links: '',
      linkDescription: '',
      description: `I made Ms Johnson's Flamin' Hot Vulva Sauce as a birthday gift for someone very dear. The illustrations and some of the copy have been taken from various books and magazines I collect for collage. I have decided to include this project as it represents what I love about design, the opportunity to create something tangible & special for human beings.`,
      field: 'Graphic Design',
      tools: 'Adobe Suite,Manual Collage',
      images: '',
    },
    {
      title: `Girl's Gotta Eat`,
      links: '',
      linkDescription: '',
      description: `Girl's Gotta Eat is Wellington Band Revulva's debut EP and our first time working together. They're fun, funny, talented and most importantly they don't take themselves too seriously. In typical Revulva fashion the timeline for this project was 2 days, I was approached on Monday and the CD's needed to be sent to print on Wednesday for the EP release on Friday. This was a fun opportunity to be creative on a strict deadline.`,
      field: 'Graphic Design',
      tools: 'Adobe Suite,Manual Collage',
      images: '',
    },
    {
      title: `Revulva Tour`,
      links: '',
      linkDescription: '',
      description: `I was entrusted with the design work for Revulva's first nationwide tour, the tour was themed around their single 'This Town'. This was a really fun opportunity to create a cohesive set of works that speak to each other and the audience collectively. Dressing and shooting each of the band and incorporating them into a mix of print & digital designs balancing the western chic and the colourful and playful flair that makes Revulva what they are.`,
      field: 'Graphic Design,Photography',
      tools: 'Adobe Suite,Manual Collage',
      images: '',
    },
    {
      title: `James Warrender Artist`,
      links: '',
      linkDescription: '',
      description: `This website is a fully responsive Wordpress Custom Theme written in PHP with Woocommerce for the storefront. The purpose of this website is to display and sell the artists work. Many aspects of the site are customizable such as the colour scheme, landing page images etc. There are also custom post types for upload new work. The Timeline for this project was 2 Weeks`,
      field: 'Web/UX Design,Front-End Development,Wordpress',
      tools: 'HTML,CSS(Sass),JS,jQuery,PHP,Laravel Mix,Figma,Adobe Suite',
      images: '',
    },
    {
      title: `Dirty Burger`,
      links: '',
      linkDescription: '',
      description: `This is a table-side ordering system designed for Dirty Burger. At it's core this is a design project based much more in the frontend with limited actual functionality. It is designed for an iPad pro 12.9". Please note that this is not a real client of mine but a project completed while studying. The Timeline for this project was One Week.`,
      field: 'Web/UX Design,Front-End Development',
      tools: 'HTML,CSS(Sass),JS,jQuery,Figma,Adobe Suite',
      images:
        'client/images/dirtyburger/clear1.png,client/images/dirtyburger/clear2.png,client/images/dirtyburger/clear3.png,client/images/dirtyburger/clear4.pngclient/images/dirtyburger/designOutline.png',
    },
    {
      title: `Rites of Passage`,
      links: '',
      linkDescription: '',
      description: `Rites of Passage is a gritty coming of age production put on by Long Cloud Youth Theatre. It's special in that it was written by every member of the cast, each member bought their own tales and real world experiences and folded them into the script to make something intentionally uncomfortable and raw. This poster was produced in A1 print and the social tiles present on Facebook & Instagram. I also took the photo assets present in the poster. The timeline for this project was 2 weeks.`,
      field: 'Graphic Design,Photography',
      tools: 'Adobe Suite,Manual Collage,Digital Photography',
      images: '',
    },
    {
      title: `The Gilded Lily`,
      links: '',
      linkDescription: '',
      description: `The Gilded Lily is an event poster for a Wellington Jazz Festival Event. The client took inspiration from the Mermaidens, Caroline Polachek, and Ravyn Lenae. She originally wanted the focal point image to take up the entire poster and have text overlaid. However the image that she had provided was too busy for this style of poster. We worked together to find a solution that she felt respresented her event. Working to create a poster where the image is still the focal point but the text is clearly legible.`,
      field: 'Graphic Design',
      tools: 'Adobe Suite,Manual Collage',
      images: '',
    },
  ])
}
