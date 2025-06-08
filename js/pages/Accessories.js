function Accessories({ addToCart }) {
  const accessories = [
    {
        id: 19,
      name: "Mando DualSense PS5",
      price: 69.99,
      image: "images/imag1.jpeg",
      category: "accesorios"
    },
    {
      id: 20,
      name: "Auriculares Gaming",
      price: 89.99,
      image: "images/imag2.jpeg",
      category: "accesorios"
    },
    {
      id: 21,
      name: "Cargador Nintendo Switch",
      price: 29.99,
      image: "images/cargador.jpge.webp",
      category: "accesorios"
    
  },
  {
    id: 22,
    name: "Joy cons Nintendo Switch",
    price: 29.99,
    image: "images/joy.jpg",
    category: "accesorios"
  },
  {
    id: 23,
    name: "Cargador Nintendo Switch",
    price: 29.99,
    image: "images/cargador.jpge.webp",
    category: "accesorios"
  },
  {
    id: 24,
    name: "VR - ps4",
    price: 49.99,
    image: "images/VR.webp",
    category: "accesorios"
  },
  {
    id: 22,
    name: "Mando ediccion Crash",
    price: 29.99,
    image: "images/mando4.webp",
    category: "accesorios"
  },
  {
    id: 22,
    name: "Mando ediccion Super Mario",
    price: 29.99,
    image: "images/mando5.webp",
    category: "accesorios"
  },

  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">ACCESORIOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {accessories.map(accessory => (
          <ProductCard 
            key={`accessory-${accessory.id}`} 
            product={accessory} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}