import React, { useState } from "react";
import Navbar from '../../Compunents/Navbar';
import { Link } from 'react-router-dom';
import Footer from "../../Compunents/Footer";

const Home = () => {



  const categories = [
    {
      title: "Healthcare",
      img :"/Frame 484.png",
      items: [
        { text: "Animal health", link: "/CategoriesDetail" },
        { text: "Pharmaceuticals", link: "/CategoriesDetail" },
        { text: "Public health", link: "/CategoriesDetail" },
        { text: "Medical devices", link: "/CategoriesDetail" },
        { text: "Cancer", link: "/CategoriesDetail" },
        { text: "Health policy reforms", link: "/CategoriesDetail" },
      ],
    },
    {
      title: "Sustainability",
      img:'/Frame 497.png',
      items: [
        { text: "Renewable energy", link: "/CategoriesDetail" },
        { text: "Climate change", link: "/CategoriesDetail" },
        { text: "Waste management", link: "/CategoriesDetail" },
        { text: "Sustainable agriculture", link: "/CategoriesDetail" },
        { text: "Green technologies", link: "/CategoriesDetail" },
      ],
    },
    {
      title: "Economy",
      img :"/Frame 484.png",

      items: [
        { text: "Trade regulations", link: "/CategoriesDetail" },
        { text: "Fiscal policies", link: "/CategoriesDetail" },
        { text: "Labor market policies", link: "/CategoriesDetail" },
        { text: "Economic growth initiatives", link: "/CategoriesDetail" },
        { text: "Digital economy", link: "/CategoriesDetail" },
      ],
    },
    {
      title: "Politics",
      img :"/Frame 498.png",

      items: [
        { text: "EU legislation", link: "/CategoriesDetail" },
        { text: "International relations", link: "/CategoriesDetail" },
        { text: "Immigration policy", link: "/CategoriesDetail" },
        { text: "Human rights", link: "/CategoriesDetail" },
        { text: "Regional politics", link: "/CategoriesDetail" },
      ],
    },
  ];





  const plans = [
    {
      title: 'Basic',
      features: [
        'Email alerts',
        'AI driven monitoring reports to your interests.',
        'News Flashes from current event.',
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Professional',
      features: [
        'Email alerts',
        'AI driven monitoring reports to your interests.',
        'News Flashes from current event.',
        'Personalized reports for your needs',
      ],
      buttonText: 'Get Started',
    },
  ];






  const articles = [
    {
      date: 'Jun 19',
      readTime: '5 Min read',
      category: 'LIFESTYLE',
      title: 'How to Beat the Heat: See it Coming (More than a Week Ahead!)',
      description: 'I wrote this in honor of Father’s Day. No matter your...',
      imageUrl: '/Image.png',
    },
    {
      date: 'May 11',
      readTime: '7 Min read',
      category: 'APP',
      title: 'Ten fastest-growing apps in 2022 (Including some you don’t know)',
      description: 'The fastest-growing apps in 2022! If there is one thing...',
      imageUrl: '/Image2.png',

    },
    {
      date: 'Feb 5',
      readTime: '5 Min read',
      category: 'VISUAL DESIGN',
      title: '5 things to learn from type designers while dealing with visuals',
      description: 'Hello, Designers! Ever had this thought, “Something is...',
      imageUrl: '/Image3.png',

    },
    {
      date: 'Dec 28',
      readTime: '7 Min read',
      category: 'LEADERSHIP',
      title: 'The path to technical leadership: how to go from developer to team leader',
      description: 'If software development feels like it is only part of your professional purpose...',
      imageUrl: '/Image4.png',

    },
  ];




  return (
    <>
      {/* Hero Section */}
      <div className=' relative w-100 bg-bghero   bg-no-repeat bg-cover' >
        <Navbar />

        <div className='h-[75vh]  w-11/12  2xl:w-4/6   mx-auto text-center flex flex-col items-center justify-center'>
          <h2 className="text-white text-4xl md:text-4xl lg:text-7xl font-semibold ">
            Stay Informed With   </h2>
          <h2 className="text-white text-4xl md:text-4xl lg:text-7xl font-semibold md:mt-10">
            EU Policy Insights
          </h2>
          <button

            className="px-[100px] text-white  py-3 border border-white rounded-full   duration-200 mt-10"
          >
            Get Started
          </button>

        </div>
        <div className='text-center flex justify-center pb-6'>
          <img src="/Group 5.png" alt="" />
        </div>





      </div>

      {/* End Hero Section */}




      <div className=' bg-none md:bg-bgEllipse2 bg-no-repeat  bg-right-bottom'>

        <div className='bg-none md:bg-bgellipse  bg-no-repeat  bg-left-bottom'>
          <div className=" w-11/12 2xl:w-4/6  py-10  mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ">

              <div className="hidden md:block">
                <div className="mt-5">
                  <img
                    src="/Rectangle 322.png"
                    alt="hero-one"
                    className=" mx-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-7 py-8  bg-no-repeat">
                <h2 className="text-theme text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Who are we
                </h2>
                <p className="lg:text-xl font-normal text-ptheme text-justify">
                EUaffairs offers a subscription-based service to help businesses and individuals stay informed and compliant with the ever-evolving EU policy landscape. We focus on Healthcare, Sustainability, Economy, and Politics. Through our user-friendly website, we deliver timely, relevant, and comprehensive reports tailored to your needs. Our mission is to empower users with the insights necessary to make informed decisions and effectively navigate the complex EU regulatory environment.
                </p>

                <div>
          
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>


      {/* Policy Areas and Subcategories */}

      <section className="md:bg-bgEllipse3 bg-no-repeat  bg-right-top py-20">
        <div className="text-center">
          <h2 className="text-theme text-3xl md:text-3xl font-semibold">
            Policy Areas and Subcategories
          </h2>

        </div>
        <div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-36 2xl:py-[55px]  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 gap-7">
          {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md col-span-3 mt-20 md:mt-10">
          <div className="absolute translate-x-[60px] translate-y-[-90px] md:translate-x-[30px]">
            <img src={category.img} alt="" className="" />
          
        
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4 mt-24 text-theme">{category.title}</h2>
          </div>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link
                  to={`/CategoriesDetail/${encodeURIComponent(category.title)}/${encodeURIComponent(item.text)}`}
                  className="text-ptheme hover:underline"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
          </div>

        </div>
      </section>



      {/* Policy Areas and Subcategories End */}






      <section className="pb-20">
        <div className="text-center pb-20">
          <h2 className="text-theme text-3xl md:text-4xl font-semibold">
          Our Services
          </h2>
          <p className="lg:text-xl font-normal text-secColor ">

            Choose a plan that suits you.
          </p>

        </div>
        <div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6    mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 gap-7">



            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-2xl p-6 col-span-6">
                <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
                <hr className="border-t-2 border-green-400 my-4" />
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="md:px-[100px] px-[50px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"  >
                  {plan.buttonText} &rarr;
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>







{/* Blogs */}


      <div className="text-center py-10 bg-gray-100 ">
        <h2 className="text-theme text-3xl md:text-4xl font-semibold">
          Latest Article
        </h2>
        <p className="lg:text-xl font-normal text-secColor ">

          Blog Posts
        </p>

      </div>

      <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md `}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 lg:w-1/4">
                  <img src={article.imageUrl} alt={article.title} className="md:w-[150px] md:h-[150px] w-full h-auto  rounded-lg mb-4 md:mb-0" />
                </div>
                <div className="md:w-2/3 lg:w-3/4 md:pl-4">
                  <p className="text-sm text-gray-500 mb-2">
                    {article.date} · {article.readTime} · <span className="text-secColor">{article.category}</span>
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <Link to='/BlogDetail' className="text-blue-600 hover:underline">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


{/* Blogs End */}



{/* Contact Us */}


      <div className=" text-center py-10">
        <h2 className="text-theme text-3xl md:text-4xl font-semibold">
        Contact Us
        </h2>
        <p className="lg:text-xl font-normal text-secColor ">

          Blog Posts
        </p>

      </div>
 
      <div className="  w-11/12 md:5/6 lg:5/6 2xl:w-4/6    mx-auto">
      <div className="bg-white p-8 rounded-lg   w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information Section */}
        <div className=" border-e-2">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">EU AFFAIRS</h2>
          <div className="mb-6">
            <p className="flex items-center text-gray-600 mb-2">
              <svg
                className="w-6 h-6 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.75c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM9.83 16.5c-.3 0-.56-.24-.56-.54v-1.74c0-.3.26-.55.56-.55h4.34c.3 0 .56.25.56.55v1.74c0 .3-.26.54-.56.54H9.83zm3.67-10.45a.75.75 0 00-1.5 0v6.19a.75.75 0 001.5 0V6.05z"
                  clipRule="evenodd"
                />
              </svg>
              Call us now
            </p>
            <p className="text-gray-800 font-medium">+1 123-456-0789</p>
          </div>
          <div className="mb-6">
            <p className="flex items-center text-gray-600 mb-2">
              <svg
                className="w-6 h-6 text-blue-900 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 6.75c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 011.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-17a1.25 1.25 0 01-1.25-1.25V6.75zM4 7.25a.25.25 0 00-.25.25v9.5c0 .14.11.25.25.25h16a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H4zm.625 1.06a.625.625 0 111.25 0 .625.625 0 01-1.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              Email us
            </p>
            <p className="text-gray-800 font-medium">euaffairs@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-600 mb-4">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.04c-5.46 0-9.92 4.46-9.92 9.92 0 4.38 3.51 8.01 8 8.82v-6.23h-2.42v-2.59h2.42v-2c0-2.38 1.44-3.7 3.56-3.7 1.01 0 1.88.08 2.14.11v2.48h-1.47c-1.16 0-1.39.55-1.39 1.36v1.78h2.78l-.36 2.59h-2.42v6.23c4.49-.81 8-4.44 8-8.82 0-5.46-4.46-9.92-9.92-9.92z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22.23 5.64c-.81.36-1.68.61-2.59.72a4.5 4.5 0 001.98-2.49 9.02 9.02 0 01-2.86 1.1 4.52 4.52 0 00-7.72 4.11A12.81 12.81 0 013.05 4.6a4.52 4.52 0 001.4 6.03 4.42 4.42 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.42 4.54 4.54 0 01-2.03.08 4.52 4.52 0 004.21 3.12A9.05 9.05 0 012 19.52a12.76 12.76 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2-.01-.4-.02-.59a9.22 9.22 0 002.27-2.35z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.04c-5.46 0-9.92 4.46-9.92 9.92 0 4.38 3.51 8.01 8 8.82v-6.23h-2.42v-2.59h2.42v-2c0-2.38 1.44-3.7 3.56-3.7 1.01 0 1.88.08 2.14.11v2.48h-1.47c-1.16 0-1.39.55-1.39 1.36v1.78h2.78l-.36 2.59h-2.42v6.23c4.49-.81 8-4.44 8-8.82 0-5.46-4.46-9.92-9.92-9.92z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0c-4.32 0-7.83 3.5-7.83 7.83 0 5.47 4.9 11.06 7.83 16.15 2.93-5.09 7.83-10.68 7.83-16.15C19.83 3.5 16.32 0 12 0zm0 11.31a3.48 3.48 0 01-3.48-3.48A3.48 3.48 0 0112 4.35a3.48 3.48 0 013.48 3.48A3.48 3.48 0 0112 11.31z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us Form</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <select className="border border-gray-300 p-2 rounded-md w-full">
                <option>Pricing Plans</option>
                <option>Plan A</option>
                <option>Plan B</option>
                <option>Plan C</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-2 rounded-md w-full h-32"
              />
            </div>
            <button
              // type="submit"
              className="md:px-[100px] px-[50px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
            >
              Send Message &rarr;
            </button>


         
          </form>
        </div>
      </div>
    </div>


{/* Contact Us End*/}



    <Footer/>

    </>
  );
}

export default Home;






// <div className="">
// <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ">
//   <div className="flex flex-col gap-y-7 pb-5 bg-bghero bg-no-repeat">
//     <h2 className="text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold">
//       Welcome to the <span className="text-theme">International</span>{" "}
//       IQ test.{" "}
//     </h2>
//     <p className="lg:text-xl font-normal text-ptheme ">
//       We will evaluate, through 40 questions, your ability to learn, to
//       understand, to form concepts, to process information, and to apply
//       logic and reason. Your results at the end of this test will inform
//       you of your IQ as well as your position in comparison to the
//       population using several statistics.
//     </p>

//     <div>
//       <Link
//         to="/takeTest"
//         className="px-[100px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
//       >
//         Start the test
//       </Link>
//     </div>
//     <div className="flex justify-center text-center">
//       <img src="/Ellipse158.svg" alt="" srcset="" />
//     </div>
//   </div>

//   <div className=" hidden md:block">
//     <div className="mt-5">
//       <img
//         src="/91685272.svg"
//         alt="hero-one"
//         className="w-[500px] mx-auto"
//       />
//     </div>
//   </div>
// </div>
// </div>
