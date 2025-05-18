import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'localeString',
    title: 'Localized string',
    type: 'object',
    fields: [
        defineField({
            name: 'en',
            title: 'English',
            type: 'string',
            validation: (Rule) => Rule.required().error('English is required'),
        }),
        defineField({
            name: 'it',
            title: 'Italiano',
            type: 'string',
            validation: (Rule) => Rule.required().error('Italian is required'),
        }),
    ],
});
