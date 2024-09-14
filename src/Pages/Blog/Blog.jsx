import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Blog = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/all-blogs")
            return data
        }
    })
    console.log(blogs);

    const publishedBlogs = blogs.filter(blog => blog.status === 'published');

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

                    <div>
                        {publishedBlogs.length > 0 ? (
                            <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                                {publishedBlogs.map((blog) => (
                                    <div key={blog._id}>
                                        <img
                                            className="relative z-10 object-cover w-full rounded-md h-96"
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                        />
                                        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                                            <a href="#" className="font-semibold text-gray-800 hover:underline md:text-xl">
                                                {blog.title}
                                            </a>
                                            <p className="mt-3 text-sm text-gray-500 md:text-sm">
                                                {blog.content}
                                            </p>
                                            <p className="mt-3 text-sm text-blue-500">{new Date(blog.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                                <div className="text-center">
                                    <h2>No blog available</h2>
                                    <br />
                                    <h2>Please add a blog</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
