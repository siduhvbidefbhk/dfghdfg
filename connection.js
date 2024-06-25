// Создание объекта WebSocket
const socket = new WebSocket('wss://eth-mainnet.g.alchemy.com/v2/YZa0jDTTSJqmHO99mcg2HHeJGZm3tTkM');

// Обработка событий
socket.onopen = () => {
  console.log('Соединение установлено.');
};

socket.onmessage = (event) => {
  console.log('Получено сообщение:', event.data);
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log(`Соединение закрыто чисто, код: ${event.code}, причина: ${event.reason}`);
  } else {
    console.error('Соединение разорвано');
  }
};

socket.onerror = (error) => {
  console.error('Ошибка:', error.message);
};
