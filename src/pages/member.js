/* eslint-disable */
import react,{useState , useEffect ,useRef}from "react";
import photo from '../img/photo/test.jpeg';
import memberCss from '../css/member.css';

//import component
import Footer from "../Layout/footer";
import Header from "../Layout/header.js";
//import img
import profile1 from '../img/photo/profile1.svg';
import profile2 from '../img/photo/profile2.svg';
import profile3 from '../img/photo/profile3.svg';
import profile4 from '../img/photo/profile4.svg';
import profile5 from '../img/photo/profile5.svg';


function Member() {    
  let [scroll , setScroll] = useState(0);

        let [card , setCard] = useState(['서유리', '김성노', '김찬석','양선미','문유나' ]);
        let [english , setEnglish] = useState(['Yuri Seo' , 'Soungno Kim', 'Chansuk Kim','Sun mi Yang','Yuna Moon' ]);
        let [position , setPosition] = useState(['CEO', 'COO/CTO' , 'Research Director' ,'Team Leader' ,'Researcher']);
        let [profile , setProfile] = useState([profile1,profile2,profile3,profile4,profile5])
        let [language , setLanguage] = useState('korean')
        let [member , setMember] = useState('member')
        function Item(props) {
          return(
            <div className="card">
            <img src={props.profile}></img>
            <h5 className="card-label">{props.position}</h5>
            <h4>{props.name}</h4>
            <p>{props.english}</p>
           </div>

          );
        }

     

    return(
        <main className="ko">
           <Header scroll={scroll} language={language}/>
            <div className="back-img"></div>
            <div className="member-container">
              
                <h5 className={scroll>=0 ? 'showText label': 'label' }>공유의 가치를 실현하는</h5>
                <h2 className={scroll>=0 ? 'showText inner-text': 'inner-text' } >TEAM SPACEFARM</h2>
                <h4 className={scroll>=0 ? 'showText': '' }> 弘益人間</h4>

            <div className="card-list">

              {
                card.map((card, i) => (
                  <Item 
                  name={card}
                  english={english[i]}
                  position={position[i]}
                  profile={profile[i]}
                  />
                ))
              }
                </div>
            </div>

            <Footer scroll={scroll} language={language} member={member}/>

        </main>
    );
}

export default Member;