import Nextra from 'nextra'

const withNextra = Nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx'
})
 
export default withNextra({
  output:'export',
  images:{
    unoptimized: true
  }
})