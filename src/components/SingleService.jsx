
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function SingleService({allData}) {
    
  return (
    <>
        <article className={`text-center p-10 w-full md:w-1/2 lg:w-1/3 mb-4 ${allData.border} border-orange-200`}>
            <img src={allData.imgUrl} alt="" className='mx-auto'/>
            <h2 className='font-semibold text-xl my-3'>{allData.title}</h2>
            <p>{allData.desc}</p>
            <a href={allData.url} className="font-semibold my-5 inline-flex flex-row gap-1 items-center justify-center">learn more <IoArrowForwardCircleOutline /></a>
        </article>
    </>
  )
}

export default SingleService