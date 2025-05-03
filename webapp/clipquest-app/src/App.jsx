import { useState, useEffect } from 'react';

export default function App() {
  const [clip, setClip] = useState(null);

  useEffect(() => {
    const API_URL = "https://addressed-adopted-outline-surveillance.trycloudflare.com"; // Замените на ваш Cloudflare URL

    fetch(`${API_URL}/api/clips?limit=1`)
      .then(response => response.json())
      .then(data => {
        setClip(data[0]);
      })
      .catch(error => console.error('Error fetching clips:', error));
  }, []);

  if (!clip) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>{clip.title}</h1>
      <video src={clip.url} controls style={{ width: '100%' }} />
    </div>
  );
}
