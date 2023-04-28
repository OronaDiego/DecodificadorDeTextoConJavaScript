// Función para encriptar el mensaje del usuario y mostrarlo en la página
function encriptar(mensaje_original) {
    let mensaje_encriptado = mensaje_original
      .replace(/e/g, 'entrer')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    return mensaje_encriptado;
  }

  // Función para desencriptar el mensaje del usuario y mostrarlo en la página
  function desencriptar(mensaje_encriptado) {
    let mensaje_desencriptado = mensaje_encriptado
      .replace(/entrer/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    return mensaje_desencriptado;
  }

  // Función para encriptar el mensaje del usuario y mostrarlo en la página
  function encriptarMensaje() {
    const mensajeOriginalElement = document.getElementById('mensaje-original');
    const mensaje_original = mensajeOriginalElement.value;
    const mensaje_encriptado = encriptar(mensaje_original);
    const mensajeResultanteElement = document.getElementById('mensaje-resultante');
    mensajeResultanteElement.value = mensaje_encriptado;
    
    
    mensajeResultanteElement.style.backgroundImage = 'none';
    mensajeResultanteElement.addEventListener('input', mostrarImagenPorDefecto);
    
    
  }

  // Función para desencriptar el mensaje del usuario y mostrarlo en la página
  function desencriptarMensaje() {
    const mensajeOriginalElement = document.getElementById('mensaje-original');
    const mensaje_encriptado = mensajeOriginalElement.value;
    const mensaje_desencriptado = desencriptar(mensaje_encriptado);
    const mensajeResultanteElement = document.getElementById('mensaje-resultante');
    mensajeResultanteElement.value = mensaje_desencriptado;
    
    
    mensajeResultanteElement.style.backgroundImage = 'none';
    mensajeResultanteElement.addEventListener('input', mostrarImagenPorDefecto);
    
  }

  // Función para copiar el mensaje encriptado o desencriptado al portapapeles
  function copiarMensaje() {
    const mensajeResultanteElement = document.getElementById('mensaje-resultante');
    if (mensajeResultanteElement.value) {
      mensajeResultanteElement.select();
      navigator.clipboard.writeText(mensajeResultanteElement.value);
    }
  }
  
  // Función para mostrar la imagen por defecto si el campo de texto está vacío
function mostrarImagenPorDefecto() {
  const mensajeResultanteElement = document.getElementById('mensaje-resultante');
  if (!mensajeResultanteElement.value) {
    mensajeResultanteElement.style.backgroundImage = 'url(Muñeco.png)';
  } else {
    mensajeResultanteElement.style.backgroundImage = 'none';
  }
}

