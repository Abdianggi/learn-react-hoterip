export default function CardVertical({title, value, img}){
    return(
        <div className="relative text-gray-700 bg-transparent shadow-md rounded-xl w-full p-6">
            <div className="flex justify-center">
                <img className="w-28" src={img} alt="card-image" />
            </div>
            <div className="block mt-5 mb-2 font-sans text-center antialiased font-semibold leading-snug tracking-normal text-gray-900">
                {title}
            </div>
            <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit text-center">
                {value}
            </p>
            <div className="p-6 pt-0 mt-6 text-center">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Read More
                </button>
            </div>
        </div>
    );
}