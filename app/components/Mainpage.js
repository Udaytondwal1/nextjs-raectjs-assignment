import React from 'react'

const Mainpage = () => {
    return (
        <div className='w-full h-full py-10 Main-container px-72 bg-zinc-50'>
            <span className='text-5xl'>Best Website builders in the US</span>
            <div className='text-sm mt-7 mb-14'>
                <div className='line w-full h-[1.5px] bg-zinc-400'></div>
                <div className='flex justify-between py-3'>
                    <div className='flex gap-10'>
                        <span>Last Updated - February 22,2020</span>
                        <span>Advertising Disclosure</span>
                    </div>
                    <span>Top Relevent</span>
                </div>
                <div className='line w-full h-[1.5px] bg-zinc-400'></div>
                <div className='flex gap-12 px-2 mt-6'>
                    {
                        ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"].map((item) => {
                            return <div className='w-auto h-auto px-2 py-1 bg-white rounded-md'>{item}</div>
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
                <div className='relative h-[34vh] bg-white Product w-[61vw] rounded-lg mt-5 flex'>
                    <div className='w-1/4 h-full'>
                        <div className='w-32 h-32 mx-auto my-20 text-sm text-center'><img className='mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                        <span>Builder 1</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-4 py-5'>
                        <p className='mb-1'><strong>WixPro 72-Inch Responsive Website Builder</strong> - Comperhensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='ml-5 mt-3 mb-4 w-[30vw]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                        <span className='text-blue-500'>Show more *</span>
                    </div>
                    <div className='w-1/4 h-full px-4 text-sm text-center'>
                        <div className='w-32 py-2 mx-auto rounded-b-lg h-28 bg-blue-50'>
                            <h1 className='mb-4 text-3xl font-medium'>9.8</h1>
                            <div>Exceptional</div>
                            <div className='text-yellow-500'>*****</div>
                        </div>
                        <button className='w-48 h-10 mt-20 text-white bg-blue-500 rounded-lg'>View</button>
                    </div>
                    <span className='absolute w-auto h-auto px-2 py-1 text-center text-white bg-orange-500 rounded-r-lg -left-2 -top-4'>Best Choice</span>
                    <span className='absolute w-auto h-auto px-4 py-2 text-center bg-white border-[1px] border-zinc-400 rounded-full -left-4 top-7'>1</span>
                </div>
                <div className='relative h-[34vh] bg-white Product w-[61vw] rounded-lg mt-5 flex'>
                    <div className='w-1/4 h-full'>
                    <div className='w-32 h-32 mx-auto my-20 text-sm text-center'><img className='mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                        <span>Builder 2</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-4 py-5'>
                        <p className='mb-1'><strong>SiteCraft 68-Inch Ultimate Web Design Studio</strong> - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='ml-5 mt-3 mb-4 w-[30vw]'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                        <span className='text-blue-500'>Show more *</span>
                    </div>
                    <div className='w-1/4 h-full px-4 text-sm text-center'>
                        <div className='py-2 mx-auto rounded-b-lg w-28 h-28 bg-blue-50'>
                            <h1 className='mb-4 text-3xl font-medium'>9.5</h1>
                            <div>Excellent</div>
                            <div className='text-yellow-500'>*****</div>
                        </div>
                        <button className='w-48 h-10 mt-20 text-white bg-blue-500 rounded-lg'>View</button>
                    </div>
                    <span className='absolute w-auto h-auto px-2 py-1 text-center text-white bg-orange-500 rounded-r-lg -left-2 -top-4'>Best Value</span>
                    <span className='absolute w-auto h-auto px-4 py-2 text-center bg-white border-[1px] border-zinc-400 rounded-full -left-4 top-7'>2</span>
                </div>
                <div className='relative h-[34vh] bg-white Product w-[61vw] rounded-lg mt-5 flex'>
                    <div className='w-1/4 h-full'>
                        <div className='w-32 h-32 mx-auto my-20 text-sm text-center'><img className='mb-3' src='https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'></img>
                        <span>Builder 3</span>
                        </div>
                    </div>
                    <div className='w-2/3 h-full px-4 py-5'>
                        <p className='mb-1'><strong>WixPro 72-Inch Responsive Website Builder</strong> - Comperhensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <span className='font-bold'>Main highlights</span>
                        <p className='ml-5 mt-3 mb-4 w-[30vw]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                        <span className='text-blue-500'>Show more *</span>
                    </div>
                    <div className='w-1/4 h-full px-4 text-sm text-center'>
                        <div className='w-32 py-2 mx-auto rounded-b-lg h-28 bg-blue-50'>
                            <h1 className='mb-4 text-3xl font-medium'>9.3</h1>
                            <div>Exceptional</div>
                            <div className='text-yellow-500'>*****</div>
                        </div>
                        <button className='w-48 h-10 mt-20 text-white bg-blue-500 rounded-lg'>View</button>
                    </div>
                    
                    <span className='absolute w-auto h-auto px-4 py-2 text-center bg-white border-[1px] border-zinc-400 rounded-full -left-4 top-7'>3</span>
                </div>
            </div>
        </div>
    )
}

export default Mainpage