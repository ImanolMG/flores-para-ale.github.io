onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

function mostrarMensaje() {
    alert("Feliz dia del amor y amistad Ale :) 🧡❤");
}

// Llamada a la función después de 5 segundos (5000 milisegundos)
setTimeout(mostrarMensaje, 7000);