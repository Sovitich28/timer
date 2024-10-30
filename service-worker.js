self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // You can cache files here if needed
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Service Worker fetching.');
  });
  