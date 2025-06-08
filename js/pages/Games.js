function Games({ addToCart }) {
  
  const games = [
    {
       id: 1,
      name: "The Last of Us Part II",
      price: 59.99,
      image: "images/image1.jpeg",
      category: "juegos"
    },  
     {
      id: 2,
      name: "Cyberpunk 2077",
      price: 49.99,
      image: "images/image2.jpeg",
      category: "juegos"
    },
    {
      id: 3,
      name: "Elden Ring",
      price: 59.99,
      image: "images/image3.jpeg",
      category: "juegos"
    },
    {
      id: 4,
      name: "Supermario oddyse",
      price: 29.99,
      image: "images/image4.jpeg",
      category: "juegos"
    },
    {
      id: 5,
      name: "GTA6",
      price: 89.99,
      image: "images/image5.jpeg",
      category: "juegos"
    },
    {
      id: 6,
      name: "God of ward",
      price: 69.99,
      image: "images/image6.jpeg",
      category: "juegos"
    },
    {
      id: 6,
      name: "HORIZON",
      price: 69.99,
      image: "images/image8.jpeg",
      category: "juegos"
    },
    {
      id: 6,
      name: "Borderlands ",
      price: 69.99,
      image: "images/image9.jpeg",
      category: "juegos"
    }
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JUEGOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map(game => (
          <ProductCard 
            key={`game-${game.id}`} 
            product={game} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}