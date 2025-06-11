import beers from "../assets/Beerss.jpg";


export default function HomePage() {

    return (
        <div className="w-full pt-16">
            { /* hero image and great message*/}
            <div className="flex justify-center items-center w-full bg-hero-image bg-cover bg-no-repeat h-96">
                <h1 className="text-6xl text-center text-white font-mono bg-black bg-opacity-50 p-12"> Welcome to BarCrawl </h1>
            </div>

            <div className="p-12">
                <h3 className="text-3xl text-center font-mono">What is BarCrawl?</h3>

                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4 text-center p-10">
                        <img 
                            src={beers}
                        />
                    </div>
                    
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4 text-center p-10 border-2 border-solid rounded-lg"> 
                        <h2 className="text-2xl">More then just an App!</h2>
                        <p className="text-lg pt-2">
                            BarCrawl is a social app where friends can get together and track each bar they went to, share pictures, and find cool new
                            bars and restraunts to try. The goal is simple, we want you to enjoy your night out on the town! Let us help track the bars and recommend new ones on your way around.
                            For people looking for extra fun, we also offer a mapping feature to see the route you took as you ventured through town!
                         </p>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4 text-center p-10 border-2 border-solid rounded-lg"> 
                        <h2 className="text-2xl">More then just an App!</h2>
                        <p className="text-lg pt-2">
                            BarCrawl is a social app where friends can get together and track each bar they went to, share pictures, and find cool new
                            bars and restraunts to try. The goal is simple, we want you to enjoy your night out on the town! Let us help track the bars and recommend new ones on your way around.
                            For people looking for extra fun, we also offer a mapping feature to see the route you took as you ventured through town!
                         </p>
                    </div>
                </div>
            </div>

        </div>
    )
}