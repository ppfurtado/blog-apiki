export const API_URL = 'https://blog.apiki.com/wp-json/wp/v2/'

export function GETALLPOSTS_GET() {
  return {
    url: API_URL + 'posts?_embed&categories=518'
  }
}

export function GETPOST_GET(slug) {
  return {
    url: API_URL + `posts?_embed&slug=${slug}`
  }
}