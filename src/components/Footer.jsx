import { FaDribbble, FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="bg-gray-900">
    <div className="px-4 pt-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 sm:max-w-xl">
      <div>
        <div className="grid mb-8 lg:grid-cols-4 grid-cols-2">
                    
                    {/* 1st section */}
                    <div>
                        <p className=" font-medium tracking-wide text-gray-300 ">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">News</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">World</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Games</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Refrances</a></li>
                      
                        </ul>
                    </div>

                     {/* 2st section */}
                     <div>
                        <p className=" font-medium tracking-wide text-gray-300 ">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">News</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">World</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Games</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Refrances</a></li>
                      
                        </ul>
                    </div>


                     {/* 3st section */}
                     <div>
                        <p className=" font-medium tracking-wide text-gray-300 ">Web</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">News</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">World</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Games</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Refrances</a></li>
                      
                        </ul>
                    </div>

                     {/* 4st section */}
                     <div>
                        <p className=" font-medium tracking-wide text-gray-300 ">Mobile</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">News</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">World</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Games</a></li>
                             <li><a href="" className="text-gray-400 transition-colors duration-300
                            hover:text-orange-500">Refrances</a></li>
                      
                        </ul>
                    </div>

                    
                     


                     {/* 6st section */}
                     {/* <div>
                        <p className=" font-medium tracking-wide text-gray-300 ">Subscribe for Updates</p>
                       <form action="" className="mt-4 flex flex-col md:flex-row">
                        <input type="email" name="email" id="email" placeholder="Enter your email" 
                        className="flex-grow w-22 h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none" />
                        <button type="submit" className="inline-flex items-center justify-center h-12 px-6
                        font-medium tracking-wide text-white transition duration-200 rounded bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none border
                        shadow-md">
                            Subscribe
                        </button>
                       </form>
                       <p className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit.
                         Alias corporis minima enim possimus optio 
                         quibusdam et maxime repellendus reprehenderit
                          unde quidem tenetur expedita, dolore blanditiis 
                          quis, totam doloribus nobis consectetur.</p>
                    </div> */}

                </div>
            </div>

            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <p className="text-sm text-gray-500">© Copyright 2024 | All right reserved.</p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a href="" className="text-gray-400 transition-colors duration-300 hover:text-orange-500"><FaXTwitter className="h-6 w-6" /></a>
                    <a href="" className="text-gray-400 transition-colors duration-300 hover:text-orange-500"><FaFacebook className="h-6 w-6" /></a>
                    <a href="" className="text-gray-400 transition-colors duration-300 hover:text-orange-500"><FaDribbble className="h-6 w-6" /></a>
                    <a href="" className="text-gray-400 transition-colors duration-300 hover:text-orange-500"><FaLinkedin className="h-6 w-6" /></a>
                </div>

            </div>



        </div>
    </div>
  )
}

export default Footer
