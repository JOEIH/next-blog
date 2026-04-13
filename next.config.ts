import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            replaceAttrValues: {
              '#000': 'currentColor',
              '#000000': 'currentColor'
            }
          }
        }
      ]
    })
    return config
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              icon: true,
              replaceAttrValues: {
                '#000': 'currentColor',
                '#000000': 'currentColor'
              }
            }
          }
        ],
        as: '*.js'
      }
    }
  }
}

export default nextConfig
