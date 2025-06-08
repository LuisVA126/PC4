function Consoles({ addToCart }) {
  const consoles = [
    {
     id: 13,
      name: "PlayStation 5",
      price: 499.99,
      image: "images/igm3.jpg",
      category: "consolas"
    },
    {
      id: 14,
      name: "Xbox Series X",
      price: 499.99,
      image: "images/igm2.jpg",
      category: "consolas"
    },
    {
      id: 15,
      name: "Nintendo Switch OLED",
      price: 349.99,
      image: "images/igm1.jpg",
      category: "consolas"
    },
    {
      id: 16,
      name: "Steam deck",
      price: 499.99,
      image: "images/igm4.jpg",
      category: "consolas"
    },
    {
      id: 17,
      name: "Nintendo 3DS",
      price: 499.99,
      image: "images/igm5.jpg",
      category: "consolas"
    },
    {
      id: 17,
      name: "Nintendo Switch lite dorado",
      price: 499.99,
      image: "images/igm8.jpg",
      category: "consolas"
    },
    {
      id: 17,
      name: "Nintendo Switch lite azul",
      price: 499.99,
      image: "images/igm7.jpg",
      category: "consolas"
    },
    {
      id: 18,
      name: "Nintendo switch 2",
      price: 499.99,
      image: "images/igm6.jpg",
      category: "consolas"
    },
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CONSOLAS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {consoles.map(console => (
          <ProductCard 
            key={`console-${console.id}`} 
            product={console} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}