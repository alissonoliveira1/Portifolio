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
   ,"Alisson Oliveira"
 ];
  const typingSpeed = 50; 

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
     
      currentText += phrases[index].charAt(currentText.length);

     
      setText(currentText);

      
      if (currentText === phrases[index]) {
        index++;

       
        if (index === phrases.length) {
          clearInterval(interval);
        } else {
         
          setTimeout(() => {
            currentText = ''; 
          }, 2500);
        }
      }
    }, typingSpeed);

 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='texto-Gif'>
      {text}
    </div>
  );
}

export default TypingAnimation;