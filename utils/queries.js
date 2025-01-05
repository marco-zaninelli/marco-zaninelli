export const GET_PROJECTS = `
  *[_type == "project"] {
    title,
    slug,
    thumbnail,
    "category": projectCategory->title
  }
`;

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

export const GET_IMAGES_BY_YEAR = `
  *[_type == "gallery" && year == $year][0] {
    "images": images[].image,
    "altTexts": images[].alt,
    "generatedIds": images[].generatedId
  }
`

export const GET_IMAGE_BY_ID = `
  *[_type == "gallery" && images[]._id in [$id]][0] {
    images[generatedId == $id][0] {
      title,
      image,
      alt,
      metadata
    }
  }
`