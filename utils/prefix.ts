const isProduction = process.env.NODE_ENV === 'production'
const prefix = isProduction
  ? 'https://compsoc-edinburgh.github.io/comp-soc.com'
  : ''

export { prefix }
