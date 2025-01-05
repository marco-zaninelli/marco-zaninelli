import {defineField, defineType} from "sanity";
import {v4 as uuidv4} from "uuid";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
            name: "year",
            title: "Year",
            type: "number",
            validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).warning("Enter a valid year").required()
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string"
                        }),
                        defineField({
                            name: "generatedId",
                            title: "Generated ID",
                            type: "string",
                            readOnly: true,
                            initialValue: () => uuidv4()
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image"
                        }),
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string",
                            validation: (Rule) => Rule.max(150).warning("Alt text should be under 150 characters")
                        }),
                        defineField({
                            name: "metadata",
                            title: "Metadata",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "copyright",
                                    title: "Copyright",
                                    type: "string",
                                    initialValue: "cc",
                                    options: {
                                        list: [
                                            {title: "Rights-managed", value: "rm"},
                                            {title: "Royalty-Free", value: "rf"},
                                            {title: "CC - Creative Commons", value: "cc"},
                                            {title: "Public domain", value: "pd"}
                                        ]
                                    }
                                }),
                                defineField({
                                    name: "camera",
                                    title: "Camera",
                                    type: "string"
                                }),
                                defineField({
                                    name: "lens",
                                    title: "Lens",
                                    type: "string"
                                }),
                                defineField({
                                    name: "shutterSpeed",
                                    title: "Shutter Speed",
                                    type: "string"
                                }),
                                defineField({
                                    name: "iso",
                                    title: "ISO",
                                    type: "string"
                                }),
                                defineField({
                                    name: "aperture",
                                    title: "Aperture",
                                    type: "string"
                                })
                            ]
                        })
                    ]
                }
            ],
            options: {
                sortable: true
            }
        })
    ],

    preview: {
        select: {
            title: "year",
            firstImage: "images[0].image"
        }
    }
});