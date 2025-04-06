import { GoArrowUpRight } from "react-icons/go";

function SingleBlog({blogdata}) {
  return (
    <>
        <article className="w-full md:w-1/2 lg:w-1/3">
            <div className="p-5">
                <div className="blog-img h-[240px]">
                    <img src={blogdata.img} alt="" className="h-full w-full object-cover"/>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start mt-3">
                    <span>{blogdata.name}</span>
                    <span className="w-[4px] h-[4px] bg-gray-800 rounded-full"></span>
                    <span>{blogdata.date}</span>
                    {
                        blogdata.today && <> <span className="w-[2px] h-[2px] bg-gray-800 rounded-full"></span>              
                        <span>today</span> </>
                    }
                </div>
                <div className="flex flex-row justify-between items-center my-3">
                    <h2 className="font-bold text-xl">{blogdata.title}</h2>
                    <GoArrowUpRight />
                </div>
                <p>{blogdata.desc}</p>
                <div className="tags mt-3">
                    {
                        blogdata.tags.map((tag,i) => {
                            return <span key={i} className="text-xs bg-red-200 p-1 px-2 rounded-xl me-2">{tag}</span>
                        })
                    }
                </div>
            </div>
        </article>
    </>
  )
}

export default SingleBlog