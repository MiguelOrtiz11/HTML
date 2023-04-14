// Función para encriptar texto usando el cifrado César
function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      if (char >= 65 && char <= 90) {
        char = ((char - 65 + shift) % 26) + 65;
      } else if (char >= 97 && char <= 122) {
        char = ((char - 97 + shift) % 26) + 97;
      }
      result += String.fromCharCode(char);
    }
    return result;
  }
  
  // Función para desencriptar texto usando el cifrado César
  function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
  }
  
  // Función para manejar el evento 'click' del botón de encriptar
  function handleEncrypt() {
    const inputText = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedText = encrypt(inputText, shift);
    document.getElementById('output-text').value = encryptedText;
  }
  
  // Función para manejar el evento 'click' del botón de desencriptar
  function handleDecrypt() {
    const inputText = document.getElementById('input-text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedText = decrypt(inputText, shift);
    document.getElementById('output-text').value = decryptedText;
  }