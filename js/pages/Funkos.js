function Funkos({ addToCart }) {
  const funkos = [
    {
      id: 7,
      name: "Funko Pop! Goku",
      price: 14.99,
      image: "images/img1.jpeg",
      category: "funkos"
    },
    {
      id: 8,
      name: "Funko Pop! Harry Pother",
      price: 14.99,
      image: "images/img2.jpeg",
      category: "funkos"
    },
    {
      id: 9,
      name: "Funko Pop! Naruto",
      price: 16.99,
      image: "images/img3.jpeg",
      category: "funkos"
    },
    {
      id: 10,
      name: "Funko Pop! Naruto Modo sabbio",
      price: 16.99,
      image: "images/img4.jpeg",
      category: "funkos"
    },
    {
      id: 11,
      name: "Funko Pop! Gohan",
      price: 16.99,
      image: "images/img5.jpeg",
      category: "funkos"
    },
    {
      id: 12,
      name: "Funko Pop! Bruce lee",
      price: 16.99,
      image: "images/img6.jpeg",
      category: "funkos"
    },
    {
      id: 11,
      name: "Funko Pop! Sonic METAL",
      price: 16.99,
      image: "images/img7.jpeg",
      category: "funkos"
    },
    {
      id: 11,
      name: "Funko Pop! set Harry pother",
      price: 16.99,
      image: "images/img8.jpeg",
      category: "funkos"
    },
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">FUNKOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {funkos.map(funko => (
          <ProductCard 
            key={`funko-${funko.id}`} 
            product={funko} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}