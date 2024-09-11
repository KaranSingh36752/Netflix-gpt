import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video absolute pt-[16rem] pl-[5rem] px-2 bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold pb-2 text-white '>{title}</h1>
      <p className='text-xl font-medium text-white w-1/3'>{overview}</p>
      <div className='flex gap-2 mt-8'>
        {/* Button A: 150ms transition duration on hover */}
        <button className='px-10 py-4 bg-opacity-95 rounded-md text-lg text-black bg-white font-bold flex items-center transition duration-0 hover:duration-150 hover:bg-gray-400'>
          <span className='text-2xl mt-1 pr-2'><IoPlaySharp /></span>Play
        </button>

        {/* Button B: 300ms transition duration on hover */}
        <button className='px-7 py-4 rounded-md bg-opacity-40 text-lg bg-gray-400 text-white font-bold flex items-center transition duration-0 hover:duration-300 hover:bg-gray-500'>
          <span className='text-2xl mt-1 pr-2'><MdOutlineInfo /></span>More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;
