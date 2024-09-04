const Blog = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Blood Donation Insights</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Stay Informed and Inspired with the Latest in Blood Donation News and Stories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/34vTSYH/240-F-133781652-kd-Km-M1-A3-Jz-Zoh-Ne-LN9b-Op-Y3b-M4liw-JGW.jpg" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                                <a href="#" className="font-semibold text-gray-800 hover:underline md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/MVQrjWB/cef58128383186c0b86de77f53e39e866eae10a2.jpg" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                                <a href="#" className="font-semibold text-gray-800 hover:underline md:text-xl">
                                    How to use sticky note for problem solving
                                </a>

                                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
