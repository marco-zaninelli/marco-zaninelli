import Logo from "@/public/img/Logo";

export default function Background () {

    return (<>
            {/* Static background */}
            <div className="fixed inset-0 bg-black flex items-center justify-center z-[-2]">
                <div className="relative w-1/2 text-[#115740]">
                    <Logo className="h-auto w-full opacity-40" />
                </div>
            </div>
            <div
                className="fixed inset-0 bg-no-repeat bg-cover opacity-10 z-[-1]"
                style={{backgroundImage: "url('/img/noise.svg')"}}
            />
        </>);
}