
/* eslint-disable */
import react from "react";
import { useEffect , useState } from "react/cjs/react.development";

function Footer(member) {

 return (
<div>
    <div className= {member.member =='member' ? 'footer resize en' :'footer en' }>
    <section>
            <h2 className="footer-text">Be with our values</h2>
            <a href="mailto:info@spacefarm.co.kr"><button>Contact</button></a>
        </section>

        <section>
        <table>
            <tbody>
    
       <tr>
       <td>Company Name</td>
       <td>Team Space Farm Inc</td>
       </tr>

       <tr>
       <td>Business Number</td>
       <td>816-81-01679</td>
       </tr>

       <tr>
       <td>representative</td>
       <td>Seo Yuri</td>
       </tr>

       <tr>
       <td>contact </td>
       <td>info@spacefarm.co.kr</td>
       </tr>

       <tr>
       <td >address</td>
       <td>MG Seongnam Sujeong Saemaul Geumgo Building 5th Floor <br/>
           157, Sujeong-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea,</td>
       </tr>

       <tr>
       <td  >web version</td>
       <td>1.1.0</td>
       </tr>
                   
       </tbody>
       </table>
        </section>
    </div>


</div>
 );   
}

export default Footer;