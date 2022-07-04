/* eslint-disable */
import react,{useState , useEffect , useRef}from "react";

// component import 
import Footer from '../Layout/footer.js';
import Header from "../Layout/header.js";

// css import
import tthingCss from '../css/tthing.css';

// img import
import smartTting_wh from '../img/logo/new_logo_wh.svg';
import smartTthing from '../img/contents/smartTThing.svg';

import old_smartfarm from '../img/contents/old_smartfarm.svg';
import old_sensor from '../img/contents/old_sensor.svg';
import new_sensor from '../img/contents/new_sensor.svg';
import data_pipe from '../img/contents/data-pipe-line.svg';
import smart_thing_merit from '../img/logo/smartTthing_merit_header.svg';

import tthing_mini from '../img/logo/tthing_frame_logo.svg';
import data_pipe_logo from '../img/contents/data_pipe_logo.svg';
import monitoring_logo from '../img/contents/monitoring_logo.svg';

//import icon
import cloud from '../img/icon/cloud_icon.svg';
import monitoring from '../img/icon/monitoring_icon.svg';
import arrow_icon from '../img/icon/arrow_icon.svg';

import monitoring_1 from '../img/icon/monitoring_icon1.svg';
import monitoring_2 from '../img/icon/monitoring_icon2.svg';
import monitoring_3 from '../img/icon/monitoring_3.svg';

function Tthing() {
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

    return(
        <main ref={outerDivRef} className="outer ko">
          <Header header={header}/>
         {/* 1. smart tthing intro section ---------------------------------------------- */}
         <div className="contents-wrap smart-tthing-intro"> 
          <img src={smartTting_wh} className={scroll > 0 ? 'showText smart-tthing': 'smart-tthing' }></img>
          <h5 className="smart-tthing-under" style={scroll>0 ? {animation:'showText ease-in-out 0.5s forwards'} : null}>
            신뢰성있는 농업 환경데이터 확보를 위한
            팀 스페이스팜의 IoT환경센서 <strong>‘스마트 띵’</strong></h5> 
          </div>

          {/* 2. smart tthing detail section ---------------------------------------------- */}
          <div className={scroll==0 ? 'contents-wrap showTthing': 'contents-wrap' }>

          <section className="tthing_merit_1">
           <img src={smartTthing} className="smart-Thing" ></img>    
           <div className="smart-tthing-contnets">
           <img src={smart_thing_merit} className="smart-tthing-logo"></img>

           <ul>
             <li><h5  className="contnets-text"> 온습도, 광량, 기압, CO2 데이터 수집이 가능한 지능형 IoT 통합 센서</h5></li>
             <li><h5  className="contnets-text"> 클라우드 기반의 서비스로 어디서든 모니터링 가능한 대시보드 제공</h5></li>
             <li><h5  className="contnets-text"> 스마트폰과 [스마트 띵]만 있다면 누구나 <strong>쉽게 설치 </strong>가능</h5></li>
             <li><h5  className="contnets-text"> 하드웨어기반의 최상의 보안 제공</h5></li>

           </ul>
           </div>
          </section>

           <section className="tthing_merit_2">
           <ul className={scroll>=0? 'smart-tting-bubble showBubble': 'smart-tting-bubble' } style={window.innerHeight <667? {diplay:'none'}: {dispalay:''}}>
           <li><h4>가격 <strong>DOWN!</strong> </h4> </li>
           <li><h4>성능  <strong>UP!</strong></h4></li>
           <li><h4> 통합 센서 <strong>COMPECT!</strong></h4></li>
           <li><h4>하드웨어 보안 <strong>SAFE!</strong></h4> </li>
           <li><h4>외부기기 불필요 <strong>EASY!</strong></h4></li>
           </ul>

           </section>
          </div>



        {/* 3. smartfarm old-new model section ---------------------------------------------- */}
            <div className="contents-wrap old-model-wrap">
            <h2 className={scroll>= window.innerHeight*1 ? 'showInnerText inner-text-m': 'inner-text-m' } >기존 스마트팜 센서를 똑똑하게 대체하고,</h2>
            <img className="old-model" src={old_smartfarm}></img>
            </div>

        {/* 4. smartfarm old-new sensor section ---------------------------------------------- */}
            <div className="contents-wrap model-wrap">
            <h2 className={scroll>= window.innerHeight*2 ? 'showInnerText inner-text-m': 'inner-text-m' } >한계를 넘어 변화를 실현 가능하게 !!</h2>

            <div className="model-contents">
            <p><strong> 그 동안의 스마트팜 센서 :</strong> 몇 천평 규모 농정에서 센서 2,3개가 전부 (앞문, 후문, 중간)</p>
            <img src={old_sensor}></img>
            </div>

            <div className="model-contents">
            <p><strong>스마트 띵 :</strong>신뢰성있는 데이터 확보 가능, 저렴한 가격, 간편한 유지보수, 안정성, 고도화 가능한 기술</p>
            <img src={new_sensor}></img>
            </div>

            <h5 className="point-text">인공지능 스마트팜으로 발전하기 위해 꼭 필요한 기술</h5>
            </div>


        {/* 5. smart-tthing ---------------------------------------------- */}
        <div className='contents-wrap tthing-arrow'>
    
       <h2 className={scroll>= window.innerHeight*3 ? 'showInnerText inner-text-m': 'inner-text-m' }>스마트한 환경 센서</h2>
      <div className="list_wrap">
       <ul >
        <li className="style_none"> <img src={cloud} className="icon"></img></li>
        <li> <h5>Cloud 플랫폼의 최신 기술을 <br/>활용한 <strong className="strong">안정적인 데이터</strong>운용 </h5></li>
       </ul>
       
       <ul>
        <li className="style_none"> <img src={arrow_icon} className="arrow"></img></li>
       </ul>
      
       <ul className="middle">
        <li className="style_none">   <img src={ tthing_mini} className="tthing_mini"></img></li>
        <li> <h5><strong className="strong">Google Coral 환경센서</strong>를 활용한<br/>신뢰성 높은 <strong className="strong" >HW와 강력한 보안</strong></h5></li>
        <li><h5><strong className="strong">SBC</strong>(Single Board Computer)를<br/>활용한 Compect하고 Smart한 센서</h5></li>
       </ul>

       <ul>
        <li className="style_none"> <img src={arrow_icon} className="arrow"></img></li>
       </ul>

       <ul>
         <li className="style_none"><img src={monitoring} className="icon"></img></li>
         <li> <h5><strong className="strong">어디서든 모니터링</strong> 가능 </h5></li>
         <li> <h5><strong className="strong">이상 감지 알림</strong></h5></li>
         <li> <h5><strong className="strong">데이터 사이언스 툴</strong></h5></li>
       </ul>
       </div>

    </div>

      {/* 6. tthing_data_pipe_line section ----------------------------------------- */}
        <div className="contents-wrap pipe-line">
        <img className="pipe-line-logo" src={data_pipe_logo}></img>
        <img src={data_pipe} className="data-pipe-img"></img>
        </div>

      {/* 7. smart tthing monitoring system section ----------------------------------------- */}
        <div className="contents-wrap">


        <img className="monitoring_logo" src={ monitoring_logo}></img>
        
        <h3 className="comment">사용자 편의에 최적화 된 스마트 띵 센서 데이터 모니터링 시스템 </h3>
     

        <div className='tthing_monitoring_system_icon_wrap'> 
          <span className='tthing_monitoring_system_contents'>
              <img src={monitoring_1}></img> 
              <h3>다중센서 <br/> 모니터링 가능</h3>
              <p>농장 별 / 구역 별</p>
          </span>

          <span className='tthing_monitoring_system_contents'>
              <img src={monitoring_2}></img> 
              <h3>데이터 로그</h3>
              <p>작기 별 데이터<br/> 저장 가능</p>    
          </span>

          <span className='tthing_monitoring_system_contents'>
              <img src={monitoring_3}></img> 
              <h3>데이터 분석 툴</h3>
              <p>비교을 통한<br/>수확량 분석 기능</p>
          </span>
      </div>
      </div>



        {/* 8. smart-tting-measurement-info section ---------------------------------------------- */}
        <div className="contents-wrap-left measurement-info">
        <h3>기본 센서 측정 정보</h3>
        <p className="table_comment">확장센서 없이 기본으로 제공되는 센서에 대한 정보</p>
        <table className="tthing-table">
         <thead>
             <tr >
                 <td className="table-title"></td>
                 <td className="table-title"><strong>측정 범위</strong></td>
                 <td className="table-title"><strong>정밀도</strong></td>
                 <td className="table-title"><strong>오차범위</strong></td>
                 <td className="table-title"><strong>운용환경</strong></td>
             </tr>
         </thead>

         <tbody>
             <tr></tr>
             
             <tr> 
             <td className="table-title"><strong>온도</strong></td>
            
             <td>-20℃ ~ +80℃</td>
             <td>0.1℃</td>
             <td>상온에서±0.2℃</td>
             <td>-50℃ ～ +60℃</td>
             </tr>

             <tr>
             <td className="table-title"><strong>습도</strong></td>
             <td>0 ~ 100%</td>
             <td>±2% RH</td>
             <td>±2.0%(0～90 %), <br/>
                    ±3.0%(90～100%)</td>
             <td>-40℃ ～ +60℃</td>
             </tr>

             <tr>    
             <td className="table-title"><strong>광량</strong></td>
             <td>0 ~ 2,000W/㎡</td>
             <td>민감도 : 15μV/Wm2</td>
             <td>95% 신뢰수준</td>
             <td>-40℃~+80℃</td>
             </tr>

             <tr>
             <td className="table-title"><strong>기압</strong></td>
             <td>4.35PSI~15.95PSI <br/>
                (30kPa~110kPa)</td>
             <td>-</td>
             <td>±0.015PSI(±0.1kPa)</td>
             <td>-40°C ~ 85°C</td>
             </tr>

             <tr>
             <td className="table-title"><strong>CO2</strong></td>
             <td>0 ～ 3,000ppm</td>
             <td>-</td>
             <td>±50ppm이내</td>
             <td>온도 : 0 ∼ 60℃
                 습도 : 0 ∼ 95% RH</td>
             </tr>
         </tbody>
        </table>

        </div>

        <Footer header={header}/>
        </main>
        


    );
}

export default Tthing;