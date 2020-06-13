process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.REACT_APP_API_KEY = 'G5mZccexXgchNkAYOBlQ'
process.env.REACT_APP_API_URL = "https://cors-anywhere.herokuapp.com/https://api.pipelinedeals.com/api/v3"

const environment = require('./environment')

module.exports = environment.toWebpackConfig()