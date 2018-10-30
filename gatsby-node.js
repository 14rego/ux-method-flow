/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MethodsJson`) {
    const slug = '/detail/' + node.unique;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
  if (node.internal.type === `FiltersJson`) {
    const slug = node.type + '/' + node.value;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMethodsJson {
          edges {
            node {
              unique
            }
          }
        }
      }
    `).then(result => {
      result.data.allMethodsJson.edges.forEach(({ node }) => {
        createPage({
          path: `detail/` + node.unique,
          component: path.resolve(`./src/templates/detail.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.unique
          }
        });
      });
      //console.log(JSON.stringify(result, null, 4));
      resolve();
    });
    graphql(`
      {
        allFiltersJson {
          edges {
            node {
              type
              value
            }
          }
        }
      }
    `).then(result => {
      result.data.allFiltersJson.edges.forEach(({ node }) => {
        createPage({
          path: node.type + `/` + node.value,
          component: path.resolve(`./src/templates/` + node.type + `.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.value
          }
        });
      });
      //console.log(JSON.stringify(result, null, 4));
      resolve();
    });
  });
};
