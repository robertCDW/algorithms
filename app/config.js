let apiUrl
/*
const apiUrls = {
  production: 'https://tic-tac-toe-api-production.herokuapp.com',
  development: 'https://tic-tac-toe-api-development.herokuapp.com'
}
*/

const apiUrls = {
  production: 'https://safe-plains-79425.herokuapp.com',
  development: 'http://127.0.0.1:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
