import React, {useEffect, useState} from 'react';
import firebaseConfig from '../../firebaseConfig.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import './style.css';

import fotoIntro from '../../imgs/fotoIntro.png';
import wppIcon from '../../imgs/wppIcon.png';
import instaIcon from '../../imgs/instaIcon.png';
import depoimentos from '../../imgs/depoimentos.png';
import sobreMim from '../../imgs/sobreMim.png';

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

        const id = firebase.database().ref().child('posts').push().key

        firebase.database().ref('leads/' + id).set({
            name: formData.name,
            email: formData.email
        }).then(()=>alert('Prontinho! agora você vai precisar entrar grupo do whatsapp para receber o link das aulas e um bônus incrível!'));
        
    }
    
  return (

    <div className="App">

        <div className='intro' >
            <h1>Semana do<br/> <span>Canva</span> Criativo</h1>
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

                <p>Se a resposta for sim, quero te fazer um <span>convite especial!</span> Dos dias 01 a 03 de maio vai rolar a <span>Semana do Canva Criativo,</span> 100% gratuita e 100% online.</p>

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
                        <li>O canva simplificado</li>
                        <li>Por que é importante ter uma marca pessoal?</li>
                        <li>Definindo a paleta de cores da sua marca pessoal</li>
                    </ul>

                </div>

                <div className='daysCourse' >

                    <div className='dayCourseCircle' >
                        <h2>Dia</h2>
                        <h2>2</h2>
                    </div>

                    <h3>Canva para estudantes criativos</h3>

                    <ul>
                        <li>Como conciliar estudos e criação de conteúdo</li>
                        <li>Como criar posts mais rápidos </li>
                    </ul>

                </div>

                <div className='daysCourse' >

                    <div className='dayCourseCircle' >
                        <h2>Dia</h2>
                        <h2>3</h2>
                    </div>

                    <h3>Canva para empreendedores criativos</h3>

                    <h5>DIA COM PROGRAMAÇÃO MUITO ESPECIAL!</h5>
                    <ul>
                        <li>Parte 1: "Meu instagram virou minha empresa, e agora?" - Aula com a participação da advogada empresarial Amanda Pires </li>
                        <li>Parte 2: Montando o site do meu negócio pelo canva  </li>
                        <li>Parte 3: Surpresa e bônus!</li>
                    </ul>

                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#707D65" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,266.7C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </section>

        <section className='DefaultSection greenBackgroud divForm'>

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

                <p>E para <b>FINALIZAR</b> sua inscrição você vai precisar entrar no grupo do WhatsApp clicando no ícone abaixo.</p>
                <br/>
                <p>É por lá que vai receber todas as informações sobre o evento incluindo o link das aulas ao vivo e também um bônus muito especial que preparei para você.</p>


            </div>

            <div className='whatsappButton' >

                <a href='https://chat.whatsapp.com/EsAtg17ZZ4JEOrvxmpdV4X-- ' target="_blank" > <img src={wppIcon} /> </a>

            </div>

            <span>Fique tranquila(o), nesse grupo somente os administradores irão falar e você não vai receber notificação a todo momento.</span>

        </section>

        <section className='DefaultSection depoimentos greenBackgroud'>

            <figure>

                <img src={depoimentos} />

                <figcaption>Depoimentos <br/>dos criativos</figcaption>

            </figure>


        </section>
        
        <section className='DefaultSection aboutMe greenBackgroud'>

            <h2>Quem é @laizaagomes?</h2>

            <div className='textAboutMe' >

                <p>Meu nome é Laiza, tenho 23 anos, sou estudante de Nutrição e empreendedora digital.<br/><br/>

                Sempre curti muito a arte e tudo que envolve processos criativos.<br/><br/>

                Por conta disso, trabalhei como fotógrafa durante 1 ano e meio, mais ou menos, conciliando o trampo com a faculdade. Era por meio da arte da fotografia que eu expressava minhas ideias de criação.<br/><br/>

                Até que chegou o tempo que não consegui mais conciliar trabalho e faculdade. Deixei a fotografia. Mas sentia falta de criar.<br/><br/>

                Foi aí que, em 2018, conheci o canva por demanda da faculdade, para fazer trabalhos e projetos para a Nutrição. Desde então, nunca mais larguei do canva. Faço tudo por lá.<br/><br/>

                O canva me permite ter o contato com a arte de volta.<br/><br/>

                Depois de quase 3 anos usando o canva diariamente, decidi abrir meu Instagram para ensinar tudo que sei sobre criatividade. E para ser bem sincera, só tomei essa decisão porque a galera que me acompanha no insta pedia dicas de canva todo santo dia. Senti a necessidade em compartilhar mais.<br/><br/>

                Hoje em dia, ajudo estudantes e empreendedores, que querem se destacar no meio digital, a treinarem a criatividade não só pelo canva, mas também nos stories (por meio dos tutorias de story criativo).</p>

            </div>

                <figure>

                    <img src={sobreMim} />

                    <figcaption>
                        <img src={instaIcon} />
                        <a href='https://www.instagram.com/laizaagomes/' target="_blank" >@laizaagomes</a>
                    </figcaption>

                </figure>


        </section>

    </div>

  );
}

export default Home;
