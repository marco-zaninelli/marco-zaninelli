import { useRouter } from "next/router";
import { useCallback } from "react";

export default function LocaleSwitcher({className}) {
    const router = useRouter();
    const { locale, locales, asPath } = router;

    // Determine next locale (toggle between available locales)
    const nextLocale = locales?.find((l) => l !== locale) || locale;

    const switchLocale = useCallback(() => {
        // Push to the same path, but with the new locale
        router.push(asPath, asPath, { locale: nextLocale });
    }, [router, asPath, nextLocale]);

    return (
        <button onClick={switchLocale} className={className}>
            {nextLocale.toUpperCase()}
        </button>
    );
}
