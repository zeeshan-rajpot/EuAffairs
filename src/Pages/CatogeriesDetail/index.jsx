import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Compunents/Navbar';





const categories = [

    {
        title: "Key Policies in Veterinary Public Health",
        date: "16, June 2024",
        link: "#",
        image: "image1.jpg" // Replace with actual image path
    },
    {
        title: "The Role of Veterinarians in Public Health",
        date: "16, June 2024",
        link: "#",
        image: "image2.jpg" // Replace with actual image path
    },
    {
        title: "Key Policies in Veterinary Public Health",
        date: "16, June 2024",
        link: "#",
        image: "image3.jpg" // Replace with actual image path
    },
    {
        title: "The Role of Veterinarians in Public Health",
        date: "16, June 2024",
        link: "#",
        image: "image4.jpg" // Replace with actual image path
    }
];



const articles = [
    {
        id: 1,
        title: "Key Policies in Veterinary Public Health: An Overview",
        date: "12, June 2024",
        description: "An Overview",
        image: "path/to/image1.jpg",
    },
    {
        id: 2,
        title: "The Role of Veterinarians in Public Health Initiatives",
        date: "16, June 2024",
        image: "path/to/image2.jpg",
    },
    {
        id: 3,
        title: "Global Strategies for Controlling Zoonotic Diseases",
        date: "8, May 2024",
        image: "path/to/image3.jpg",
    },
];

const CategoryCard = ({ title, date, link, image }) => (
    <div className="bg-white p-4 rounded-lg shadow-md  ">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <div className='flex items-center justify-between'>

            <p className="text-secColor mt-2">{date}</p>
            <Link to='/BlogDetail' className="text-blue-500 hover:underline mt-2 block">See more</Link>

        </div>

    </div>
);


const Categories = () => {
    const { title, text } = useParams();
    return (
        <>
            <div className=' relative w-100 bg-bgCatDetail   bg-no-repeat 2xl:bg-cover bg-cover bg-opacity-50' >
                <Navbar />

                <div className='h-[75vh]  w-11/12  2xl:w-4/6   mx-auto text-center flex flex-col items-center justify-center'>



                    <h2 className="text-white text-4xl md:text-4xl lg:text-7xl font-semibold ">
                        {decodeURIComponent(title)}

                    </h2>

                    <p className="text-white text-4xl md:text-4xl lg:text-3xl font-semibold ">{decodeURIComponent(text)}</p>
                </div>

            </div>






            <div className='w-11/12 2xl:w-4/6  py-10  mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-10 gap-12'>
                    <div className='col-span-1 md:col-span-7 flex  h-fit'>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {categories.map((category, index) => (
                                <CategoryCard
                                    key={index}
                                    title={category.title}
                                    date={category.date}
                                    link={category.link}
                                    image={category.image}
                                />
                            ))}
                        </div>
                    </div>
                    <div className=' hidden md:block col-span-1 md:col-span-3'>
                        {articles.map((article) => (
                            <div key={article.id} className="flex flex-col items-start p-4 border rounded-lg shadow-md mt-5">
                                <img src={article.image} alt="Article Image" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h2 className="text-lg font-semibold">{article.title}</h2>
                                {article.description && <p className="text-gray-600 mb-2">{article.description}</p>}
                                <span className="text-secColor font-semibold">{article.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





        </>
    );
}

export default Categories;
