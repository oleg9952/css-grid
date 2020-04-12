const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const PAGES = [
    { template: './index.html', filename: 'index.html' },
    { template: './examples/navigation/navigation.html', filename: 'navigation.html' },
    { template: './examples/gallery/gallery.html', filename: 'gallery.html' },
    { template: './examples/fixed-size/fixed-size.html', filename: 'fixed-size.html' },
    { template: './examples/column-row/column-row.html', filename: 'column-row.html' },
    { template: './examples/areas/areas.html', filename: 'areas.html' },
    { template: './examples/forms/forms.html', filename: 'forms.html' },
    { template: './examples/grid/grid.html', filename: 'grid.html' }
]

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4200
    },
    plugins: [
        ...PAGES.map(page => {
            return new HTMLPlugin({
                template: page.template,
                filename: page.filename
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]'
				},
			}
        ]
    }
}