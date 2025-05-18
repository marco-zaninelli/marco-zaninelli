import imageUrlBuilder from "@sanity/image-url";
import {sanityClient} from "@/services/sanity/sanity-client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source);
}
