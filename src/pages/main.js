/* eslint-disable */
import react,{useState , useEffect, useRef}from "react";
import {Link , Route , Switch} from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import mainCss from '../css/main.css';
// component import 
import ArticleList from "../Layout/component/articleList";
import Footer from '../Layout/footer.js';
import Header from "../Layout/header";
// img import 
import spacefarmModel from '../img/contents//no_spacefarm.png';
import logo_wh from '../img/logo/spacefarm_logo_wh.svg';
import auto from '../img/icon/auto.svg';
import controlAutomation from '../img/icon/data_icon.svg';
import Machine from '../img/icon/Machine.svg';
import Agricultural from '../img/icon/Agricultural.svg';
import smart_tting from '../img/logo/spacefarm_new_logo.svg';

//2020.02.23
function Main() {
  const articleContents = [
      {  id : 1,  
        rel: 'https://www.amnews.co.kr/news/articleView.html?idxno=46468',
          title: '올해도 흉년징후 곳곳에서 포착…식량위기 가시화되나',
          press: '농축유통신문'
      },
      { id : 2,    
        rel: 'https://wspaper.org/article/26948',
          title: '식량 위기, 왜 벌어지고 어떻게 해결할 수 있나?',
          press: '노동자연대'

      },
      { id : 3,    
        rel: 'http://news.kmib.co.kr/article/view.asp?arcid=0924206275',
          title: '아프간 식량위기… “어린이 100만명 영양실조 사망할 수도',
          press: '국민일보',
          color: 'green',
      },
      { id : 4,    
        rel: 'https://www.joongang.co.kr/article/25023189',
          title: '14억 어떻게 먹이나…커지는 中 식량안보 위기',
          press: '중앙일보'
      },
      {   
        id :5,  
        rel: 'https://www.sedaily.com/NewsView/22U3RFANAJ',
          title: '식량 안보 위기에도 "심각" 경고 숨긴 정부',
          press: '서울경제',
          color: 'pink',
      },
      { id : 6,    
        rel: 'http://www.mediapen.com/news/view/660590',
          title: '기후위기 속 식량안보 ‘빨간불’, “식량자급률 상향해야”',
          press: '미디어펜'
      },
      ];

      //scrollddd

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
        setHeader(e.deltaY);
        const {scrollTop} = outerDivRef.current;
        const pageHeight = window.innerHeight;
      
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
            let [language, setLanguage] = useState("korean")
    return (
    
        <div ref={outerDivRef} className={window.innerWidth<=600? 'outer-none ko' : 'outer ko'} >
         <Header header={header}/>
          {/* spacefarm.co.kr main page HTML (1-7 section)--------------------- */}
          {/* 1. 첫번째 spacefarm intro section --------------------- */}
          
          <div className="contents-wrap spacefarm-intro"> 
          <h1 className={scroll==0 ? 'showText title': 'title' }><strong>기술</strong>로 자연의 
          <br className='new-line'/> <strong>나눔</strong>을 배우다</h1>
          <span className="green" style={scroll==0 ? {animation:'showText ease-in-out 0.5s forwards'} : null}> 
          <strong>도시</strong>의 유휴공간을 활용한 <strong>스마트팜</strong></span> 
          <h4 className="name" style={scroll==0  ? {animation:'showText ease-in-out 0.5s forwards'} : null}>팀 스페이스팜</h4> 
          </div>
        
          {/* 2. 두번째 spacefarm model section  --------------------- */}
          <div className="contents-wrap sapcefram-model" > 
          <img  src={spacefarmModel}></img>
          </div>

          {/* 3. 세번째 spacefarm news list section  --------------------- */}
          <div className="contents-wrap-left" > 
          <h5 className={scroll>= window.innerHeight? 'showInnerText label': 'label' }>도시농업의 필요성</h5>
          <h3 className={scroll>= window.innerHeight?  'showInnerText inner-text': 'inner-text' }>도시는 발전하였으나,
          <br className='new-line'/>식량난에 대한 이슈는 <br/>점점 더 커지고 있습니다</h3>
          <div className={scroll>= window.innerHeight? 'showNews':''} >
         <ArticleList articles={articleContents}></ArticleList>
         </div>
          </div>

          <section className="long-section">
          {/* 4. 네번째 spacefarm storyline section1 --------------------- */}
          <div className="contents-wrap orange" > 
          <h3 className={scroll>= window.innerHeight*2 ? 'showInnerText inner-text-m': 'inner-text-m' }>그 누구도 <br/> <strong>먹고 사는 일</strong>만큼은 <strong>걱정 없기를</strong></h3>
          </div>

           {/* 5. 다섯번째 spacefarm storyline section2 --------------------- */}
           <div className="contents-wrap orange" > 
          <h3 className={scroll>= window.innerHeight*3 ? 'showInnerText inner-text-m': 'inner-text-m' }>도시에서 농업을 스마트하게!<br/>어디서든 누구나 생산 가능한 <br className='new-line'/>농업을 만들기 위해</h3>
          </div>

           {/* 6. 일곱번째 spacefarm storyline section 4 --------------------- */}
           <div className="contents-wrap" > 
           <h3  className={scroll>= window.innerHeight*4 ? 'showInnerText inner-text-m': 'inner-text-m' }>팀 스페이스팜은 어떻게 실현해 나갈까? </h3>
           
       <div className='prograss_wrap'>

       <div className='prograss_item active'>
       <img className='icon' src={controlAutomation}></img>
       <p>지능형 데이터 수집</p>       
       <span className='line'></span> 
       <div className="icon_box">
       <a href="/tthing"><img className='prograss_logo' src={smart_tting}></img></a>   
       </div>
     
       <a href="/tthing" className="pointer"></a>
  
       
       </div>

       <div className='prograss_item'>
       <img className='icon' src={auto}></img>
       <p>제어 자동화</p>
       <span className='line'></span> 
       <div className="icon_box">
       <h3>도시 농업 <br/> smart 텃밭</h3>     
       </div>
  
       <span className='pointer'></span> 
 
  
       </div>

       <div className='prograss_item'>
       <img className='icon' src={Machine}></img>
       <p>기계학습</p>
       <span className='line'></span> 

       <div className="icon_box">
       <h3>스페이스팜 <br/> 농장 구축</h3>     
       </div>
  
       <span className='pointer'></span> 


       </div>
              
       <div className='prograss_item'>
       <img className='icon' src={Agricultural}></img>
       <p>클라우드 플랫폼</p>
       <span className='line'></span> 
       <div className="icon_box">
       <h3>스페이스팜 <br/>플랫폼 활성화</h3>       
       </div>
  
       <span className='pointer'></span> 
  

       </div>
       
       </div>

       <div className="prograss-bar"></div>
      
       
          <h4  className={scroll>0  ? 'showInnerText inner-text-s': 'inner-text-s' }>
            고정밀 실시간 데이터를 지능적으로 수집 가능한 <br className='new-line' /> <strong>지능형 IOT환경 센서</strong>를 실현 <br className="new_line"/> 
            인공지능 자동제어 농업을 이루기 위한 기반 기술부터<br className='new-line' /> <strong></strong>순차적으로 진행 중에 있습니다.</h4>
            {/* <a>자세히 알아보기</a> */}
      </div>
       
          </section>
          {/* 7. 여덟번째 gitHub/onshape section --------------------- */}
          <div className="contents-wrap-left" > 
          <h5  className={scroll>= window.innerHeight*5 ? 'showInnerText label': 'label' }>공유와 나눔</h5>
          <h3  className={scroll>= window.innerHeight*5  ? 'showInnerText inner-text': 'inner-text' }>기술과 데이터는 공유하고 나누며,<br/> 모두 함께 성장 할 수 있는 농업을 만들어 갑니다</h3>
          <div className={scroll>= window.innerHeight*5? 'showInnerText btn': 'btn' }>

           <a  rel='noopener noreferrer' href='https://github.com/spacefarm-co' target='_blank'>  <button>Github</button></a>
            <a  rel='noopener noreferrer' href='https://cad.onshape.com/documents/66b8e7b61957f9798cbe4cd1/w/d5fe8de27a72725094fa7af1/e/e9b38a31aba432e8ef302602' target='_blank'> <button>Onshape</button></a></div>
          </div>
          
          <Footer header={header}/>
          </div>
       

      
      

    )

}
export default Main;