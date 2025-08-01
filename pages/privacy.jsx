import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import CollapsibleSection from "@/components/general/CollapsibleSection";

export default function Privacy() {
    const { locale } = useRouter();
    const isEnglish = locale === "en";

    function LocalList({ children }) {
        return <span className={"ml-4 max-w-full py-1"}>▪ {children}</span>;
    }

    return (
        <>
            <Head>
                <title>{"Privacy & Cookies"}</title>
            </Head>
            <Layout fixed={false}>
                <main className="container mx-auto max-w-screen-lg mb-6 w-full">
                    <div className={"mx-auto"}>
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-4xl font-mono">
                                {isEnglish ? "Privacy Policy" : "Privacy page"}
                            </h1>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("cookie-consent");
                                    alert(
                                        isEnglish
                                            ? "Cookies have been reset. Please refresh or navigate to continue."
                                            : "Cookies have been reset. Please refresh or navigate to continue."
                                    );
                                    window.location.reload();
                                }}
                                className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-300 hover:text-black text-sm font-medium transition-all duration-200"
                            >
                                {isEnglish ? "Reset cookies" : "Reset cookies"}
                            </button>
                        </div>

                        <CollapsibleSection title={isEnglish ? "Introduction" : "Introduzione"}>
                            {isEnglish
                                ? `This Privacy and Cookie Policy describes how Marco Zaninelli (“we” or “our”) collects, uses, and protects personal data when you visit the website www.marco.zaninelli.me (“Site”). We are committed to safeguarding your privacy and handling your data in accordance with the General Data Protection Regulation (GDPR – EU Regulation 2016/679).`
                                : `La presente Informativa Privacy e Cookie descrive come Marco Zaninelli (“noi” o “nostro”) raccoglie, utilizza e protegge i dati personali quando visiti il sito www.marco.zaninelli.me (“Sito”). Ci impegniamo a tutelare la tua privacy e a trattare i tuoi dati in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR – Regolamento UE 2016/679).`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Data Controller" : "Titolare del Trattamento"}>
                            <strong>{isEnglish ? "Controller:" : "Titolare:"}</strong> Marco Zaninelli<br />
                            <strong>{isEnglish ? "Contact:" : "Contatto:"}</strong> marco@zaninelli.me<br />
                            <strong>{isEnglish ? "Website:" : "Sito web:"}</strong> www.marco.zaninelli.me<br />
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Data Collected" : "Dati Raccolti"}>
                            {isEnglish
                                ? `When you visit the Site, we do not collect directly identifying data (such as name or email). We collect only analytical data (e.g., pages visited, time spent, browser type) via Google Analytics to understand site traffic and improve content. These data are aggregated and do not identify you personally.`
                                : `Quando visiti il Sito, non raccogliamo dati che ti identificano direttamente (come nome o email). Raccogliamo esclusivamente dati analitici (es. pagine visitate, tempo di permanenza, tipo di browser) tramite Google Analytics per comprendere il traffico del sito e migliorare i contenuti. Questi dati sono aggregati e non consentono di identificarti personalmente.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Cookies and Similar Technologies" : "Cookie e Tecnologie Simili"}>
                            <h4>{isEnglish ? "What are Cookies?" : "Cosa sono i Cookie?"}</h4>
                            {isEnglish
                                ? `Cookies are small text files stored on your device when you visit a website. They are used for the proper functioning of the site and to provide insights into site usage.`
                                : `I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Servono al corretto funzionamento del sito e a fornire informazioni sull’uso del sito stesso.`}
                            <h4 className={"mt-3"}>{isEnglish ? "Types of Cookies Used" : "Tipologie di Cookie Utilizzati"}</h4>
                            <LocalList>
                                <strong>{isEnglish ? "Essential Cookies:" : "Cookie Essenziali:"}</strong> {isEnglish ? "Necessary for the Site's operation (e.g., security, page loading). Cannot be disabled." : "Necessari per il funzionamento del Sito (es. sicurezza, caricamento delle pagine). Non possono essere disabilitati."}
                            </LocalList>
                            <LocalList>
                                <strong>{isEnglish ? "Analytical Cookies (Non-Essential):" : "Cookie Analitici (Non Essenziali):"}</strong> {isEnglish ? "Used to analyze how visitors interact with the Site (Google Analytics). You can choose to disable them on your first visit to the Site." : "Utilizzati per analizzare come i visitatori interagiscono con il Sito (Google Analytics). Puoi scegliere di disabilitarli al primo accesso al Sito."}
                            </LocalList>
                            <h4 className={"mt-3"}>{isEnglish ? "Managing Cookies" : "Gestione dei Cookie"}</h4>
                            {isEnglish
                                ? `On your first visit, a banner allows you to accept or reject non-essential cookies. You can also manage cookies via your browser settings at any time.`
                                : `Al primo accesso, un banner ti consente di accettare o rifiutare i cookie non essenziali. Puoi inoltre gestire i cookie tramite le impostazioni del tuo browser in qualsiasi momento.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Third-Party Services" : "Servizi di Terze Parti"}>
                            <h4>{isEnglish ? "Google Analytics" : "Google Analytics"}</h4>
                            {isEnglish
                                ? `We use Google Analytics to measure traffic and performance. Collected data may include anonymized IP address, browser type, pages visited, and session duration. Google processes these data according to its Privacy Policy.`
                                : `Utilizziamo Google Analytics per misurare traffico e prestazioni. I dati raccolti possono includere l’indirizzo IP (anonimizzato), tipo di browser, pagine visitate e durata della sessione. Google elabora questi dati secondo la propria Informativa sulla Privacy.`}

                            <h4 className={"mt-3"}>{isEnglish ? "Sanity Studio (CMS)" : "Sanity Studio (CMS)"}</h4>
                            {isEnglish
                                ? `Sanity is used solely for content management. It does not collect personal data from visitors.`
                                : `Sanity viene utilizzato esclusivamente per la gestione dei contenuti. Non raccoglie dati personali dei visitatori.`}

                            <h4 className={"mt-3"}>{isEnglish ? "Hosting (Vercel)" : "Hosting (Vercel)"}</h4>
                            {isEnglish
                                ? `The Site is hosted on Vercel. Standard server logs may record anonymous information (e.g., IP address, browser type) for security and performance reasons.`
                                : `Il Sito è ospitato su Vercel. I log standard del server possono registrare informazioni anonime (es. indirizzo IP, tipo di browser) per motivi di sicurezza e prestazioni.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Data Sharing" : "Condivisione dei Dati"}>
                            {isEnglish
                                ? `We do not share or sell personal data to third parties. Data is used solely for analytics and site performance monitoring.`
                                : `Non condividiamo né vendiamo dati personali a terzi. I dati vengono utilizzati esclusivamente per analisi e monitoraggio delle prestazioni del sito.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Data Retention" : "Conservazione dei Dati"}>
                            {isEnglish
                                ? `Analytical data is retained according to Google Analytics' policy (currently up to 26 months) and is then deleted or anonymized.`
                                : `I dati analitici vengono conservati per il periodo previsto da Google Analytics (attualmente fino a 26 mesi) e successivamente eliminati o anonimizzati.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Data Subject Rights (GDPR)" : "Diritti dell’Interessato (GDPR)"}>
                            {isEnglish
                                ? `You have the right to:
                  ` : `Hai diritto a:`}
                            {isEnglish && <br />}
                            <LocalList>
                                {isEnglish
                                    ? "Request access to the data we hold about you."
                                    : "Richiedere l’accesso ai dati che conserviamo su di te."}
                            </LocalList>
                            <LocalList>
                                {isEnglish
                                    ? "Request correction or deletion of your data."
                                    : "Richiederne la rettifica o la cancellazione."}
                            </LocalList>
                            <LocalList>
                                {isEnglish
                                    ? "Withdraw consent to non-essential cookies at any time."
                                    : "Revocare il consenso ai cookie non essenziali in qualsiasi momento."}
                            </LocalList>
                            <LocalList>
                                {isEnglish
                                    ? "Lodge a complaint with the competent data protection authority."
                                    : "Presentare reclamo all’autorità di protezione dei dati competente."}
                            </LocalList>
                            {isEnglish
                                ? `To exercise your rights, contact us at marco@zaninelli.me.`
                                : `Per esercitare i tuoi diritti, contattaci a marco@zaninelli.me.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Security" : "Sicurezza"}>
                            {isEnglish
                                ? `We implement reasonable technical measures to protect your data from unauthorized access, loss, or misuse.`
                                : `Adottiamo misure tecniche ragionevoli per proteggere i tuoi dati da accessi non autorizzati, perdita o uso improprio.`}
                        </CollapsibleSection>

                        <CollapsibleSection title={isEnglish ? "Changes to This Notice" : "Modifiche a Questa Informativa"}>
                            {isEnglish
                                ? `We may update this notice periodically. Changes will be posted on this page with a new "Last Updated" date.`
                                : `Possiamo aggiornare questa informativa periodicamente. Le modifiche saranno pubblicate su questa pagina con una nuova data di “Ultimo aggiornamento”.`}
                        </CollapsibleSection>
                    </div>
                </main>
            </Layout>
        </>
    );
}
