import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = [
    "Ola, meu nome é Alisson Oliveira"
  ,"Sou desenvolvedor fullStack"
  ,""
  , "Estudo Eng. Software na UcSal - Universidade Catolica do Salvador"
   ,"Hello, my name is Alisson Oliveira"
   ,"I'm a fullstack developer"
   ,""
   ,"Study Software Engineering at UcSal - Universidade Catolica do Salvador"
 ];
  const typingSpeed = 50; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      // Adiciona a próxima letra à string atual
      currentText += phrases[index].charAt(currentText.length);

      // Atualiza o estado do texto
      setText(currentText);

      // Se a string atual for igual à frase atual, passe para a próxima frase
      if (currentText === phrases[index]) {
        index++;

        // Se chegarmos ao final das frases, reinicie
        if (index === phrases.length) {
          clearInterval(interval);
        } else {
          // Aguarde 1500ms antes de começar a digitar a próxima frase
          setTimeout(() => {
            currentText = ''; // Redefine a string atual
          }, 2500);
        }
      }
    }, typingSpeed);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='texto-Gif'>
      {text}
    </div>
  );
}

export default TypingAnimation;