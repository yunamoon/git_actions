/* eslint-disable */
import react from "react";
import { useEffect , useState } from "react/cjs/react.development";

function Footer(member ) {

 return (
<div>
    <div className= {member.member =='member' ? 'footer resize ko' :'footer ko' }>

        <section>
            <h2 className="footer-text">우리의 가치와 <br className="big"/>함께 하세요.</h2>
             <a href="mailto:info@spacefarm.co.kr"><button>Contact</button></a>
        </section>

        <section>
        <table>
            <tbody>
       <tr>
       <td>회사명</td>
       <td>주식회사 팀 스페이스팜</td>
       </tr>

       <tr>
       <td>사업자번호</td>
       <td>816-81-01679</td>
       </tr>

       <tr>
       <td>대표자</td>
       <td>서유리</td>
       </tr>

       <tr>
       <td>메일 </td>
       <td>info@spacefarm.co.kr</td>
       </tr>

       <tr>
       <td >주소</td>
       <td>경기도 성남시 수정구 수정로 157 MG성남수정새마을금고 5층 여성비전센터</td>
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