import React from 'react'
import data from '../pages/image.js'
import '../css/Team.css';
export default function Team() {
  return (
    <div  className='text-center flex-wrap'>
     <div className='row'>
        <div className='person'>
          <h2>Overall Coordinator</h2>
          <img className='imgg'src={data.Minhaz_Nawas} alt="" />
          <h4>Minhaz Nawas</h4>
        </div>
        <div className='person'>
          <h2>Sponsorship and Finance</h2>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.MD_Adil} alt="" /><h4>Adil Salfi</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.sreejith} alt="" /><h4>Sreejith R R</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.harish} alt="" /><h4>Harish M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.aman} alt="" /><h4>Aman J</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.mayuri} alt="" /><h4>C Mayuri</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.rishi} alt="" /><h4>Rishi Kumar</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.Diva} alt="" /><h4>Diva J</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.manikanta} alt="" /><h4>Uppulapu Manikanta</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.mayur} alt="" /><h4>J Mayur</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.pradeep} alt="" /><h4>Pradeep M</h4></div>
          </div>
        </div>
        <div className='person'>
          <h2>Hospitality and Infrastructure</h2>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-4'><img className='imgg'src={data.stephen} alt="" /><h4>Stephen VS</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-4'><img className='imgg'src={data.sreevani} alt="" /><h4>C Sreevani</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-4'><img className='imgg'src={data.anurag} alt="" /><h4>M Anurag</h4></div>
          </div>
          <div className='row text-center'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.sujith} alt="" /><h4>Sujith Reddy</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.riyaann} alt="" /><h4>Riya Ann</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.bharath} alt="" /><h4>C Bharath</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.shravya} alt="" /><h4>K Shravya</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.akshat} alt="" /><h4>Akshat J</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.kartik} alt="" /><h4>Kartik Agrawal</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.hiya} alt="" /><h4>Hiya Mehta</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.vishwajith} alt="" /><h4>Vishwajith Reddy</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.dhatri} alt="" /><h4>Dhatri Reddy</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.harishankar} alt="" /><h4>Harishankar M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.sreeya} alt="" /><h4>Sreeya T</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.pushkal} alt="" /><h4>Pushkal M</h4></div>
          </div>
        </div>
        <div className='person'>
          <h2>Creatives</h2>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.govind} alt="" /><h4>Govind Pal</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.viren} alt="" /><h4>Viren Soni</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.rishit} alt="" /><h4>Rishit Singh</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.siriS} alt="" /><h4>Siri S</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.pragya} alt="" /><h4>Pragya Y</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.adheena} alt="" /><h4>Adheena</h4></div>
          </div>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.chaitanya} alt="" /><h4>M Chaitanya</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.loukik} alt="" /><h4>Loukik</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.gatikrushna} alt="" /><h4>Gatikrushna M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.aayush} alt="" /><h4>Aayush P</h4></div>
          </div>
        </div>
        <div className='person'>
          <h2>Web Dev and Management</h2>
          <div className='row text-center'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-6'><img className='imgg'src={data.ajay} alt="" /><h4>Ajay Patel</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-6'><img className='imgg'src={data.arun} alt="" /><h4>Arun S</h4></div>
          </div>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.suryaansh} alt="" /><h4>Suryaansh J</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.surya} alt="" /><h4>surya S</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.ritik} alt="" /><h4>Ritik Pal</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.jashwanth} alt="" /><h4>Jashwanth</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.bhanu} alt="" /><h4>Bhanu Teja</h4></div>
          </div>
        </div>
        <div className='person'>
          <h2>Multimedia</h2>
          <div className='row text-center'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-6'><img className='imgg'src={data.ramanathan} alt="" /><h4>Ramanathan</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-6'><img className='imgg'src={data.uday} alt="" /><h4>Uday Ratna</h4></div>
          </div>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.uttej} alt="" /><h4>Uttej</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.pranav} alt="" /><h4>Pranav V</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.aravind} alt="" /><h4>Aravind S</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.sathvika} alt="" /><h4>Sathvika M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.sanaAnesha} alt="" /><h4>Sana Anesha</h4></div>
          </div>
        </div>

        <div className='person'>
          <h2>Event & Pronites</h2>
          <div className='row text-center'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.hadiAfnan} alt="" /><h4>Hadi Afnan</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.ahinraj} alt="" /><h4>Ahinraj MS</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.divyaM} alt="" /><h4>Divya M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.nabeelM} alt="" /><h4>Nabeel Mohammed</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.ravindra} alt="" /><h4>Ravinder</h4></div>
          
          </div>
          <div className='row'>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.BRohit} alt="" /><h4>B Rohit</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.abhishek} alt="" /><h4>Abhishek G</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.BAnvitha} alt="" /><h4>B Anvitha</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.shreyas} alt="" /><h4>Shreyas W</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.shubham} alt="" /><h4>Shubham M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.suryaTeja} alt="" /><h4>CHERUKUSURYA TEJA</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.dheeraj} alt="" /><h4>Dheeraj</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.dhanushikaa} alt="" /><h4>Dhanushikaa S</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.subiksha} alt="" /><h4>Subiksha G</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.yashRamteke} alt="" /><h4>Yash Ramteke</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.mouktika} alt="" /><h4>Mouktika</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.nanda} alt="" /><h4>Nanda Kishore R</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.gaurang} alt="" /><h4>Gaurang D</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.raniKR} alt="" /><h4>Rani K R</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.abhayKumar} alt="" /><h4>Abhay Kumar</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.anusha} alt="" /><h4>Anusha Reddy</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.rohitS} alt="" /><h4>Rohit S</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img className='imgg'src={data.krithik} alt="" /><h4>Krithik M</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.kaustubh} alt="" /><h4>Kaustubh G</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.jayBhanushali} alt="" /><h4>Jay Bhanushali</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.kanak} alt="" /><h4>Kanak Lohiya</h4></div>
          <div className='col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3'><img className='imgg'src={data.jalaPrajash} alt="" /><h4>Jala Prajesh</h4></div>

          </div>
        </div>
        </div>
     </div>
  
  )
}

