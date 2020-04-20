import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (error) => setErrorMessage(error.message)
    );
  }, []);

  return [lat, errorMessage];
};

export default useLocation;