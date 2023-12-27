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
                type: 'select',
            },
            table: {
                defaultValue: {
                    summary: 'sun',
                },
            },
            options: ['sun', 'moon'],
            description: 'icon 类型',
        },
        color: {
            table: {
                defaultValue: {
                    summary: 'currentColor',
                },
            },
            description: 'icon 颜色',
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
