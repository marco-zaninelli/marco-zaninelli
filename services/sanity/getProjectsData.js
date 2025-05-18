import {sanityClient} from "@/services/sanity/sanity-client";

const PROJECTS_QUERY = `
          *[_type == "project"] {
            title,
            slug,
            thumbnail,
            "category": projectCategory->title
          }
        `

export default async function getProjectsData () {
    try {
        const data = await sanityClient.fetch(PROJECTS_QUERY);

        // Content for the project page
        const visualData = data.map(project => ({
            thumbnail: project.thumbnail,
            slug: project.slug
        }));

        // Content for table
        const textData = data.map(project => ({
            title: project.title,
            category: project.category
        }));

        return {
            visualData,
            textData
        };
    } catch (error) {
        console.error("Error fetching projects data:", error);
        return {
            visualData: [],
            textData: []
        };
    }
}