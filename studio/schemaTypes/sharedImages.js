import {defineType} from "sanity";
import {v4 as uuidv4} from "uuid";

export default defineType({
    name: "sharedImages",
    title: "Shared Images",
    type: "document",
        fields: [
            {
                name: "title",
                title: "Title",
                type: "localeString",
                validation: (Rule) => Rule.required().error("Title is required for SEO")
            },
            {
                name: "image",
                title: "Image",
                type: "image",
                options: {
                    hotspot: true
                }
            },
            {
                name: "alt",
                title: "Alt Text",
                type: "localeString",
                validation: (Rule) => Rule.required().error("Title is required for SEO")
            },
            {
                name: "imageId",
                type: "string",
                title: "Image ID",
                initialValue: () => uuidv4(),
                readOnly: true,
                hidden: true,
            },
        ],
        preview: {
            select: {
                title: 'title.en',
                media: 'image'
            },
        },
    }
);