import React from 'react';
import './cs.css';
import groupImage from "./grouphoto.png";
import cslogo from "./cslogo.png";
import maam from "./asma.png";

const Cs = () => {
    return (
        <div>
            <div class="container1">
                <img class="grouphoto" src={groupImage} alt="CS Members" />
                    <div class="text-block1">
                        <div class="cslogo">
                        <img src={cslogo} alt="CSlogo"/> 
                        </div>
                           <p class="about">
                            <br/> IEEE Computer Society is a professional Society of IEEE. Its purpose and scope is<br/>"to advance the Theory, Practice and  Application of computer and information <br/>processing of science and techonlogy" and "the professioanl standing of its members."
                            <br/>
                        <a href='https://www.computer.org/'>
                            <button class="button1" onclick="">Learn More</button></a></p>
                    </div>
            </div>
            <br/>
            <p class="goal">
               "Our goal is to encourage involvement,and provide opportunities for students to build valuable skills."
              <br/>
              <a href='https://www.ieeensakcet.com/joinus'> <button class="button2" onclick="">Join Us</button></a>
            </p>
            
<div class="chapweb">
    <br/><br/>
    <p> To visit IEEE Hyderabad Section CS Chapter Website&nbsp;&nbsp;
        <a href='https://ieeehyderabad.org/ '><button class="button3">Click Here
    </button>
</a></p><br/><br/>

</div>
<br/>
<br/>
<div class="testimonial">
    <p class="heading1">ADVISOR'S MESSAGE
          </p>
        <div class="advisor">
            <img src={maam} alt="Ms.Asma Mehdia" />
            <p class="name"> Ms.Asma Mehdia</p>
        </div>
           <div class="message"> 
               <p>Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without <br/>collaboration the technology is not going to evolve.
        <br/><br/><br/>
        As a member of CS,I find the membership invaluable source of information and conduit to growth.
        <br/><br/><br/>
        I believe for lasting contribution to a discipline,you really need to have an organization like IEEE behind you.
        <br/>
               </p>
        </div>
</div>     

        </div>
    );
};

export default Cs;