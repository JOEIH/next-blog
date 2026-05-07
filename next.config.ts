import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src')], // src 폴더 안의 SVG만 처리
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
      './src/**/*.svg': {
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
