import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Decrementar el contador cada segundo
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // Redirigir al home cuando el contador llegue a 0
    if (seconds === 0) {
      clearInterval(interval); // Detener el intervalo
      navigate('/'); // Redirigir a la página principal
    }

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [seconds, navigate]);

  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>Serás redirigido al inicio en {seconds} segundos...</p>
    </div>
  );
};

export default NotFound;
