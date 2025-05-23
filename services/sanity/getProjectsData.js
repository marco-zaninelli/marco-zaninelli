import {sanityClient} from "@/services/sanity/sanity-client";

const PROJECTS_QUERY = `
          *[_type == "project"] | order(year desc) {
            "title": title,
            "description": {
              "en": description.en,
              "it": description.it,
            },
            "slug": slug.current,
            "thumbnail": thumbnail,
            "category": projectCategory->title
          }
        `;

export default async function getProjectsData () {
    try {
        const data = await sanityClient.fetch(PROJECTS_QUERY);

        // Content for the project page
        const mainData = data.map(project => ({
            thumbnail: project.thumbnail,
            slug: project.slug,
            description: project.description
        }));

        // Content for table
        const gridData = data.map(project => ({
            title: project.title,
            category: project.category
        }));

        return {
            mainData,
            gridData
        };
    } catch (error) {
        console.error("Error fetching projects data:", error);
        return {
            mainData: [],
            gridData: []
        };
    }
}