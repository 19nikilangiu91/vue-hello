// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Hello to Everyone!",
        myClass: "red",
        myImage: "media", 
        myMedia: "https://unsplash.it/600/300?image=171",
      }
    }
  }).mount("#myApp")