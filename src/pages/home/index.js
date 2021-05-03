import React, {useEffect, useState} from 'react';
import firebaseConfig from '../../firebaseConfig.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import "firebase/analytics";
import './style.css';

import fotoIntro from '../../imgs/fotoIntro.png';
import wppIcon from '../../imgs/wppIcon.png';
import instaIcon from '../../imgs/instaIcon.png';
import depoimentos from '../../imgs/depoimentos.png';
import sobreMim from '../../imgs/sobreMim.png';


import canvaCriativo from '../../imgs/canvaCriativo.png';
import infoAulas from '../../imgs/infoAulas.png';
import guto from '../../imgs/guto.jpg';
import amandaAdv from '../../imgs/amandaAdv.jpg';
import amandaMed from '../../imgs/amandaMed.jpg';
import ligia from '../../imgs/ligia.jpg';
import thacia from '../../imgs/thacia.jpg';
import garantia from '../../imgs/garantia.png';
import certificado from '../../imgs/certificado.png';
import acessoVitalicio from '../../imgs/acessoVitalicio.png';

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

        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
            firebase.analytics()
        }

    })

    function sendLeadInfo() {

        if (formData.name != '' && formData.email != '') {

            const id = firebase.database().ref().child('posts').push().key

            firebase.database().ref('leads/' + id).set({
                name: formData.name,
                email: formData.email
            }).then(()=>alert('Prontinho! agora você vai precisar entrar grupo do whatsapp para receber o link das aulas e um bônus incrível!'));
            
        }else alert('Por favor, informe todas as informações!.')
        
    }
    
  return (

    <div className="App">

        <div className='intro' >
            {/* <h1>Semana do<br/> <span>Canva</span> Criativo</h1> */}
            <img src={canvaCriativo} />
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

                <a className='buttonIWant' href='https://pay.hotmart.com/P52361325E?checkoutMode=0&bid=1620074562844' target='_blank' >QUERO ADQUIRIR O CURSO</a>

            </div>

        </div>

        <section className='DefaultSection pinkBackgroud'>

            <div className='infoAulas' >

                <figure>

                    <div className='subtitleInfoAulas' >

                        <figcaption>
                        O curso Canva Criativo é pra quem quer construir uma marca forte no meio digital, mas se sente perdida(o) e sem criatividade na hora de criar conteúdo.
                        </figcaption>

                    </div>

                    <img src={infoAulas} alt='foto de introdução' />

                </figure>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D1DCE2" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,266.7C672,309,768,299,864,266.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path></svg>

        </section>

        <section className='DefaultSection blueBackgroud'>

            <div className='DefaultDiv willLearn'>

                <h2>O que você vai aprender?</h2>

                <div className='boxWhatYouWillLearn' >

                    <p> A construir sua marca pessoal e também todas as funções do canva desde o início até os efeitos mais diferentões.</p>

                </div>

                <div className='boxWhatYouWillLearn' >

                    <p>  A criar a sua identidade visual do 0, incluindo paleta de cores, logos, fontes, elementos que se encaixam no seu perfil.</p>

                </div>

                <div className='boxWhatYouWillLearn' >

                    <p> A treinar a criatividade e descobrir qual estilo de design mais se encaixa com o seu perfil.</p>

                </div>

                <div className='boxWhatYouWillLearn' >

                    <p> A usar o canva para ajudar no crescimento do seu negócio digital ou físico (lojinhas, serviço personalizado e profissionais especializados.</p>

                </div>

                <div className='boxWhatYouWillLearn' >

                    <p> A usar o canva para divulgar seu trabalho desde a faculdade, enquanto estudante.</p>

                </div>

                <div className='boxWhatYouWillLearn' >

                    <p> A usar o canva para transformar o seu perfil no Instagram em um perfil criativo e de sucesso.</p>

                </div>


            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C8A096" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,224C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" data-darkreader-inline-fill=""></path></svg>

        </section>

        <section className='DefaultSection pinkBackgroud divGuests'>

            <h4>São mais de 60 aulas organizadas em 10 módulos, sendo o último módulo formado por 5 masterclasses ministradas por 5 convidados incríveis:</h4>

            <div className='guests' >

                <img src={guto} />
                <a href="https://instagram.com/bastosguto" target='_blank'><b>@bastosguto</b></a>
                <p><b>Pensando no marketing do meu Instagram</b></p>
                <h6>Guto Bastos, trabalha com marketing e gestão de tráfego pago (os famosos anúncios online) para perfis do Instagram.</h6>

            </div>

            <div className='guests' >

                <img src={amandaAdv} />
                <a href="https://instagram.com/adv.amandapires" target='_blank'><b>@adv.amandapires</b></a>
                <p><b>"Meu Instagram virou minha empresa, e agora?"</b></p>
                <h6>Amanda Pires, advogada especialista em direito empresarial e civial.</h6>

            </div>

            <div className='guests' >

                <img src={amandaMed} />
                <a href="https://instagram.com/amandapecchio" target='_blank'><b>@amandapecchio</b></a>
                <p><b>Como conciliar rotina de estudos com criação de conteúdo</b></p>
                <h6>Amanda Pecchio, estudante de medicina e empreendedora digital. Fala sobre planejamento e organização.</h6>

            </div>

            <div className='guests' >

                <img src={ligia} />
                <a href="https://instagram.com/ligialinsmais" target='_blank'><b>@ligialinsmais</b></a>
                <p><b>Ética profissional no meio digital</b></p>
                <h6>Lígia Lins, nutricionista e designer de marcas.</h6>

            </div>

            <div className='guests' >

                <img src={thacia} />
                <a href="https://instagram.com/thaciacoutinho" target='_blank'><b>@thaciacoutinho</b></a>
                <p><b>Criatividade no meio acadêmico</b></p>
                <h6>Thácia Coutinho, estudante de nutrição e diretora de comunicação da @ladocufrj.</h6>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#707D65" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,224C480,213,600,139,720,101.3C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" data-darkreader-inline-fill="" ></path></svg>
            
        </section>

        <section className='DefaultSection greenBackgroud divForm'>

            <div className='formOptions' >

                <h2>Gostou?</h2>

                <h3>Então não perde tempo não, adquira todo esse material pelo valor promocional:</h3>

                <h4>de R$197,00</h4>

                <p><b>por 3 x de R$33,96</b></p>

                <h3>à vista R$97,00</h3>

                <div className='DefaultDiv' style={{marginTop:'50px', marginBottom:'50px'}}>

                    <a className='buttonIWant' href='https://pay.hotmart.com/P52361325E?checkoutMode=0&bid=1620074562844' target='_blank' >QUERO ADQUIRIR O CURSO</a>

                </div>


            </div>

            <div className='guarantees' >

                <div className='guaranteesItems' >

                    <img src={garantia} /> 

                    <legend>
                        <p><b>Garantia de 7 dias!</b></p>
                        <p>Caso você não se identifique com o curso por algum motivo, no prazo de 7 dias devolvo seu investimento.</p>
                    </legend>

                </div>

                <div className='guaranteesItems' >

                    <img src={certificado} /> 

                    <legend>
                        <p><b>Certificado de conclusão!</b></p>
                        <p>Ao final do curso, você receberá um certificado de conclusão.</p>
                    </legend>

                </div>

                <div className='guaranteesItems' >

                    <img src={acessoVitalicio} /> 

                    <legend>
                        <p><b>Acesso vitalício!</b></p>
                        <p>Ao adquirir o curso você terá acesso vitálicio ao material e vai poder acessar a hora que quiser.</p>
                    </legend>

                </div> 

            </div>

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
