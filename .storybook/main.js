/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require('path');

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
        {
            name: '@storybook/addon-styling-webpack',

            options: {
                rules: [
                    {
                        test: /\.css$/,
                        sideEffects: true,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    implementation: require.resolve('postcss'),
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config, { configType }) => {
        // `configType` 有 'DEVELOPMENT' 或 'PRODUCTION' 两个值
        // 'PRODUCTION' 是用于 build storybook 静态文件的默认模式

        // 添加别名
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'), // 调整为你的路径别名实际指向的目录
        };

        // 返回新的配置
        return config;
    },
};
export default config;
