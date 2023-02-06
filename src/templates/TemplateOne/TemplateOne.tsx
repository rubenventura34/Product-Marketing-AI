import React from "react";
import { RegenerateSection } from "../../components/RegenerateSection";
import { ReviewItem } from "../../components/ReviewItem";
import "./styles/TemplateOne.css";
interface IHero {
  title: string;
  description: string;
}
interface IFeature {
  title: string;
  description: string;
}
export interface TemplateOneInterface {
  hero: IHero;
  features: IFeature[];
  reviews: string[];
  image?: string;
  breakpoint?: string;
  onRegenerateSection?: (section: string) => void;
}

const TemplateOne: React.FC<TemplateOneInterface> = ({
  breakpoint = "sm",
  hero,
  features,
  reviews,
  onRegenerateSection,
  image,
}) => {
  return (
    <main className="relative bg-white dark:bg-gray-800">
      <header
        className={`z-30 flex items-center w-full h-24 ${
          breakpoint === "sm" && "h-32"
        }`}>
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
            Product.com
          </div>
          <div className="flex items-center">
            <nav
              className={`items-center  ${
                breakpoint === "sm" && "hidden"
              } text-lg text-gray-800 uppercase font-sen dark:text-white  ${
                breakpoint === "lg" && "flex"
              }`}>
              <a href="#" className="flex px-6 py-2">
                Home
              </a>
              <a href="#" className="flex px-6 py-2">
                Watch
              </a>
              <a href="#" className="flex px-6 py-2">
                Product
              </a>
              <a href="#" className="flex px-6 py-2">
                Contact
              </a>
              <a href="#" className="flex px-6 py-2">
                Carrer
              </a>
            </nav>
            <button
              className={`flex flex-col ml-4  ${
                breakpoint === "lg" && "hidden"
              }`}>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div
            className={`landing-section relative z-20 flex flex-col  ${
              breakpoint === "sm" && "w-100"
            }  ${breakpoint === "lg" && "w-2/5"}`}>
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1
              className={`flex flex-col text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue  ${
                breakpoint === "sm" && "text-6x1"
              } dark:text-white`}>
              {hero.title}
              {/* <span
                className={`text-5xl  ${breakpoint === "sm" && "text-7x1"}`}>
                Time
              </span> */}
            </h1>
            <p
              className={`text-sm text-gray-700  ${
                breakpoint === "sm" && "text-base"
              } dark:text-white`}>
              {hero.description}
            </p>
            <div className="flex mt-8 justify-center">
              <a
                href="#"
                className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                Buy it
              </a>
            </div>

            <RegenerateSection
              onClick={() => onRegenerateSection && onRegenerateSection("hero")}
            />
          </div>
          <div
            className={`relative ${breakpoint === "sm" && "block"}  ${
              breakpoint === "sm" && "w-100"
            }  ${breakpoint === "lg" && "w-3/5"}`}>
            <img
              src={image}
              className={`max-w-xs m-auto  ${
                breakpoint === "md" && "max-w-sm"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Features</h1>
        <div
          className={` relative landing-section flex-wrap justify-center gap-4 text-center flex`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`px-4 py-4 h-fit mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800`}
              style={{ width: 300 }}>
              <div className={`flex-shrink-0`}>
                <div
                  className={`flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md`}>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className={`w-6 h-6`}
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>
              </div>
              <h3
                className={`py-4 text-2xl font-semibold text-gray-700 ${
                  breakpoint === "sm" && "text-xl"
                } dark:text-white`}>
                {feature.title}
              </h3>
              <p className={`py-4 text-gray-500 text-md dark:text-gray-300`}>
                {feature.description}
              </p>
            </div>
          ))}
          <RegenerateSection
            onClick={() =>
              onRegenerateSection && onRegenerateSection("features")
            }
          />
        </div>
        <br />
        <h1>Reviews</h1>
        <div
          className={`relative landing-section masonry ${
            breakpoint === "sm" ? "masonry-sm" : "masonry-md"
          } `}>
          {reviews.map((review, idx) => (
            <ReviewItem key={idx} user="Pedro">
              {review}
            </ReviewItem>
          ))}
          <RegenerateSection
            onClick={() =>
              onRegenerateSection && onRegenerateSection("reviews")
            }
          />
        </div>
      </div>
      <footer className={`bg-gray-900`}>
        <div className={`container mx-auto px-8`}>
          <div
            className={`w-full flex flex-col ${
              breakpoint === "md" && "flex-row"
            } py-6`}>
            <div className={`flex-1 mb-6 text-white`}>
              <a
                className={`text-pink-600 no-underline hover:no-underline font-bold text-2xl ${
                  breakpoint === "lg" && "text-4xl"
                }`}
                href="#">
                PRODUCT.COM
              </a>
            </div>
            <div className={`flex-1`}>
              <p
                className={`uppercase text-gray-500 ${
                  breakpoint === "md" && "mb-6"
                }`}>
                Links
              </p>
              <ul className={`list-reset mb-6`}>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    FAQ
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Help
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className={`flex-1`}>
              <p
                className={`uppercase text-gray-500 ${
                  breakpoint === "md" && "mb-6"
                }`}>
                Legal
              </p>
              <ul className={`list-reset mb-6`}>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Terms
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className={`flex-1`}>
              <p
                className={`uppercase text-gray-500 ${
                  breakpoint === "md" && "mb-6"
                }`}>
                Social
              </p>
              <ul className={`list-reset mb-6`}>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Facebook
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Linkedin
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className={`flex-1`}>
              <p
                className={`uppercase text-gray-500 ${
                  breakpoint === "md" && "mb-6"
                }`}>
                Company
              </p>
              <ul className={`list-reset mb-6`}>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Official Blog
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    About Us
                  </a>
                </li>
                <li
                  className={`mt-2 inline-block mr-2 ${
                    breakpoint === "md" && "block"
                  } ${breakpoint === "md" && "mr-0"}`}>
                  <a
                    href="#"
                    className={`no-underline hover:underline text-gray-200 hover:text-pink-500`}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default TemplateOne;
