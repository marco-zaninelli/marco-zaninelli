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
            description: "The name of your project. This will be displayed as the main heading and will also be used to generate the URL-friendly slug.",
            validation: (Rule) => Rule
                .required()
                .min(2).warning("Title should be at least 2 characters")
                .max(100).warning("Title should be less than 100 characters")
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "A URL-friendly unique identifier that will be used in the website URL. Click \"Generate\" to create from title.",
            options: {source: "title.en", maxLength: 96},
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "localeText",
            description: "Meta description for SEO. Aim for 50-160 characters for best results.",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            description: "A preview image for the project. This will be used in the project list and in the project page.",
            options: {hotspot: true},
            fields: [
                defineField({
                    name: "title",
                    title: "Title",
                    type: "localeString",
                    description: "Title for SEO and accessibility.",
                    validation: (Rule) => Rule.required().error("Title is required for accessibility")
                }),
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "localeString",
                    description: "Important for SEO and accessibility. Describe the image for screen readers and search engines.",
                    validation: (Rule) => Rule.required().error("Alt text is required for accessibility")
                })
            ],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "projectCategory",
            title: "Project Category",
            type: "reference",
            description: "Select the primary category that best describes your project. This helps organize and filter projects by type.",
            to: [{type: "projectCategory"}],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "localeBlockContent",
            description: "A brief overview of your project and its key features.",
        }),
        defineField({
            name: "year",
            title: "Year",
            type: "number",
            description: "The year the project was completed.",
            validation: (Rule) =>
                Rule.min(1900).max(new Date().getFullYear()).warning(
                    "Enter a valid year"
                )
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
            description: "The name of the client or agency that provided the project.",
        }),
        defineField({
            name: "frameworkLibraries",
            title: "Framework and Libraries",
            type: "array",
            description: "Key technologies and tools used in the project's development.",
            of: [{type: "string"}],
            validation: (Rule) => Rule
                .unique() // No duplicate entries
                .min(1).warning("Add at least one framework/library")
                .max(20).warning("Too many frameworks listed")
        }),
        defineField({
            name: "design",
            title: "Design",
            type: "object",
            description: "The primary software used for the project's design work.",
            fields: [
                defineField({
                    name: "designApp",
                    title: "Design App",
                    type: "string"
                }),
                defineField({
                    name: "url",
                    title: "Design URL",
                    type: "url",
                    validation: (Rule) => Rule
                        .uri({scheme: ["http", "https"]})
                        .warning("Please enter a valid URL")
                })
            ],
            validation: (Rule) => Rule.custom((fields) => {
                if (fields?.designApp && !fields?.url) {
                    return "Please provide a URL if you specify a design app";
                }
                if (!fields?.designApp && fields?.url) {
                    return "Please specify a design app if you provide a URL";
                }
                return true;
            })
        }),
        defineField({
            name: "code",
            title: "Code",
            type: "object",
            description: "The platform where the project's source code is hosted.",
            fields: [
                defineField({
                    name: "remote",
                    title: "Remote",
                    type: "string"
                }),
                defineField({
                    name: "url",
                    title: "Code URL",
                    type: "url",
                    validation: (Rule) => Rule
                        .uri({scheme: ["http", "https"]})
                        .warning("Please enter a valid URL")
                })
            ],
            validation: (Rule) => Rule.custom((fields) => {
                if (fields?.remote && !fields?.url) {
                    return "Please provide a URL if you specify a remote";
                }
                if (!fields?.remote && fields?.url) {
                    return "Please specify a remote if you provide a URL";
                }
                return true;
            })
        })
    ],
    preview: {
        select: {
            title: "title.en",
            media: "thumbnail"
        }
    }
});