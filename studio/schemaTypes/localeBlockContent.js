import {defineType, defineField} from "sanity";

const blockType = {
    type: "block",
    styles: [{title: "Normal", value: "normal"}],
    lists: [{title: "Bullet", value: "bullet"}],
    marks: {
        decorators: [
            {title: "Bold", value: "strong"},
            {title: "Italic", value: "em"}
        ],
        annotations: [
            {
                name: "link",
                type: "object",
                title: "URL",
                fields: [{name: "href", type: "url", title: "Link URL"}]
            }
        ]
    }
};

export default defineType ({
    name: "localeBlockContent",
    type: "object",
    fields: [
        defineField({
            name: "en", 
            title: "English", 
            type: "array", 
            of: [
                blockType,
                {
                    type: 'reference',
                    title: 'Shared Image',
                    to: [{type: 'sharedImages'}]
                }

            ], 
            validation: (Rule) => Rule.required().error("English is required")
        }),
        defineField({
            name: "it", 
            title: "Italiano", 
            type: "array", 
            of: [
                blockType,
                {
                    type: 'reference',
                    title: 'Shared Image',
                    to: [{type: 'sharedImages'}]
                }
            ], 
            validation: (Rule) => Rule.required().error("Italian is required")
        })
    ]
});