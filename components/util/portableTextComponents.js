import Image from "next/image";
import {urlFor} from "@/services/sanity/image-url";
import ExternalTextLink from "@/components/general/ExternalTextLink";

export const portableTextComponents = {
    types: {
        reference: ({value}) => {
            if (value.image) {
                return (
                    <div className="my-8">
                        <Image
                            src={urlFor(value.image.asset).url()}
                            alt={value.image.alt || ""}
                            width={800}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                );
            }
            return null;
        }
    },
    block: {
        normal: ({children}) => <p className="mb-4">{children}</p>
    },
    list: {
        bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-0">{children}</ul>
    },
    marks: {
        link: ({children, value}) => {
            return (
                <ExternalTextLink href={value?.href}>
                    {children}
                </ExternalTextLink>
            );
        }
    }
};