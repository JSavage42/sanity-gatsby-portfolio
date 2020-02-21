export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4fca863832e001778c66f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xmiu8qt3',
                  apiId: '1159ddca-ac48-4234-a2a2-2d79e5befb55'
                },
                {
                  buildHookId: '5e4fca86791ded017b340a54',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1adfpwzy',
                  apiId: 'a6bfe4f5-17d9-492d-9091-a55e2b99ff83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JSavage42/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1adfpwzy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
