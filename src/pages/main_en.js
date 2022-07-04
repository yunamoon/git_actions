/* eslint-disable */
import react,{useState , useEffect, useRef}from "react";
import { CSSTransition } from "react-transition-group";
import mainCss from '../css/main.css';
// component import 
import ArticleList from "../Layout/component/articleList";
import Footer from '../Layout/footer_en';
import Header from "../Layout/header_en";
// img import 
import spacefarmModel from '../img/contents//no_spacefarm.png';
import spacefarmModel_en from '../img/contents/en_smartFarm.svg';
import logo_wh from '../img/logo/spacefarm_logo_wh.svg';
import auto from '../img/icon/auto.svg'
import controlAutomation from '../img/icon/data_icon.svg';
import Machine from '../img/icon/Machine.svg';
import Agricultural from '../img/icon/Agricultural.svg';
import smart_tting from '../img/logo/spacefarm_new_logo.svg';
  

function Main() {

  const articleContents = [
    {
      id : 1,  
      rel: 'https://www.dal.ca/sites/agri-food/research/canada-s-food-price-report-2021.html',
      title: 'COVID-19 changes consumer behaviour and affects food prices in surprising ways',
      press: 'By Agri‑Food Analytics Lab',
  },
  {id : 2,  
      rel: 'https://www.worldbank.org/en/topic/agriculture/brief/food-security-and-covid-19',
      title: 'Food Security and COVID-19',
      press: 'By The world bank',
  },
  {id : 3,  
      rel: 'https://edition.cnn.com/2021/11/05/business/world-food-prices-inflation/index.html',
      title: 'World food prices are up 30% in a year',
      press: 'By CNN Business',
  },
  {id : 4,  
      rel: 'https://citylimits.org/2021/12/08/heightened-food-insecurity-in-nyc-likely-to-persist-long-after-pandemic-wanes-experts-say/',
      title: 'Heightened Food Insecurity in NYC Likely to Persist Long After Pandemic Wanes, Experts Say',
      press: 'By city limits',
  },
  {id : 5,  
      rel: 'https://www.fooddive.com/news/follow-the-technology-why-innovation-is-key-to-more-sustainable-food-choic/611597/',
      title: 'Follow the technology: Why innovation is key to more sustainable food choices',
      press: 'By food dive',
  },
  {id : 6,  
      rel: 'https://www.bloomberg.com/news/features/2021-09-02/food-prices-driven-up-by-global-worker-shortage-brexit',
      title: 'Your Food Prices Are at Risk as the World Runs Short of Workers',
      press: 'By bloomberg',
  },
];

      let [scroll , setScroll] = useState(0);
      let [header ,setHeader] = useState(0);
      const outerDivRef = useRef();
    
      function scrollMove(move) {
        outerDivRef.current.scrollTo({
          top: move,
          left: 0,
          behavior: "smooth",
        });
      }
    
      const wheelHandler = (e) => {
        e.preventDefault();
        const {deltaY} = e;
        const {scrollTop} = outerDivRef.current;
        const pageHeight = window.innerHeight;
        setHeader(e.deltaY);
        if (deltaY > 0) {
          setScroll(scrollTop)
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            scrollMove(pageHeight)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            scrollMove(pageHeight*2)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
            scrollMove(pageHeight*3)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
            scrollMove(pageHeight*4)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
            scrollMove(pageHeight*5)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
             scrollMove(pageHeight*6)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 7) {
            scrollMove(pageHeight*7)
          }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 9) {
                scrollMove(pageHeight*9)
          } else  {
          scrollMove(0)
          }
        } else {
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            scrollMove(0)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            scrollMove(0)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
            scrollMove(pageHeight)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
            scrollMove(pageHeight*2)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
            scrollMove(pageHeight*3)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
            scrollMove(pageHeight*4)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight *7) {
            scrollMove(pageHeight*5)
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 8) {
            scrollMove(pageHeight*6)
          } else {
            scrollMove(pageHeight*7)
          }
        }
      };
    
            useEffect(() => {
            if (!outerDivRef.current) return;
              outerDivRef.current.addEventListener("wheel", wheelHandler, { passive: false
            });
            return () => {
              outerDivRef.current.removeEventListener("wheel", wheelHandler, );
            }});

            let [language, setLanguage] = useState("english")

    return (
    
        <div ref={outerDivRef} className={window.innerWidth<=600? 'outer-none en' : 'outer en'} >
            <Header header={header}/>
          {/* spacefarm.co.kr main page HTML (1-7 section)--------------------- */}
          {/* 1. 첫번째 spacefarm intro section --------------------- */}
          
          <div className="contents-wrap spacefarm-intro en_title"> 
          <h1 className={scroll==0 ? 'showText title': 'title' }>
          It has been learned <br/>
          <strong>the sharing of <br className="new-line"/> the nature</strong><br/>
          by a technology.
          </h1>
          <span className="green" style={scroll==0 ? {animation:'showText ease-in-out 0.5s forwards'} : null}> 
         <strong>Indoor farming </strong> utilizing unused <br className="new-line"/> space in the city</span> 
          <h4 className="name" style={scroll==0  ? {animation:'showText ease-in-out 0.5s forwards'} : null}>
          Team SPACEFARM</h4> 
          </div>
        
          {/* 2. 두번째 spacefarm model section  --------------------- */}
          <div className="contents-wrap sapcefram-model" > 
          <img  src={spacefarmModel_en}></img>
          </div>

          {/* 3. 세번째 spacefarm news list section  --------------------- */}
          <div className="contents-wrap-left" > 
          <h5 className={scroll>= window.innerHeight? 'showInnerText label': 'label' }>The necessity of 
          <br className="new-line"/> urban indoor farming</h5>
          <h3 className={scroll>= window.innerHeight?  'showInnerText inner-text': 'inner-text' }>
          The city have be bigger, <br />
          but  <strong>the issue <br className="new-line"/>of a food scarcity</strong> is getting <br />
          bigger and bigger.</h3>
          <div className={scroll>= window.innerHeight? 'showNews':''} >
         <ArticleList articles={articleContents}></ArticleList>
         </div>
          </div>

          <section className="long-section">
          {/* 4. 네번째 spacefarm storyline section1 --------------------- */}
          <div className="contents-wrap orange" > 
          <h3 className={scroll>= window.innerHeight*2 ? 'showInnerText inner-text-m': 'inner-text-m' }>
          We hope,<br /> 
          no one has to worry<br /> 
          about the food problem.</h3>
          </div>

           {/* 5. 다섯번째 spacefarm storyline section2 --------------------- */}
           <div className="contents-wrap orange" > 
          <h3 className={scroll>= window.innerHeight*3 ? 'showInnerText inner-text-m': 'inner-text-m' }>
          <strong>More precisely farming </strong > <br className="new-line"/>in the city!<br /> 
                  To make possible  <strong>agriculture</strong><br /> 
                  for <strong>anyone, anywhere</strong></h3>
          </div>

           {/* 6. 일곱번째 spacefarm storyline section 4 --------------------- */}
           <div className="contents-wrap" > 

           <h3  className={scroll>= window.innerHeight*4 ? 'showInnerText inner-text-m': 'inner-text-m' }>
            What is<br className="new-line"/> our strategy to realize it?
            </h3>
           
       <div className='prograss_wrap'>

       <div className='prograss_item active'>
       <img className='icon' src={controlAutomation}></img>
       <p>Intelligent data collection</p>       
       <span className='line'></span> 
       <a href="/tthing">
       <img className='prograss_logo' src={smart_tting}></img></a>     
       <span className='pointer'></span> 
       </div>

       <div className='prograss_item'>
       {/* <img className='icon' src={auto}></img> */}
       <p>Control automation</p>
       <span className='line'></span> 
       <h3>Intelligent <br/> Agricultural Services</h3>       
       <span className='pointer'></span> 
       </div>

       <div className='prograss_item'>
       <img className='icon' src={Machine}></img>
       <p>Machine learning</p>
       <span className='line'></span> 
       <h3>Building <br/> The Space Farm</h3>       
       <span className='pointer'></span> 
       </div>
              
       <div className='prograss_item'>
       <img className='icon' src={Agricultural}></img>
       <p>Agricultural platform</p>
       <span className='line'></span> 
       <h3>Activate <br/>The Space Farm platform</h3>       
       <span className='pointer'></span> 
       </div>
       </div>

       <div className="prograss-bar"></div>
       
          <h4  className={scroll>0  ? 'showInnerText inner-text-ss': 'inner-text-ss' }>
          To be realized a intelligent <strong> IoT environment sensor</strong>  system <br className="new-long-line"/> for acquisition agriculture data 
          with high accuracy and real time. <br/>
          We have plannerly be conducting from a fundamental technology<br/>
          for to be realized agriculture based on <strong>AI</strong> <br className='new-line' /></h4>
      </div>
       
          </section>
          {/* 7. 여덟번째 gitHub/onshape section --------------------- */}
          <div className="contents-wrap-left" > 
          <h5  className={scroll>= window.innerHeight*5 ? 'showInnerText label': 'label' }>
          Abundance through sharing</h5>
          <h3  className={scroll>= window.innerHeight*5  ? 'showInnerText inner-text': 'inner-text' }>
          We will be made<br className='new-line' /> the eco-system<br/>
          for to be <strong>growth together</strong> <br/>
          by<strong> sharing data </strong>and<strong> our technology.</strong></h3>

          <div className={scroll>= window.innerHeight*5? 'showInnerText btn': 'btn' }>
            <button rel='noopener noreferrer' href='https://github.com/spacefarm-co' target='_blank'>Github</button>
            <button rel='noopener noreferrer' href='https://cad.onshape.com/documents/66b8e7b61957f9798cbe4cd1/w/d5fe8de27a72725094fa7af1/e/e9b38a31aba432e8ef302602' target='_blank'>Onshape</button></div>
          </div>

          <Footer header={header} />
          </div>
       

      
      

    )

}
export default Main;