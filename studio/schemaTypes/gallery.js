import {defineField, defineType} from "sanity";
import {v4 as uuidv4} from "uuid";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    description: "A collection of photographs with their technical details and metadata",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "localeString",
            description: "A descriptive title for the photograph",
            validation: (Rule) => Rule
                .required().error("A title is required")
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: "Upload the photograph.",
            options: {
                hotspot: true,
                metadata: ["exif", "location", "lqip", "palette"],
            },
            validation: (Rule) => Rule.required().error("An image is required")
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "localeString",
            description: "Important for SEO and accessibility. Describe the image for screen readers and search engines.",
            validation: (Rule) => Rule
                .required().error("Alternative text is required")
        }),
        defineField({
            name: "copyright",
            title: "Copyright",
            type: "string",
            description: "Specify the copyright status of the image",
            initialValue: "cc",
            options: {
                list: [
                    {title: "Rights-managed", value: "rm"},
                    {title: "Royalty-Free", value: "rf"},
                    {title: "CC - Creative Commons", value: "cc"},
                    {title: "Public domain", value: "pd"}
                ]
            },
            validation: (Rule) => Rule.required().error("Select a copyright status")
        }),
        defineField({
            name: "camera",
            title: "Camera",
            type: "string",
            description: "Camera model used to take the photograph",
            initialValue: "Fujifilm X-T5",
        }),
        defineField({
            name: "lens",
            title: "Lens",
            type: "string",
            description: "Lens used for the photograph",
        }),
        defineField({
            name: "shutterSpeed",
            title: "Shutter Speed",
            type: "string",
            description: "Shutter speed value (e.g., '1/1000', '1/60')",
            validation: (Rule) => Rule.regex(/^1\/[0-9]+$|^[0-9]+$/).warning("Format should be like '1/1000' or '1'")
        }),
        defineField({
            name: "iso",
            title: "ISO",
            type: "string",
            description: "ISO sensitivity value",
            validation: (Rule) => Rule
                .regex(/^[0-9]+$/)
                .warning("ISO should be a number")
        }),
        defineField({
            name: "aperture",
            title: "Aperture",
            type: "string",
            description: "Aperture value (e.g., 'f/1.8', 'f/2.8')",
            validation: (Rule) => Rule
                .regex(/^f\/[0-9.]+$/)
                .warning("Format should be like 'f/1.8'")
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
            description: "Date when the photograph was taken",
            validation: (Rule) => Rule
                .required()
                .max(new Date().toISOString().split('T')[0])
                .warning("Date cannot be in the future")
        }),
        defineField({
            name: "generatedId",
            title: "Generated ID",
            type: "string",
            description: "Automatically generated unique identifier",
            readOnly: true,
            hidden: true,
            initialValue: () => uuidv4()
        }),
    ],
    preview: {
        select: {
            title: 'title.en',
            media: 'image'
        },
    },
});