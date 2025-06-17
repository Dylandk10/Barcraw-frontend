import beers from "../assets/Beerss.jpg";
import cocktals from "../assets/cocktails.jpg";

export default function HomePage() {
  return (
    <div className="w-full pt-16">
      {/* hero image and great message*/}
      <div className="flex justify-center items-center w-full h-96 bg-hero-image bg-cover bg-no-repeat relative">
        {/* Overlay container */}
        <div className="bg-black bg-opacity-85 text-white text-center p-8 rounded-lg max-w-3xl">
          <h1 className="text-6xl font-mono mb-4">Welcome to BarCrawl</h1>
          <span className="text-md">The next social app for a night out!</span>
        </div>
      </div>

      {/* What is barcrawl section*/}
      <div className="p-12">
        <h3 className="text-3xl text-center font-mono pb-10">
          What is BarCrawl?
        </h3>

        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 order-1 sm:order-1 mb-4 text-center p-10">
            <img src={beers} />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4 order-2 sm:order-2 text-center p-10 border-2 border-solid rounded-lg">
            <h2 className="text-2xl">More then just an App!</h2>
            <p className="text-lg pt-2">
              BarCrawl is a social app where friends can get together and track
              each bar they went to, share pictures, and find cool new bars and
              restraunts to try. The goal is simple, we want you to enjoy your
              night out on the town! Let us help track the bars and recommend
              new ones on your way around. For people looking for extra fun, we
              also offer a mapping feature to see the route you took as you
              ventured through town!
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4 order-4 sm:order-3 text-center p-10 border-2 border-solid rounded-lg">
            <h2 className="text-2xl">Ideas?!</h2>
            <p className="text-lg pt-2">
              Why not track a night out and capture pictures along the way. To
              qualify for an offical barcrawl the user must complete the
              following. They must log the bar into one of their destinations
              and take a pciture. The pciture serves not only as a fun memory
              but as proof that you did stop at the listed bar. Also, it's jsut
              fun! Make surre to track each bar using are automated search, then
              at the end of the night submit the crawl and see images and a map
              of your night out!
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w1/2 mb-4  order-3 sm:order-4 text-center p-10">
            <img src={cocktals} />
          </div>
        </div>
      </div>

      {/** Get involved section */}
      <div className="p-12 w-full text-center bg-sky-50">
        <h2 className="text-5xl font-mono">Get Involved</h2>
        <p className="p-9">
          Want to get involved and try the new social media buzz? Click below to
          sign up or if you'd like to research other bars and areas check out
          the Bar's page.
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Sign Up
          </span>
        </button>
      </div>

      {/** How to use the App? */}

      <div className="p-12 w-full">
        <h3 className="text-3xl text-center font-mono pb-10">Instructions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 rounded-lg">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold">Step One</h3>
              <p className="text-sm text-gray-600">
                Sign up with an email and password to create your profile.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold">Step Two</h3>
              <p className="text-sm text-gray-600">
                Plan a night out and remember to use our Bar's search to find
                local bars and restaurants near you.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold">Step Three</h3>
              <p className="text-sm text-gray-600">
                Go out and have some fun! But remember to log the bar into the
                destination and take a picture!
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold">Step Four</h3>
              <p className="text-sm text-gray-600">
                Now that the bar is logged and verified with a picture it's time
                to move onto the next location!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
