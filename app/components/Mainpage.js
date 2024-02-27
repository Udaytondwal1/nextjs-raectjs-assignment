import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { CgCheckO } from "react-icons/cg";
import { SlInfo } from "react-icons/sl";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";



const Mainpage = () => {
    return (
        <div className=' w-full overflow-hidden h-full px-2 py-5 lg:py-10 lg:px-64 Main-container bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 md:px-20'>
            <span className='text-2xl lg:text-5xl'>Best Website builders in the US</span>
            <div className='text-[10px] lg:text-sm lg:mt-7 lg:mb-14'>
                <div className='line w-full h-[1.5px] bg-zinc-200'></div>
                <div className='flex justify-between py-3'>
                    <div className='flex items-center lg:text-base text-[9px] gap-1'>
                        <CgCheckO /><span className='mr-5 lg:mr-10'>Last Updated - February 22,2020</span>
                        <SlInfo /><span>Advertising Disclosure</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Top Relevent</span><span><SlArrowDown /></span>
                    </div>
                </div>
                <div className='line w-full h-[1.5px] bg-zinc-200'></div>
                <div className='flex gap-3 px-1 py-1 mt-2 lg:px-2 lg:mt-6 lg:gap-12'>
                    {
                        ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"].map((item) => {
                            return <div className='w-auto h-auto px-2 pt-1 text-center text-black bg-white rounded-md lg:py-1'>{item}</div>
                        })
                    }
                </div>
                <div className='flex gap-3 px-1 mt-4 mb-8'>
                    {
                        ["Home", "", "Hosting for all", "", "Hosting", "", "Hosting6", "", "Hosting5"].map((item, index) => {
                            return index % 2 == 0 ? <div>{item}</div> : <span className='font-bold'>{">"}</span>;
                        })
                    }
                </div>
            </div>
            <div className='Product-Container'>
                <div className='relative lg:h-[34vh] h-[30vh] lg:mb-2 mb-7 bg-white Product lg:w-[65vw] w-[96vw] rounded-lg lg:mt-5 flex'>
                    <div className='w-1/4 h-full  flex flex-col items-center justify-center py-10 text-black'>
                        <div className='w-24 h-20 px-2 my-14 lg:px-5 text-xs lg:text-base text-center lg:w-44 lg:h-40 lg:my-12'><img className='lg:mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                            <span>Builder 1</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-1 py-1 lg:px-4 lg:py-5 lg:text-base text-xs dark:bg-zinc-700'>
                        <p className='mb-1'><strong>WixPro 72-Inch Responsive Website Builder</strong> - Comperhensive Digital Platform Creation Tool, Streamlined Design Interface For Professional Websites and Online Stores (Black/Blue)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='lg:ml-5 lg:mt-3 lg:mb-3 lg:w-[30vw] ml-1'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                        <div className='flex items-center gap-1 text-blue-500'><span>Show more</span><IoIosArrowDown /></div>
                    </div>
                    <div className='w-1/4 h-full px-2 lg:px-4 text-sm  text-center dark:bg-zinc-700 rounded-r-md'>
                        <div className='relative lg:w-32 w-20 py-2 lg:py-5 lg:mx-auto rounded-b-xl h-28 lg:h-32 bg-blue-50 text-black'>
                            <div className='absolute left-24 top-2 text-zinc-600 text-xs'><SlInfo /></div>
                            <h1 className='mb-4 text-3xl font-medium'>9.8</h1>
                            <div className='mb-1'>Exceptional</div>
                            <div className='flex justify-center text-yellow-500'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        </div>
                        <button className='lg:h-12 h-8 w-20 lg:mt-16 mt-20 text-white bg-blue-500 rounded-lg lg:w-56'>View</button>
                    </div>
                    <div className='absolute flex items-center w-auto h-auto mx-1 gap-1 lg:px-2 lg:py-1 px-1 py-1 lg:text-base text-sm text-center text-white bg-orange-500 rounded-r-lg -left-2 -top-4'><GoTrophy /> <span className='lg:tracking-wide'>Best Choice</span></div>
                    <span className='absolute w-auto h-auto lg:px-4 lg:py-2 px-3 py-1 text-center bg-white border-[1px] border-zinc-400 rounded-full lg:-left-4 -left-1 top-7 text-black'>1</span>
                </div>
                <div className='relative lg:h-[34vh] h-[30vh] mb-2  bg-white Product lg:w-[65vw] w-[96vw] rounded-lg lg:mt-5 flex'>
                    <div className='w-1/4 h-full  flex flex-col items-center justify-center py-10 text-black'>
                        <div className='w-24 h-20 px-2 my-14 lg:px-5 text-xs lg:text-base text-center lg:w-44 lg:h-40 lg:my-12'><img className='lg:mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                            <span>Builder 2</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-1 py-1 lg:px-4 lg:py-5 lg:text-base text-xs dark:bg-zinc-700'>
                        <p className='mb-1'><strong>SiteCraft 68-Inch Ultimate Web Design Studio</strong> - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='lg:ml-5 lg:mt-3 lg:mb-3 lg:w-[30vw] ml-1'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                        <div className='flex items-center gap-1 text-blue-500'><span>Show more</span><IoIosArrowDown /></div>
                    </div>
                    <div className='w-1/4 h-full px-2 lg:px-4 text-sm  text-center dark:bg-zinc-700 rounded-r-md'>
                        <div className='relative lg:w-32 w-20 py-2 lg:py-5 lg:mx-auto rounded-b-xl h-28 lg:h-32 bg-blue-50 text-black'>
                        <div className='absolute left-24 top-2 text-zinc-600 text-xs'><SlInfo /></div>
                            <h1 className='mb-4 text-3xl font-medium'>9.5</h1>
                            <div className='mb-1'>Excellent</div>
                            <div className='flex justify-center text-yellow-500'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStarHalf /></div>
                        </div>
                        <button className='lg:h-12 h-8 w-20 lg:mt-16 mt-20 text-white bg-blue-500 rounded-lg lg:w-56'>View</button>
                    </div>
                    <div className='absolute flex items-center w-auto h-auto mx-1 gap-1 lg:px-2 lg:py-1 px-1 py-1 lg:text-base text-sm text-center text-white bg-orange-500 rounded-r-lg -left-2 -top-4'><IoDiamondOutline /> <span className='lg:tracking-wide'>Best Value</span></div>
                    <span className='absolute w-auto h-auto lg:px-4 lg:py-2 px-3 py-1 text-center bg-white border-[1px] border-zinc-400 rounded-full lg:-left-4 -left-1 top-7 text-black'>2</span>
                </div>
                <div className='relative lg:h-[34vh] h-[30vh] mb-2  bg-white Product lg:w-[65vw] w-[96vw] rounded-lg lg:mt-5 flex'>
                    <div className='w-1/4 h-full  flex flex-col items-center justify-center py-10 text-black'>
                        <div className='w-24 h-20 px-2 my-14 lg:px-5 text-xs lg:text-base text-center lg:w-44 lg:h-40 lg:my-12'><img className='lg:mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                            <span>Builder 2</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-1 py-1 lg:px-4 lg:py-5 lg:text-base text-xs dark:bg-zinc-700'>
                        <p className='mb-1'><strong>WixPro 72-Inch Responsive Website Builder</strong> - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='lg:ml-5 lg:mt-3 lg:mb-3 lg:w-[30vw] ml-1'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                        <div className='flex items-center gap-1 text-blue-500'><span>Show more</span><IoIosArrowDown /></div>
                    </div>
                    <div className='w-1/4 h-full px-2 lg:px-4 text-sm  text-center dark:bg-zinc-700 rounded-r-md'>
                        <div className='lg:w-32 w-20 py-2 lg:py-5 lg:mx-auto rounded-b-lg h-28 lg:h-32 bg-blue-50 text-black'>
                            <h1 className='mb-4 text-3xl font-medium'>9.3</h1>
                            <div className='mb-1'>Exceptional</div>
                            <div className='flex justify-center text-yellow-500'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        </div>
                        <button className='lg:h-12 h-8 w-20 lg:mt-16 mt-20 text-white bg-blue-500 rounded-lg lg:w-56'>View</button>
                    </div>
                    <span className='absolute w-auto h-auto lg:px-4 lg:py-2 px-3 py-1 text-center bg-white border-[1px] border-zinc-400 rounded-full lg:-left-4 -left-1 top-7 text-black'>3</span>
                </div>
                <div className='relative lg:h-[55vh] h-[38vh]  bg-white Product lg:w-[65vw] w-[96vw] rounded-lg lg:mt-5 flex'>
                    <div className='w-1/4 h-full  flex flex-col items-center justify-center py-10 text-black'>
                        <div className='w-24 h-20 px-2 my-14 lg:px-5 text-xs lg:text-base text-center lg:w-44 lg:h-40 lg:my-12'><img className='lg:mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                            <span>CDK</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-1 py-1 lg:px-4 lg:py-5 lg:text-base text-xs dark:bg-zinc-700'>
                        <p className='mb-1'><strong>CDK Resposive Builder:</strong> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                        <div className='w-20 h-8 py-1 text-center rounded-md bg-zinc-200 dark:text-black'>26% Off</div>
                        <span className='font-bold'>Main highlights</span>
                        <div className='ml-5 mt-1 lg:mb-4 w-[30vw] lg:h-28 h-22  rounded-lg lg:text-base text-[9px] bg-orange-100 px-1 py-1 lg:py-2 lg:px-5 flex flex-col gap-2 lg:gap-3 dark:text-black'>
                            <div>
                                <span className='w-auto h-auto px-2 py-1 text-blue-500 bg-white rounded-md'>9.9</span> <span>Building Responsive</span>
                            </div>
                            <div>
                                <span className='w-auto h-auto px-2 py-1 text-blue-500 bg-white rounded-md'>8.9</span> <span>Cool</span>
                            </div>
                            <div>
                                <span className='w-auto h-auto px-2 py-1 text-blue-500 bg-white rounded-md'>8.9</span> <span>Docs</span>
                            </div>
                        </div>
                        <div>
                            <span>Why we love it</span>
                            <div className='flex gap-2'>
                                <span className='lg:w-5 lg:h-5 px-1 py-1 lg:px-[2.5px] lg:py-[2.5px] text-xs lg:text-sm text-blue-800 bg-blue-100 rounded-full'><FaCheck /></span> <span className='text-zinc-600 dark:text-white'>Documentation</span>
                            </div>
                            <div className='flex gap-2 my-2'>
                                <span className='lg:w-5 lg:h-5 px-1 py-1 lg:px-[2.5px] lg:py-[2.5px] text-xs lg:text-sm text-blue-800 bg-blue-100 rounded-full'><FaCheck /></span> <span className='text-zinc-600 dark:text-white'>Easy Use</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='lg:w-5 lg:h-5 px-1 py-1 lg:px-[2.5px] lg:py-[2.5px] text-xs lg:text-sm text-blue-800 bg-blue-100 rounded-full'><FaCheck /></span> <span className='text-zinc-600 dark:text-white'>Out Of Box</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 text-blue-500'><span>Show more</span><IoIosArrowDown /></div>
                    </div>
                    <div className='w-1/4 h-full px-2 lg:px-4 text-sm  text-center dark:bg-zinc-700 rounded-r-md'>
                        <div className='lg:w-32 w-20 py-2 lg:py-5 lg:mx-auto rounded-b-lg h-28 lg:h-32 bg-blue-50 text-black'>
                            <h1 className='mb-4 text-3xl font-medium'>9.1</h1>
                            <div className='mb-1'>Very Good</div>
                            <div className='flex justify-center text-yellow-500'><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiStar /></div>
                        </div>
                        <button className='lg:h-12 h-8 w-20 lg:mt-52 mt-40 text-white bg-blue-500 rounded-lg lg:w-56'>View</button>
                    </div>

                    <span className='absolute w-auto h-auto lg:px-4 lg:py-2 px-3 py-1 text-center bg-white border-[1px] border-zinc-400 rounded-full lg:-left-4 -left-1 top-7 text-black'>4</span>
                </div>
            </div>
        </div>
    )
}

export default Mainpage