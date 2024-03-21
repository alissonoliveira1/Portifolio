import './App.css'
import img1 from './imagens/img1.png'
import img2 from './imagens/img2.png'
import img3 from './imagens/img3.png'
import {ReactComponent as Github} from './imagens/github.svg'
import {ReactComponent as Email} from './imagens/envelope-at-fill.svg'
import {ReactComponent as Linkedin} from './imagens/linkedin (1).svg'
import TypingAnimation from './component/texto';
export default function App(){
  


  return(
    <div className='container'>
   
      <div className='img1'><img src={img3}/></div>
      <div className='conatiner-text'>
        <div><TypingAnimation/></div>

        <div className='div-contato'>
          <div className='text-contato'><span>Contato - contact</span></div>
          <div className='icons'><a target='_blank' href='https://github.com/alissonoliveira1'><Github className='icon'/></a><a target='_blank' href='https://mail.google.com/mail/u/0/?fs=1&to=alissonoliveira201339@gmail.com&tf=cm'><Email  className='icon'/></a><a target='_blank' href='https://www.linkedin.com/in/alisson-oliveira-55a803232/'><Linkedin  className='icon'/></a></div></div>
      </div>
      <div className='img1'><img src={img1}/></div>
    </div>
    
  )
}
