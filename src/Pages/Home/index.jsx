import React, { useEffect, useState } from "react";

import Navbar from "../../Compunents/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../Compunents/Footer";
import { userApi } from "../../api";
import toast, { Toaster } from 'react-hot-toast';
import SignUp from "../../Compunents/SignUp";



const Home = () => {
  const categories = [
    {
      title: "Healthcare",
      img: "/Frame 484.png",
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
      img: "/Frame 497.png",
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
      img: "/Frame ec.png",

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
      img: "/Frame 498.png",

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
      title: "Basic",
      features: [
        "Email alerts",
        "AI driven monitoring reports to your interests",
        "News Flashes from current event",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Professional",
      features: [
        "Email alerts",
        "AI driven monitoring reports to your interests",
        "News Flashes from current event",
        "Personalized reports for your needs",
      ],
      buttonText: "Get Started",
    },
  ];

  const articles = [
    {
      date: "Jun 19",
      readTime: "5 Min read",
      category: "LIFESTYLE",
      title: "How to Beat the Heat: See it Coming (More than a Week Ahead!)",
      description: "I wrote this in honor of Father’s Day. No matter your...",
      imageUrl: "/Image.png",
    },
    {
      date: "May 11",
      readTime: "7 Min read",
      category: "APP",
      title: "Ten fastest-growing apps in 2022 (Including some you don’t know)",
      description: "The fastest-growing apps in 2022! If there is one thing...",
      imageUrl: "/Image2.png",
    },
    {
      date: "Feb 5",
      readTime: "5 Min read",
      category: "VISUAL DESIGN",
      title: "5 things to learn from type designers while dealing with visuals",
      description: "Hello, Designers! Ever had this thought, “Something is...",
      imageUrl: "/Image3.png",
    },
    {
      date: "Dec 28",
      readTime: "7 Min read",
      category: "LEADERSHIP",
      title:
        "The path to technical leadership: how to go from developer to team leader",
      description:
        "If software development feels like it is only part of your professional purpose...",
      imageUrl: "/Image4.png",
    },
  ];



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    date: '',
    plan: 'Pricing Plans',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation to ensure all fields are filled


    try {
      const upload = await userApi.sendmessage(formData);
      console.log('Message sent successfully:', upload);
      toast.success(upload.message);
      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        date: '',
        plan: 'Pricing Plans',
        message: ''
      });
    } catch (err) {
      console.log('Error sending message:', err);
      toast.error(err.response.data.message);
      console.log(err.response.data.message);
    }
  };




  const [isModalSignUp, setIsModalSignUp] = useState(false);

  const SignUpModal = () => {
    // console.log("Toggle modal");
    setIsModalSignUp(!isModalSignUp);
  };




  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlog = async () => {
    try {
      const response = await userApi.getBlog();
      console.log("Blogs", response);
      setBlog(response?.blogs.reverse() || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);


  return (
    <>
      <Toaster />
      {/* Hero Section */}
      <div className=" relative w-100 bg-bghero   bg-no-repeat bg-cover">
        <Navbar />

        <div className="h-[85vh]  w-11/12  2xl:w-4/6   mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl md:text-4xl lg:text-6xl font-semibold tracking-in-contract-bck">
            Your custom policy content, delivered{" "}
          </h2>
          <h2 className="text-white text-4xl md:text-4xl lg:text-6xl font-semibold md:mt-10 tracking-in-contract-bck">
            fast with the precision of AI
          </h2>
          <button onClick={SignUpModal} className="px-[100px] text-white  py-3 border border-white rounded-full   duration-200 mt-10">
            Get Started
          </button>
        </div>
        <div className="text-center flex justify-center pb-6">
          <img src="/Group 5.png" alt="" />
        </div>
      </div>

      {/* End Hero Section */}

      <div
        className=" bg-none md:bg-bgEllipse2 bg-no-repeat  bg-right-bottom "
        id="Whoarewe"
      >
        <div className="bg-none md:bg-bgellipse  bg-no-repeat  bg-left-bottom md:py-16 py-0">
          <div className=" w-11/12 2xl:w-4/6  py-10  mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ">
              <div className="hidden md:block">
                <div className="mt-5">
                  <img
                    src="/Rectangle 322.png"
                    alt="hero-one"
                    className=" ms-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-7 py-0 md:py-8  bg-no-repeat">
                <h2 className="text-theme text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Who  we are
                </h2>

                <p className="lg:text-xl font-normal text-ptheme text-md text-justify md:text-left">
                  EUaffairs offers a subscription-based service designed to help businesses and individuals stay informed and compliant with the constantly evolving EU policy landscape. We focus on Healthcare, Sustainability, Economy, and Politics. Through our user-friendly website, we provide timely, relevant, and comprehensive reports tailored to your needs. Our mission is to empower our users with the insights necessary to make informed decisions and navigate the complex EU regulatory environment effectively.
                </p>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Areas and Subcategories */}

      <section
        className="md:bg-bgEllipse3 bg-no-repeat  bg-right-top pt-20"
        id="Policy"
      >
        <div className="text-center ">
          <h2 className="text-theme text-3xl md:text-3xl font-semibold">
            Policy Areas of Expertise
          </h2>

          <hr className="border-t-2 border-green-400 my-4 w-60 mx-auto" />
        </div>
        <div className=" w-9/12 md:w-5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-16 2xl:py-[55px]  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 gap-7">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md col-span-3 mt-20 md:mt-10"
              >
                <div className="absolute translate-x-[60px] translate-y-[-90px] md:translate-x-[30px] ">
                  <img
                    src={category.img}
                    alt=""
                    className="w-[70%] md:w-[100%]"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-4 mt-32 md:mt-32px text-theme">
                    {category.title}
                  </h2>
                </div>
                <ul className="custom-list md:ms-10 ms-10 ">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link
                        // to={`/CategoriesDetail/${encodeURIComponent(
                        //   category.title
                        // )}/${encodeURIComponent(item.text)}`}
                        className="text-ptheme "
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

      <section className="pb-20" id="Services">
        <div className="text-center pb-10">
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
              <>
           
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 col-span-6 flex flex-col justify-between"
              >
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
                  <hr className="border-t-2 border-green-400 my-4" />
                </div>
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

                {/* <div className="w-[100%] md:w-[70%]">
                  <button className="md:px-[100px]  px-[50px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200">
                    {plan.buttonText} &rarr;
                  </button>
                </div> */}
         


         <button onClick={SignUpModal} className=" text-white hover:text-theme bg-theme hover:bg-transparent  py-3 border border-theme rounded-full   duration-200  max-w-48">
                  Get Started &rarr;
                </button>
              </div>

          
              </>

            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}

      <div className="text-center py-10 bg-gray-100 " id="Blogs">
        <h2 className="text-theme text-3xl md:text-4xl font-semibold">
          Latest Article
        </h2>
        <p className="lg:text-xl font-normal text-secColor ">Blog Posts</p>
      </div>

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {blog.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 lg:w-1/4">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="md:w-[150px] md:h-[150px] w-full h-auto rounded-lg mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-2/3 lg:w-3/4 md:pl-4">
                <p className="text-sm text-gray-500 mb-2">
                  {article.updatedAt} · 
                  {/* {article.readTime} ·{" "} */}
                  <span className="text-secColor">{article.category}</span>
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {article.heading}
                </h2>
                <p className="text-gray-700 mb-4">{article.blogDescription}</p>
                <Link
                  to={`/Blog/${encodeURIComponent(article.heading)}/${encodeURIComponent(article.blogDescription)}/${encodeURIComponent(article.thumbnail)}/${encodeURIComponent(article.category)}/${encodeURIComponent(article.updatedAt)}`}
                  className="text-blue-600 hover:underline"
                >
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
        {/* <p className="lg:text-xl font-normal text-secColor ">Blog Posts</p> */}
      </div>

      <div className="  w-11/12 md:5/6 lg:5/6 2xl:w-4/6    mx-auto">
        <div className="bg-white p-8 rounded-lg   w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information Section */}
          <div className=" border-e-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              EU AFFAIRS
            </h2>
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
              <p className="text-gray-800 font-medium">contact@euaffairs.org</p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/euaffairs/?viewAsMember=true
" className="text-gray-400 hover:text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
              
              </div>
            </div>
          </div>
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Contact Us Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="subject"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <select
                  className="border border-gray-300 p-2 rounded-md w-full"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option>Pricing Plans</option>
                  <option>basic</option>
                  <option>premium</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 p-2 rounded-md w-full h-32"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="md:px-[100px] px-[50px] bg-theme text-white py-3 border border-theme rounded-full hover:bg-transparent hover:text-theme duration-200"
              >
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Us End*/}

      <Footer />



      {isModalSignUp && <SignUp toggle={SignUpModal} />}
    </>
  );
};

export default Home;
