import {useRouter} from "next/router";
import {useCallback} from "react";
import {supportedLanguages, defaultLocale} from "@/lib/i18n-config";

export default function LocaleSwitcher () {
    const {asPath, push} = useRouter();

    const currentLang = supportedLanguages.find(lang => asPath.startsWith(`/${lang}`)) || defaultLocale;
    const nextLang = supportedLanguages.find(lang => lang !== currentLang) || defaultLocale;

    const switchLocale = useCallback(() => {
        const newPath = asPath.startsWith(`/${currentLang}`)
            ? asPath.replace(`/${currentLang}`, `/${nextLang}`)
            : `/${nextLang}${asPath}`;
        push(newPath);
    }, [asPath, push, currentLang, nextLang]);

    return (
        <button onClick={switchLocale}>
            {nextLang.toUpperCase()}
        </button>
    );
}
