import Icons from './index';
export default {
    title: 'components/Icons',
    component: Icons,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: {
                type: 'radio',
            },
            options: ['sun', 'moon'],
        },
    },
};
export const SunCurrentColor = {
    args: {
        name: 'sun',
        color: 'currentColor',
    },
};

export const MoonCurrentColor = {
    args: {
        name: 'moon',
        color: 'currentColor',
    },
};

export const MoonRed = {
    args: {
        name: 'moon',
        color: 'red',
    },
};
