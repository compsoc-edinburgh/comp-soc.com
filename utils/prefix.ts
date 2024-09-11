const isProduction = process.env.NODE_ENV === 'production'
const prefix = isProduction ? 'https://comp-soc.com' : ''

export { prefix }
