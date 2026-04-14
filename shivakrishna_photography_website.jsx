import React, { useState } from "react";

export default function ShivakrisnaPhotography() {

  const items = [
    { name: "Album Sheets (Per Sheet)", price: 500 },
    { name: "Traditional Video (Per Day)", price: 7000 },
    { name: "Drone (Per Day)", price: 8000 },
    { name: "LED Screen (Per Day)", price: 12000 },
    { name: "Pre Wedding Shoot (Per Day)", price: 30000 },
    { name: "Cinematic Video (Per Day)", price: 15000 },
    { name: "Candid Photography (Per Day)", price: 10000 },
    { name: "Baby Shoot (Per Day)", price: 25000 },
    { name: "Saree / Dothi Ceremony (Per Day)", price: 28000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, { ...item, qty: 1 }]);
  };

  const updateQty = (index, qty) => {
    const updated = [...cart];
    updated[index].qty = Number(qty);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="font-sans">

      {/* Hero */}
      <div className="h-screen bg-black text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Shivakrisna Photography</h1>
        <p className="mt-4">For bookings & quotations</p>
        <p className="text-2xl mt-2">📞 9553272893</p>
      </div>

      {/* Gallery */}
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://drive.google.com/uc?export=view&id=1OQo_N9T6Jbm8Q3ZtnGvESflZWj50Ank2" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="https://drive.google.com/uc?export=view&id=1wQOQhiPr8YDjjGVU1gsTSL8Wzy8JPKWe" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="https://drive.google.com/uc?export=view&id=1tu8tQFpztOqne87OjNJwQKqn_LUwuIT0" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="https://drive.google.com/uc?export=view&id=1cmRlEFSQats6Nzp0-uSj2EU1GYkvhTKM" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="https://drive.google.com/uc?export=view&id=1tu8tQFpztOqne87OjNJwQKqn_LUwuIT0" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
          <img src="https://drive.google.com/uc?export=view&id=1zKIN9danJ9UcQsNTh91nMqN6GVU3FtIT" className="h-60 w-full object-cover rounded-xl hover:scale-105 transition duration-300" />
        </div>
      </div>

      {/* Wedding Packages */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">💍 Wedding Packages</h2>
        <p className="text-center">Multiple packages available</p>
      </div>

      {/* Cradle */}
      <div className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">👶 Cradle Ceremony Packages</h2>
        <p className="text-center">Basic & Premium options available</p>
      </div>

      {/* Birthday */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">🎉 Birthday Packages</h2>
        <p className="text-center">From basic to premium</p>
      </div>

      {/* Saree */}
      <div className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">👗 Saree Ceremony or Dothi Ceremony Packages</h2>
        <p className="text-center">All levels available</p>
      </div>

      {/* Demo Album */}
      <div className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">📖 Demo Albums</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" className="h-56 w-full object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold">Wedding Album</p>
              <a href="/mnt/data/Wedding.pdf" target="_blank" className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-xl">View Album</a>
              <a href="/mnt/data/Wedding 2.pdf" target="_blank" className="inline-block mt-3 ml-3 bg-gray-800 text-white px-4 py-2 rounded-xl">View Album 2</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486" className="h-56 w-full object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold">Birthday Album</p>
              <a href="/mnt/data/Birthday Shoot.pdf" target="_blank" className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-xl">View Album</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9" className="h-56 w-full object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold">Baby Shoot Album</p>
              <a href="/mnt/data/Pre Wedding Shoot.pdf" target="_blank" className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-xl">View Pre Wedding Album</a>
              <a href="/mnt/data/Engagement.pdf" target="_blank" className="inline-block mt-3 ml-3 bg-gray-800 text-white px-4 py-2 rounded-xl">View Engagement Album</a>
              <a href="/mnt/data/Cradle Ceremony 2(1).pdf" target="_blank" className="inline-block mt-3 ml-3 bg-gray-800 text-white px-4 py-2 rounded-xl">View Cradle Album</a>
              <a href="/mnt/data/Half Saree Ceremony.pdf" target="_blank" className="inline-block mt-3 ml-3 bg-gray-800 text-white px-4 py-2 rounded-xl">View Half Saree Album</a>
            </div>
          </div>

        </div>
      </div>

      {/* Customize Package (LAST) */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">✨ Customize Your Package</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div>
            {items.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
                <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-4 py-2 rounded-xl">
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Your Package</h3>

            {cart.map((item, index) => (
              <div key={index} className="mb-3">
                <p>{item.name}</p>
                <input type="number" value={item.qty} min="1" onChange={(e)=>updateQty(index,e.target.value)} />
                <p>₹{item.price * item.qty}</p>
              </div>
            ))}

            <hr className="my-4" />
            <h3>Total: ₹{total}</h3>
          </div>

        </div>
      </div>

      {/* WhatsApp Send Package */}
      <div className="p-10 text-center bg-green-100">
        <h2 className="text-2xl font-bold mb-4">📲 Send Your Package on WhatsApp</h2>
        <a
          href={`https://wa.me/919553272893?text=Hello Shivakrisna Photography, I want to book a package.`}
          target="_blank"
          className="bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold"
        >
          Send on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-center p-4">
        <p>© 2026 Shivakrisna Photography</p>
      </div>

    </div>
  );
}
