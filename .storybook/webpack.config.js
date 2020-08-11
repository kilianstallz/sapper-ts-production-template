const path = require('path');

module.exports = ({ config, mode }) => {
    const svelteLoader = config.module.rules.find(
        r => r.loader && r.loader.includes('svelte-loader'),
    );
    svelteLoader.options = {
        ...svelteLoader.options,
        emitCss: true,
        hotReload: false,
    };

    config.module.rules.push(
      // {
      //    test: /\.svg$/,
      //      loaders: ['raw-loader'],
      //      include: path.resolve(__dirname,'../')
      // },
        {
            test: /\.css$/,
            loaders: [
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: './.storybook/',
                        },
                    },
                },
            ],

            include: path.resolve(__dirname, '../src/'),
        },
        {
            test: /\.stories\.js?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            include: [path.resolve(__dirname, '../src')],
            enforce: 'pre',
        }
    );

    config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test( String( data.test ) ))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      return data;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: [
          { loader: 'svg-inline-loader' }
        ]
    });

    return config;
};
