import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'localeText',
    title: 'Localized text',
    type: 'object',
    fields: [
        defineField({
            name: 'en',
            title: 'English',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule
                .required()
                .min(50).warning('Description should be at least 50 characters for better SEO')
                .max(160).error('Description should not exceed 160 characters for optimal SEO')
        }),
        defineField({
            name: 'it',
            title: 'Italiano',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule
                .required()
                .min(50).warning('La descrizione dovrebbe essere di almeno 50 caratteri per un migliore SEO')
                .max(160).error('La descrizione non deve superare i 160 caratteri per un SEO ottimale')
        }),
    ],
});