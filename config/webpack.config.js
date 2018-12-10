const path = require('path');
const webpack = require('webpack');

var alias = {};

["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
    "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "../node_modules/react-dom/lib", filename);
});

module.exports = (env) => {

    return {
        context: path.resolve(__dirname),

        mode: "development",

        resolve: {
            alias: alias,
            extensions: [".js", ".jsx"],

            modules: [
                'node_modules'
            ]
        },

        devtool: 'source-map',

        entry: {
            main: '../src/views/index.js',
            vendor:[
                'react',
                'react-dom',
                'react-router-dom'
            ]
        },

        output: {
            path: __dirname+"/../dist/js/",
            filename: "[name].min.js",
            chunkFilename: "[id].[hash].bundle.js",
            sourceMapFilename: "[file].map"
        },


        module: {
            rules: [
                {
                    test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx

                    loader: 'babel-loader',

                    query:{
                        "presets": [
                            ["es2017"],
                            //Webpack understands the native import syntax, and uses it for tree shaking

                            "react"
                            //Transpile React components to JS
                        ],
                        "plugins": [
                            ["transform-class-properties", { "spec": true }]
                        ]
                    },

                    exclude: [
                        /node_modules/,
                    ],
                },
                
                

                {test: /\.css$/, loader: "style-loader!css-loader"},
              
                {test: /\.(graphql|gql)$/, exclude: /node_modules/, loader: 'graphql-tag/loader'},
                
                {test: /\.less$/, loader: "style-loader"},

                {
                    test: /\.(jpe?g|png|gif)$/,
                    loader: 'file-loader',
                    query:{
                        name: 'assets/img/[name].[ext]'
                    }
                }
            ]

        },


        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],

        stats: "minimal",

        performance: {
            hints: false
        }
    }
};