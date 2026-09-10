document.getElementById('formTurno').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario
  
  const nombre = document.getElementById('nombre').value;
  const especialidad = document.getElementById('especialidad').value;
  const mensajeDiv = document.getElementById('mensajeConfirmacion');

  if (nombre.trim() !== '') {
    mensajeDiv.textContent = `¡Turno confirmado con éxito para ${nombre} en la especialidad de ${especialidad}!`;
    mensajeDiv.style.color = '#059669';
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.marginTop = '10px';
    mensajeDiv.style.backgroundColor = '#ecfdf5';
    mensajeDiv.style.borderRadius = '4px';
    
    // Limpiar el formulario
    document.getElementById('formTurno').reset();
  }
})