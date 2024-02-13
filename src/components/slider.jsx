import { useEffect } from "react";
import { useState } from "react";

export default function slider({slides, show}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => {
                return prev + 1 === slides.length ? 0 : prev + 1;
            });
        }, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const SliderText = ({isShow}) => {
        if(!isShow) return null;

        return(
            <div className="absolute -translate-x-0 translate-y-[-50%] top-[40%] left-[20%]">
                <h1 className="font-semibold lg:text-6xl sm:text-xl text-slate-100">
                    Explore our
                    <p className="text-[#002975] mt-3">Wonderful <span className="text-slate-100">trips</span></p>
                </h1>
                <p className="mt-6 text-gray-300 lg:text-2xl sm:text-xl lg:w-[34rem] sm:w-auto">Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
        );
    }
    return (
        <div className='h-[32rem] w-full m-auto relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                className='w-full h-full bg-center bg-cover duration-500'></div>
            <SliderText isShow={show}/>
            {/* Left Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl font-bold px-2.5 pb-1 rounded-full bg-black/20 hover:bg-blue-700 text-white cursor-pointer'>
                <div onClick={prevSlide}>{'<'}</div>
            </div>
            {/* Right Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl font-bold px-2.5 pb-1 rounded-full bg-black/20 hover:bg-blue-700 text-white cursor-pointer'>
               <div onClick={nextSlide}>{'>'}</div>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) =>(
                        <div
                        onClick={() => {
                            goToSlide(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-5 h-5 cursor-pointer  ${
                            i == currentIndex ? "bg-[#002975]" : "bg-slate-100"
                        }`}
                        ></div>
                    )
                )}
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={()=> goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                    >
                     
                </div>
                ))}
            </div>
        </div>
    );
}