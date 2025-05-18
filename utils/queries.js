export const GET_PROJECT_BY_SLUG = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    slug,
    thumbnail,
    content,
    "metadata": {
      "category": projectCategory->title,
      year,
      client,
      frameworkLibraries,
      design {
        designApp,
        url
      },
      code {
        remote,
        url
      }
    },
    images[] {
      image,
      alt
    }
  }
`;

export const GET_GALLERY = `
  *[_type == "gallery"] {
    year,
    "thumbnail": images[0].image,
    "thumbnailAlt": images[0].alt,
    "images": images
  }
`;