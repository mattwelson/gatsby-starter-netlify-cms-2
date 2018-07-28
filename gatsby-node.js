const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
  const { createNodeField } = boundActionCreators

  const parents = {}
  // iterate thorugh all markdown nodes to link children
  const markdownNodes = getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .forEach(node => {
      if (node.frontmatter.parentTrip) {
        const parentNode = getNodes().find(
          node2 =>
            node2.internal.type === 'MarkdownRemark' &&
            node2.frontmatter.title === node.frontmatter.parentTrip
        )

        if (parentNode) {
          createNodeField({
            node,
            name: 'parentTrip',
            value: parentNode.id
          })

          // if it's first time for this author init empty array for his posts
          if (!(parentNode.id in parents)) {
            parents[parentNode.id] = []
          }
          // add book to this author
          parents[parentNode.id].push(node.id)
        }
      }
    })

  Object.entries(parents).forEach(([parentNode, childId]) => {
    createNodeField({
      node: getNode(parentNode),
      name: 'childTrips',
      value: childId
    })
  })
}
