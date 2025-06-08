const { useState, useEffect, useRef } = React;

function TrashGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(50);
  const [trash, setTrash] = useState([]);
  const [speed, setSpeed] = useState(2);

  const gameAreaRef = useRef(null);
  const binRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setIsPlaying(true);
    setTrash([]);
    setSpeed(2);
    setPosition(50);
  };

  const moveBin = (clientX) => {
    if (!isPlaying || gameOver || !gameAreaRef.current) return;
    
    const gameRect = gameAreaRef.current.getBoundingClientRect();
    const relativeX = clientX - gameRect.left;
    let newPosition = (relativeX / gameRect.width) * 100;
    
    newPosition = Math.max(5, Math.min(95, newPosition));
    
    setPosition(newPosition);
  };

    useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      setTrash(prev => [
        ...prev,
        {
          id: Date.now(),
          left: 10 + Math.random() * 80, 
          top: 0,
          type: Math.floor(Math.random() * 3)
        }
      ]);
    }, 800 - (level * 50)); 

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, level]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveInterval = setInterval(() => {
      setTrash(prev => {
        const binRect = binRef.current?.getBoundingClientRect();
        const gameRect = gameAreaRef.current?.getBoundingClientRect();
        
        return prev.map(item => {

          const newTop = item.top + speed;
          
          if (binRect && gameRect) {
            const itemLeft = gameRect.left + (gameRect.width * item.left / 100);
            const itemTop = gameRect.top + (gameRect.height * newTop / 100);
            
            if (
              itemLeft < binRect.right &&
              itemLeft + 30 > binRect.left &&
              itemTop + 30 > binRect.top &&
              itemTop < binRect.bottom
            ) {
              setScore(s => s + 10);
              return null; 
            }
          }

          if (newTop >= 100) {
            setGameOver(true);
            setIsPlaying(false);
            return null;
          }

          return { ...item, top: newTop };
        }).filter(Boolean); 
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [isPlaying, gameOver, speed]);

  useEffect(() => {
    if (score > 0 && score % (level * 50) === 0) {
      setLevel(prev => prev + 1);
      setSpeed(prev => prev + 0.5);
    }
  }, [score, level]);

  useEffect(() => {
    const handleMouseMove = (e) => moveBin(e.clientX);
    const handleTouchMove = (e) => moveBin(e.touches[0].clientX);

    if (isPlaying && !gameOver) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isPlaying, gameOver]);

  return (
    <div className="container mx-auto p-4 max-w-md"> 
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">RECOLECTOR DE BASURA</h2>
      
      <div className="flex justify-between items-center mb-3">
        <div className="text-gray-800 dark:text-white">
          Puntuación: <span className="font-bold">{score}</span>
        </div>
        <div className="text-gray-800 dark:text-white">
          Nivel: <span className="font-bold">{level}</span>
        </div>
      </div>

      {!isPlaying && (
        <div className="text-center mb-3">
          <button 
            onClick={startGame}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            {gameOver ? 'Jugar de nuevo' : 'Iniciar Juego'}
          </button>
          {gameOver && (
            <p className="mt-2 text-red-500">¡Perdiste! Puntuación final: {score}</p>
          )}
        </div>
      )}

           <div 
        ref={gameAreaRef}
        className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600"
        style={{ aspectRatio: '1/1' }} 
      >
        {trash.map(item => (
          <div 
            key={item.id}
            className="absolute w-6 h-6 rounded-full"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              backgroundColor: ['#FF5733', '#33FF57', '#3357FF'][item.type]
            }}
          ></div>
        ))}

        <div 
          ref={binRef}
          className="absolute bottom-0 w-20 h-16"
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <img 
            src="images/tacho.png" 
            alt="Tacho recolector"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-4 md:hidden">
        <button 
          onTouchStart={() => setPosition(p => Math.max(5, p - 10))}
          className="p-4 bg-gray-300 dark:bg-gray-600 rounded-full"
        >
          ←
        </button>
        <button 
          onTouchStart={() => setPosition(p => Math.min(95, p + 10))}
          className="p-4 bg-gray-300 dark:bg-gray-600 rounded-full"
        >
          →
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-800 dark:text-white">
        <p><strong>Controles:</strong> Mueve el ratón o usa los botones en móvil</p>
        <p><strong>Objetivo:</strong> Atrapa la basura antes de que llegue al fondo</p>
      </div>
    </div>
  );
}