import ListBookMark from './index';
import { Providers } from '@/app/(workspace)/providers';

export default {
    title: 'components/ListBookMark',
    component: ListBookMark,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};
export const Switch = {
    render: function () {
        return (
            <Providers className="flex">
                <ListBookMark></ListBookMark>
            </Providers>
        );
    },
};
