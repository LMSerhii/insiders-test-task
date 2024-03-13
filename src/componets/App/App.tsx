import { useEffect, useState } from 'react';
import './App.css';
import BuyToken from '../BuyToken/BuyToken';
import Layout from '../Layout/Layout';

export default function App() {
  const [usdtEthPrice, setUsdtEthPrice] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('wss://fstream.binance.com/ws/ethusdt@aggTrade');

    ws.onopen = () => {
      setMessage('Connected to Binance WebSocket');
    };

    ws.onmessage = event => {
      try {
        const message = JSON.parse(event.data);

        if (message && message.p) {
          setUsdtEthPrice(message.p);
        } else {
          throw new Error('Invalid data received from WebSocket');
        }

        setError(false);
      } catch (error) {
        setError(true);
        setMessage('Error parsing data from WebSocket');
      }
    };

    ws.onerror = () => {
      setError(true);
      setMessage('WebSocket connection error');
    };

    ws.onclose = () => {
      setError(true);
      setMessage('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Layout>
      <BuyToken usdtEthPrice={usdtEthPrice} error={error} message={message} />
    </Layout>
  );
}
