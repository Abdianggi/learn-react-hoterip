import { useState } from "react";

export default function Carousel({slides}){
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    
    return(
        <div className="overflow-hidden relative">
           <div
                className={`flex transition ease-out duration-700`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s) => {
                    return <img key={s.id} src={s.img} alt={s.title} className="object-none object-center"/>
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
                <button className="bg-slate-200 hover:bg-slate-700 px-2 py-1 rounded-md  text-slate-700 hover:text-white text-xs font-bold ease-in duration-300" onClick={previousSlide}>
                    {'<'}
                </button>
                <button className="bg-slate-200 hover:bg-slate-700 px-2 py-1 rounded-md text-slate-700 hover:text-white text-xs font-bold ease-in duration-300" onClick={nextSlide}>
                    {`>`}
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-5 h-5 cursor-pointer  ${
                            i == current ? "bg-white" : "bg-gray-500"
                        }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    )
}