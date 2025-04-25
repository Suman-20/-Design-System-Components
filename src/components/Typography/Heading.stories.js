import Heading from './Heading';
const meta = {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'select',
            options: [1, 2, 3, 4, 5, 6],
        },
        children: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Heading component supports levels from H1 to H6. Use appropriate levels for semantic HTML and accessibility.',
            },
        },
    },
};
export default meta;
export const H1 = {
    args: {
        level: 1,
        children: 'Heading Level 1',
    },
};
export const H2 = {
    args: {
        level: 2,
        children: 'Heading Level 2',
    },
};
export const H3 = {
    args: {
        level: 3,
        children: 'Heading Level 3',
    },
};
export const H4 = {
    args: {
        level: 4,
        children: 'Heading Level 4',
    },
};
export const H5 = {
    args: {
        level: 5,
        children: 'Heading Level 5',
    },
};
export const H6 = {
    args: {
        level: 6,
        children: 'Heading Level 6',
    },
};
