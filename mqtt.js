// Import pustaka MQTT.js
const mqtt = require('mqtt');

// Konfigurasi koneksi ke broker MQTT
const client = mqtt.connect("mqtt://10.168.1.28:1883", {
  host: '10.168.1.28',      // Alamat broker MQTT
  port: 1883,              // Port koneksi TCP MQTT
  protocol: 'mqtt',           // Protokol koneksi (mqtt/tcp/ws)
  username: 'telegram:telegram',      // Username MQTT
  password: 'rastek@telegram',   // Password MQTT
});

// Event handler untuk koneksi berhasil
client.on('connect', () => {
  console.log('Terhubung ke broker MQTT');
  client.subscribe('testtopic'); // Mendengarkan topik MQTT 'jpo/alert'
});

// Event handler untuk menerima pesan
client.on('message', (topic, message) => {
  // Memproses pesan yang diterima
  console.log(`Menerima pesan dari topik ${topic}: ${message.toString()}`);
  // Lakukan sesuatu dengan pesan MQTT yang diterima di sini
  // Contohnya, Anda dapat memanggil fungsi dispatch atau melakukan operasi lainnya.
});

// Event handler untuk menangani kesalahan
client.on('error', (error) => {
  console.error(`Error: ${error}`);
  // Lakukan sesuatu dengan error yang terjadi di sini
});

// Menjalankan klien MQTT
client.on('close', () => {
  console.log('Koneksi ke broker MQTT ditutup');
});

// Menjalankan klien MQTT
client.on('offline', () => {
  console.log('Klien MQTT dalam mode offline');
});

// Menjalankan klien MQTT
client.on('reconnect', () => {
  console.log('Kembali terhubung ke broker MQTT');
});

// Jangan lupa untuk menyalakan klien MQTT
client.on('end', () => {
  console.log('Koneksi ke broker MQTT diakhiri');
});
