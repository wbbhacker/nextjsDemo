import '../src/app/(workspace)/globals.css';
/** @type { import('@storybook/react').Preview } */

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story, ctx) => {
            return <Story></Story>;
        },
    ],
};

export default preview;
