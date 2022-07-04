/* eslint-disable */
import react,{useState , useEffect , useRef}from "react";
// component import 
import Footer from '../Layout/footer_en';
import Header from "../Layout/header_en";

// img import
import smartTting_wh from '../img/logo/new_logo_wh.svg';

import smartTthing from '../img/contents/smartTThing.svg';

import smart_thing_merit from '../img/logo/smartTthing_merit_header.svg';
import tthing_mini from '../img/contents/tthing_mini.svg';
import old_smartfarm from '../img/contents/old_smartfarm.svg';
import old_sensor from '../img/contents/old_sensor.svg';
import new_sensor from '../img/contents/new_sensor.svg';
import data_pipe from '../img/contents/data-pipe-line.svg';

import monitoring_logo from '../img/contents/monitoring_logo.svg';
import data_pipe_logo from '../img/contents/data_pipe_logo.svg';
//import icon
import cloud from '../img/icon/cloud_icon.svg';
import monitoring from '../img/icon/monitoring_icon.svg';

import arrow_icon from '../img/icon/arrow_icon.svg';


import monitoring_1 from '../img/icon/monitoring_icon1.svg';
import monitoring_2 from '../img/icon/monitoring_icon2.svg';
import monitoring_3 from '../img/icon/monitoring_3.svg';

function Tthing() {
  let [header ,setHeader] = useState(0);
  let [scroll , setScroll] = useState(0);
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

        let [language, setLanguage] = useState('english')

    return(
        <main ref={outerDivRef} className="outer en">
         <Header header={header}/>
         {/* 1. smart tthing intro section ee ---------------------------------------------- */}
         <div className="contents-wrap smart-tthing-intro"> 
          <img src={smartTting_wh} className={scroll > 0 ? 'showText smart-tthing': 'smart-tthing' }></img>
          <h5 className="smart-tthing-under" style={scroll>0 ? {animation:'showText ease-in-out 0.5s forwards'} : null}>
          To secure reliable agricultural environmental data<br/>
          IoT environment sensor <strong> ‘Smart TThing’</strong></h5> 
          </div>

               {/* 2. smart tthing detail section ---------------------------------------------- */}
          <div className={scroll==0 ? 'contents-wrap showTthing': 'contents-wrap' }>

          <section className="tthing_merit_1">
           <img src={smartTthing} className="smart-Thing" ></img>    
           <div className="smart-tthing-contnets">
           <img src={smart_thing_merit} className="smart-tthing-logo"></img>
           <ul>
             <li><h5  className="contnets-text">Intelligent IoT integrated sensor capable of collecting temperature <br/>
                                                and humidity, light intensity, atmospheric pressure, CO2 ,<br/>
                                                Multi Spectrum.</h5></li>
             <li><h5  className="contnets-text">Integration of IoT device and SBC (single-board computer) enables both<br/>
                                                collection and control. </h5></li>
             <li><h5  className="contnets-text">Provides the dashboard that can be monitored from anywhere<br/>
                                                as a cloud-based service.</h5></li>
             <li><h5  className="contnets-text">Anyone with a smartphone and [Smart tthing] can easily install it.</h5></li>
             <li><h5  className="contnets-text">Provides the best security based on hardware.</h5></li>

           </ul>
           </div>
          </section>

           <section className="tthing_merit_2">
           <ul className={scroll>=0? 'smart-tting-bubble showBubble': 'smart-tting-bubble' } style={window.innerHeight <667? {diplay:'none'}: {dispalay:''}}>
           <li> <h4><strong>DOWN</strong> Price </h4></li>
           <li><h4><strong>UP </strong> Performance</h4></li>
           <li> <h4> <strong>COMPECT</strong> Integrated sensor</h4></li>
           <li><h4><strong>SAFE</strong> Security</h4></li>
           <li><h4><strong>SIMPLE</strong> device</h4></li>
           </ul>
           </section>
          </div>

        {/* 3. smartfarm old-new model section ---------------------------------------------- */}

            <div className="contents-wrap old-model-wrap">
            <h2 className={scroll>= window.innerHeight*1 ? 'showInnerText inner-text-m': 'inner-text-m' } >
            <strong>Smartly replace  </strong> <br className='new-line' />the <strong>Current smart farm sensor,</strong></h2>
            <img className="old-model" src={old_smartfarm}></img>
            </div>

        

        {/* 4. smartfarm old-new sensor section ---------------------------------------------- */}
            <div className="contents-wrap model-wrap">
            <h2 className={scroll>= window.innerHeight*2 ? 'showInnerText inner-text-m': 'inner-text-m' } >
            It makes <strong>change possible</strong>  <br className='new-line' />by going beyond <strong>limits!</strong> </h2>

            <div className="model-contents en-model">
            <p><strong>The Current smart farm sensor :</strong> 2 or 3 sensors in over 3,500 m2 farm</p>
            <img src={old_sensor}></img>
            </div>

            <div className="model-contents en-model">
            <p> <strong>Smart tthing : </strong>Reliable data acquisition, affordable, Easy maintenance, stability, & advanced technologies.</p>
            <img src={new_sensor}></img>
            </div>

            <h5 className="point-text"> It's possible to upgrade to <br className='new-line' />an artificial intelligence smart farm</h5>
            </div>
        
        {/* 5. smart-tthing ---------------------------------------------- */}
        <div className='contents-wrap tthing-arrow'>
    
       <h2 className={scroll>= window.innerHeight*3 ? 'showInnerText inner-text-m': 'inner-text-m' }> Smart agricultural IoT environmental sensor</h2>
      <div className="list_wrap">
        
       <ul >
        <li className="style_none"> <img src={cloud} className="icon"></img></li>
         <li><h5><strong className="strong">Stable data operation</strong> <br/>
          using  the latest technology <br/>
          with the cloud platform </h5></li>
       </ul>
       <ul>
        <li className="style_none"> <img src={arrow_icon} className="arrow"></img></li>
       </ul>
      
       <ul className="middle">
         <li className="style_none">   <img src={ tthing_mini} className="tthing_mini"></img></li>
         <li><h5>Provides reliable HW and strong security  <br/>
              with the Google Coral environmental sensor</h5></li>
         <li><h5>Compact and smart sensor utilizing<br/>
              with SBC(Single Board Computer)</h5></li>
       </ul>
       <ul>
        <li className="style_none"> <img src={arrow_icon} className="arrow"></img></li>
       </ul>
       <ul>
         <li className="style_none"><img src={monitoring} className="icon"></img></li>
       
         <li><h5>Monitoring from anywhere</h5></li>
         <li>  <h5>Abnormal detection notification.</h5></li>
         <li> <h5>Provides data science tools.</h5></li>
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

<h5 className="comment_e"><strong>The Smart TThing sensor data monitoring system optimized for user convenience</strong> </h5>


<div className='tthing_monitoring_system_icon_wrap'> 
  <span className='tthing_monitoring_system_contents'>
      <img src={monitoring_1}></img> 
      <h3>Multi-sensor<br/>
          monitoring</h3>
      <p>data management<br/>
          by farm area</p>
  </span>

  <span className='tthing_monitoring_system_contents'>
      <img src={monitoring_2}></img> 
      <h3>Data Log</h3>
      <p>Data storage<br/>
          by crop growth cycle</p>    
  </span>

  <span className='tthing_monitoring_system_contents'>
      <img src={monitoring_3}></img> 
      <h3>Data analysis tools</h3>
      <p>Yield analysis function<br/>
          through data comparison</p>
  </span>
</div>
</div>



        {/* 8. smart-tting-measurement-info section ---------------------------------------------- */}
        <div className="contents-wrap-left measurement-info">
        <h3>Basic measurement information</h3>
        <p className="table_comment">Measurement specifications for the sensor that is provided as a standard without the extended sensor</p>
        <table className="tthing-table">
         <thead>
             <tr>
                 <td className="table-title"></td>
                 <td className="table-title" ><strong>Measuring range</strong></td>
                 <td className="table-title" ><strong>Precision</strong></td>
                 <td className="table-title" ><strong>Error range</strong></td>
                 <td className="table-title"><strong>Operating environment</strong></td>
             </tr>
         </thead>

         <tbody>
             <tr></tr>
             <tr> 
             <td className="table-title" ><strong>Temperature</strong></td>
             <td>-20℃ ~ +80℃</td>
             <td>0.1℃</td>
             <td>±0.2˚C at room temperature</td>
             <td>-50℃ ～ +60℃</td>
             </tr>

             <tr>
             <td className="table-title"><strong>Humidity</strong></td>
             <td>0 ~ 100%</td>
             <td>±2% RH</td>
             <td>±2.0%(0～90 %), 
                    ±3.0%(90～100%)</td>
             <td>-40℃ ～ +60℃</td>
             </tr>

             <tr>    
             <td className="table-title"><strong>The amount of light</strong></td>
             <td>0 ~ 2,000W/㎡</td>
             <td>responsiveness : <br/>
                  15μV/Wm2</td>
             <td>95% reliability</td>
             <td>-40℃~+80℃</td>
             </tr>

             <tr>
             <td className="table-title"><strong>Air pressure</strong></td>
             <td>4.35PSI~15.95PSI
                (30kPa~110kPa)</td>
             <td>-</td>
             <td>±0.015PSI(±0.1kPa)</td>
             <td>-40°C ~ 85°C</td>
             </tr>

             <tr>
             <td className="table-title"><strong>CO2</strong></td>
             <td>0 ～ 3,000ppm</td>
             <td>-</td>
             <td>within ±50ppm</td>
             <td>Tem  : 0 ∼ 60℃
                 Hum : 0 ∼ 95% RH</td>
             </tr>
         </tbody>
        </table>

        </div>

        <Footer header={header}/>
        </main>
        


    );
}

export default Tthing;