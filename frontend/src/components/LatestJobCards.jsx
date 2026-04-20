import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/description/${job?._id}`)} 
      className="p-5 rounded-lg shadow-md bg-white border border-gray-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <img 
          src={job?.company?.logo} 
          alt={job?.company?.name}
          className="w-10 h-10 rounded-md object-contain border"
        />
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>{job?.company?.location || "India"}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600 line-clamp-2'>{job?.description}</p>
      </div>
      
      <div className='flex items-center gap-2 mt-4 flex-wrap'>
        <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Positions</Badge>
        <Badge className='text-[#F83002] font-bold' variant="ghost">{job?.jobType}</Badge>
        <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary} LPA</Badge>
      </div>
    </div>
  )
}


export default LatestJobCards