import ThemeSwitch from './index';

import { Providers } from '@/app/(workspace)/providers';

import { useGlobals } from '@storybook/addons';

export default {
    title: 'components/ThemeSwitch',
    component: ThemeSwitch,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};
export const Switch = {
    render: function () {
        const [{ backgrounds }, updateGlobals] = useGlobals();

        const changeBackground = (newBackground) => {
            const newBackgroundColor = {
                value: newBackground === 'dark' ? '#333333' : '#ffffff',
            };

            updateGlobals({
                backgrounds: newBackgroundColor,
            });
        };
        return (
            <Providers className="flex">
                <ThemeSwitch onChange={changeBackground}></ThemeSwitch>
            </Providers>
        );
    },
};
