import {defineField, defineType} from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(3).warning("Title is required and should be at least 3 characters long")
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "projectCategory",
            title: "Project Category",
            type: "reference",
            to: {type: "projectCategory"},
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                    ],
                    lists: [
                        {title: 'Bullet', value: 'bullet'},
                    ],
                    marks: {
                        decorators: [
                            {title: 'Bold', value: 'strong'},
                            {title: 'Italic', value: 'em'},
                        ],
                        annotations: [
                            {
                                name: 'link',
                                title: 'URL',
                                type: 'object',
                                fields: [
                                    {
                                        name: 'href',
                                        title: 'URL',
                                        type: 'url',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        }),
        defineField({
            name: "year",
            title: "Year",
            type: "number",
            validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).warning("Enter a valid year")
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string"
        }),
        defineField({
            name: "frameworkLibraries",
            title: "Framework and Libraries",
            type: "array",
            of: [{
                type: "string"
            }]
        }),
        defineField({
            name: "design",
            title: "Design",
            type: "object",
            fields: [
                defineField({
                    name: "designApp",
                    title: "Design Application",
                    type: "string"
                }),
                defineField({
                    name: "url",
                    title: "Design URL",
                    type: "url"
                })
            ]
        }),
        defineField({
            name: "code",
            title: "Code",
            type: "object",
            fields: [
                defineField({
                    name: "remote",
                    title: "Remote",
                    type: "string"
                }),
                defineField({
                    name: "url",
                    title: "Code URL",
                    type: "url"
                })
            ]
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    defineField({
                        name: "image",
                        title: "Image",
                        type: "image"
                    }),
                    defineField({
                        name: "alt",
                        title: "Alt Text",
                        type: "string"
                    })
                ]
            }]
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "thumbnail"
        }
    }
});
