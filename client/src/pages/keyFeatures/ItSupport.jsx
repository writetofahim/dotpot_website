import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ItSupport = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-[15vh] min-h-screen'>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center">IT Support</h1>
                <div className='container mx-auto'>
                    <p className='text-md text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam laudantium maxime, totam porro debitis provident ut a omnis in. Inventore iure ipsa laudantium ducimus adipisci cupiditate dolores eos, corporis exercitationem.
                    </p>
                </div>
            </div>
            <div  className=" ">
            <Footer/>
            </div>
        </div>
    );
};

export default ItSupport;