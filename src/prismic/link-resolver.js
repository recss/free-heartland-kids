/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    console.log('link-resolver.js - isBroken', doc);
    return '/not-found';
  }

  if (doc.type === 'home') {
    console.log('link-resolver.js - home', doc);
    return '/'
  }

  if (doc.type === 'pages') {
    console.log('link-resolver.js - pages', doc);
    return '/page/' + doc.uid
  }

  console.log('link-resolver.js - not-found', doc);
  return '/not-found'
}
