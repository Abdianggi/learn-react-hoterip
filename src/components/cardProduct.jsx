import { useState } from "react";
import Slider from "../components/slider";

const ProductModal = ({ isOpen, item, onClose }) => {
    // if (!isOpen) return null;
    const modalClasses = isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0";

    const slidesImg = item.image ? [
        {
            id   : 0, 
            title: item.title,
            img  : item.thumbnail,
        },
        ...item.image.map((v, i) => ({
            id   : i + 1, 
            title: item.title,
            img  : v,
        }))
    ] : [];

    return (
        <div className={`fixed bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 p-28 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
           <div className={'bg-white rounded-lg shadow-2xl md:flex ${modalClasses}'}>
               {/* <img src={item.thumbnail} alt="Boat" className="rounded-t-lg md:w-1/3 md:rounded-l-lg md:rounded-t-none" /> */}
                <Slider slides={slidesImg} show={false}/>
               
               <div className="p-6">
                   <h2 className="mb-2 font-bold text:xl md:text-2xl text-orange-700">{item.title}</h2>
                   <p className="text-orange-700">{item.desc}</p>
               </div>
            <div onClick={onClose} className="text-amber-900 cursor-pointer mr-5 mt-5 font-bold">x</div>
           </div>
        </div>
    );
};

// Contoh fungsi untuk menambahkan item ke cart di localStorage
const addToCart = (item) => {
    // Coba ambil cart dari localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Cek apakah item sudah ada di cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex > -1) {
      // Jika item sudah ada, tambahkan jumlahnya
      cart[itemIndex].quantity += 1;
    } else {
      // Jika item belum ada, tambahkan item ke cart dengan quantity 1
      const newItem = { ...item, quantity: 1 };
      cart.push(newItem);
    }    
    // Simpan kembali cart yang sudah diupdate ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem("cart")));

};

export const getCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
};

export default function CardProduct({items}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleAddToCartClick = () => {
        addToCart(items);
    };

    return(
        <>
            <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl mx-5 my-5">
                <div onClick={toggleModal} className="cursor-pointer">
                    <img src={items.thumbnail}
                        alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
                </div>
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{items.category}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{items.title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">Rp. {items.price}</p>
                
                        <div id="addCard" className="ml-auto cursor-pointer" onClick={handleAddToCartClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal isOpen={isModalOpen} item={ items } onClose={toggleModal} />
        </>
    );
}