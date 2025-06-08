import {sanityClient} from "@/services/sanity/sanity-client";

const SLUG_QUERY = `
        *[_type == "project" && slug.current == $slug][0] {
          "title": title,
          "description": {
            "en": description.en,
            "it": description.it
          },
          "slug": slug.current,
          "thumbnail": {
            "url": thumbnail.asset->url,
            "title": {
              "en": thumbnail.title.en,
              "it": thumbnail.title.it
            },
            "alt": {
              "en": thumbnail.alt.en,
              "it": thumbnail.alt.it
            }
          },
          "category": projectCategory->title,
          "content": {
            "en": content.en[]{
              ...,
              _type == "reference" => {
                "image": {
                  "asset": @->image.asset,
                  "alt": @->alt.en,
                  "title": @->title.en
                }
              }
            },
            "it": content.it[]{
              ...,
              _type == "reference" => {
                "image": {
                  "asset": @->image.asset,
                  "alt": @->alt.it,
                  "title": @->title.it
                }
              }
            }
          },
          "year": year,
          "client": client,
          "frameworkLibraries": frameworkLibraries,
          "design": design{
            "app": designApp,
            "url": url
          },
          "code": code{
            "remote": remote,
            "url": url
          }
        }`;

export default async function getProjectBySlug (slug) {
    if (!slug) {
        throw new Error("Slug is required");
    }

    try {
        const project = await sanityClient.fetch(SLUG_QUERY, {slug});

        if (!project) {
            throw new Error("Project not found");
        }

        return project;
    } catch (error) {
        console.error("Error fetching project:", error);
        throw error;
    }
}