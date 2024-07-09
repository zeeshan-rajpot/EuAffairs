import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleNextClick = () => {
        if (selectedPlan) {
            navigate('/nextpage'); // Replace '/nextpage' with your desired path
        }
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <h1 className="text-2xl font-semibold text-secColor mb-2">Choose a plan first</h1>
                <p className="text-gray-500 mb-8">It's a monthly subscription</p>
                <div className="flex space-x-8 mb-8">
                    <div
                        className={`p-8 bg-white rounded-lg shadow-md cursor-pointer ${selectedPlan === 'basic' ? 'border-2 border-secColor' : 'border'}`}
                        onClick={() => handlePlanSelect('basic')}
                    >
                        <div className='text-center'>

                            <h2 className="text-xl font-bold text-theme">Basic</h2>
                            <p className="text-2xl font-bold text-theme mb-4">$9.99</p>
                        </div>
                        <hr className="border-t-2 border-secColor my-4 w-90 mx-auto" />

                        <ul className="list-none space-y-2">
                            <li>✓ Email alerts</li>
                            <li>✓ AI driven monitoring reports to your interests</li>
                            <li>✓ News Flashes from current event</li>
                        </ul>
                    </div>
                    <div
                        className={`p-8 bg-white rounded-lg shadow-md cursor-pointer ${selectedPlan === 'professional' ? 'border-2 border-secColor' : 'border'}`}
                        onClick={() => handlePlanSelect('professional')}
                    >
                        <div className='text-center'>
                            <h2 className="text-xl font-bold  text-theme">Professional</h2>
                            <p className="text-2xl font-bold text-theme mb-4">$14.99</p>
                        </div>
                        <hr className="border-t-2 border-secColor my-4 w-90 mx-auto" />
                        <ul className="list-none space-y-2">
                            <li>✓ Email alerts</li>
                            <li>✓ AI driven monitoring reports to your interests</li>
                            <li>✓ News Flashes from current event</li>
                            <li>✓ Weekly personalized reports</li>
                        </ul>
                    </div>
                </div>



                <div className="w-[100%]  text-center">
                    <button className="md:px-[100px]  px-[50px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
                        disabled={!selectedPlan}
                        onClick={handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>

        </>
    )
}

export default Payment
