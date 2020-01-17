import socketio from 'socket.io-client';
import { API_URL_CONNECTION } from 'react-native-dotenv';

const socket = socketio(API_URL_CONNECTION, {
  autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }

  socket.connect();
}

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
};
