import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import firebaseConfig from '../../firebaseConfig.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import './style.css';

import fotoIntro from '../../imgs/fotoIntro.png';
import wppIcon from '../../imgs/wppIcon.png';

function Home() {

    const [formData, setFormData] = useState({

        name: '',
        email: ''

    })

    function handleInputChange(event) {

        const {name, value} = event.target
        setFormData({

            ...formData, [name]: value

        })
        
    }

    useEffect(()=> {

        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

    })

    function sendLeadInfo() {

        firebase.database().ref('leads/' + 0).set({
            name: formData.name,
            email: formData.email
        }).then(()=>alert('Prontinho! agora você vai precisar entrar grupo do whatsapp para receber o link das aulas e um bônus incrível!'));
        
    }
    
  return (

    <div className="App">

        <div className='intro' >
            <h1>Semana do<br/> <span>Canva</span> criativo</h1>
        </div>

        <div className='imgIntro'>

            <figure>
                
                <img src={fotoIntro} alt='foto de introdução' />

                <div className='subtitle' >

                    <figcaption>
                        Aprenda a usar o canva de<br/> forma criativa para construir a<br/> sua marca no digital!<br/>
                    </figcaption>

                </div>

            </figure>

            <div className='DefaultDiv phraseOne'>

                <p>Hello criativa(o), muito massa ter você por aqui! Deixa eu te perguntar, você quer muito divulgar seu trabalho e/ou seus estudos no Instagram mas sente que não consegue ser criativa(o) na hora de fazer os posts?</p>

            </div>

        </div>

        <section className='DefaultSection greenBackgroud'>

            <div className='DefaultDiv phraseTwo whiteBackgroud'>

                <p>Se a resposta for sim, quero te fazer um <span>convite especial!</span> Dos dias 28 a 30 de abril vai rolar a <span>Semana do Canva Criativo,</span> 100% gratuita e 100% online.</p>

            </div>

            <div className='DefaultDiv phraseThree'>

                <a className='buttonIWant' href='#formOptions' >JÁ QUERO PARTICIPAR</a>

                <p>Serão 3 dias de aulas ao vivo em que eu vou te mostrar, na prática, formas de criar conteúdos no canva que tenham a sua personalidade estampada pra você fugir do monótono e do igualzão que todo mundo replica por aí.</p>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D1DCE2" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,266.7C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </section>

        <section className='DefaultSection blueBackgroud'>

            <div className='DefaultDiv willLearn'>

                <h2>O que você vai aprender?</h2>

                <div className='daysCourse' >

                    <div className='dayCourseCircle' >
                        <h2>Dia</h2>
                        <h2>1</h2>
                    </div>

                    <h3>O Canva e a minha marca pessoal</h3>

                    <ul>
                        <li>Apresentação do Canva</li>
                        <li>Dicas de como montar uma paleta de cores que representem você e sua marca</li>
                        <li>Combinando fontes de forma fácil e que combinam com o seu negócio
                        Pensando no seu perfil criativo</li>
                    </ul>

                </div>

                <div className='daysCourse' >

                    <div className='dayCourseCircle' >
                        <h2>Dia</h2>
                        <h2>2</h2>
                    </div>

                    <h3>Canva para estudantes criativos</h3>

                    <ul>
                        <li>Conciliando estudos e postagens</li>
                        <li>Formas rápidas de criar no canva</li>
                        <li>Como posso utilizar o canva dentro da faculdade?</li>
                    </ul>

                </div>

                <div className='daysCourse' >

                    <div className='dayCourseCircle' >
                        <h2>Dia</h2>
                        <h2>3</h2>
                    </div>

                    <h3>Canva para empreendedores criativos</h3>

                    <ul>
                        <li>Criando o site do seu negócio no canva</li>
                        <li>Como utilizar o canva para construir o império da sua marca </li>
                        <li>Como montar um feed criativo para meu empreendimento?</li>
                    </ul>

                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#707D65" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,266.7C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </section>

        <section className='DefaultSection greenBackgroud'>

            <div className='formOptions' id='formOptions' >

                <fieldset>

                    <legend>
                        <h2>Gostou?</h2>
                        <h3>Então não perde tempo não, inscreva-se bem aqui:</h3>
                    </legend>

                    <input name='name' onChange={handleInputChange} placeholder='Nome' />

                    <input name='email' onChange={handleInputChange} placeholder='E-mail' />

                    <a onClick={()=>{sendLeadInfo()}} >Enviar</a>

                </fieldset>

                <p>E para receber o link nos dias das aulas ao vivo + um bônus incrível que preparei para você, entre no nosso grupo do whatsapp clicando no ícone abaixo:</p>

            </div>

            <div className='whatsappButton' >

                <img src={wppIcon} />

            </div>

        </section>

        <section className='DefaultSection'>

            <h2>Depoimentos dos criativos</h2>

        </section>

    </div>

  );
}

export default Home;
