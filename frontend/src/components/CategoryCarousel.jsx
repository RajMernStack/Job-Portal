import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

     return (
    <div>
      <Carousel className="w-full max-w-2xl mx-auto my-12">
        <CarouselContent className="-ml-2 md:-ml-4">
          {
            category.map((cat, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Button 
                  onClick={() => searchJobHandler(cat)} 
                  variant="outline" 
                  className="w-full rounded-full px-6 py-6 text-base font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 -left-16 border-2 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600" />
        <CarouselNext className="h-12 w-12 -right-16 border-2 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600" />
      </Carousel>
    </div>
  )
}


export default CategoryCarousel