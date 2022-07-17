import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../images/milan_logo.png'
import '../css/Home.css'
const flipphotos=[
  {
    image: require("../images/photos/2.CR2.jpg")
  },
  { 
    image: require("../images/photos/3.CR2.jpg")
  },
  {
    image: require("../images/photos/4.CR2.jpg")
  },
  {
    image: require("../images/photos/5.CR2.jpg")
  },
  {
    image: require("../images/photos/6.JPG")
  },
  {
    image: require("../images/photos/7.CR2.jpg")
  },
  {
    image: require("../images/photos/8.JPG")
  },
  {
    image: require("../images/photos/9.CR2.jpg")
  }
]
//templates for flipbook page
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p className='para'>{props.children}</p>
    </div>
  );
});
// for runnning carousels 
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
// return 
export default function Home() {
  return (
    <>
    {/* description about milan */}
    <div className='text-center m-10px'>
          <strong>"Milan"</strong> is the annual techno-cultural-sports General Championship of <strong>"IIT Hyderabad"</strong>. It consists of 16 Sports, 19 Cultural
          and 9 technical events conducted between all the <strong>"Hostel Blocks"</strong>. In this second edition of Milan, presented by SBI YONO, the sports, cultural, and technical events will start from 25th February and will conclude on 6th March
    </div>
    {/*first flipbook */}
  <div className=' row text-center'>
   <HTMLFlipBook width={385} height={500} showCover={true} drawShadow={false} className="flip">
      <Page><div className="passport-container text-center"><img className='imggg' src={logo} alt="logo" /></div></Page>
       { flipphotos.map((elem)=>{
          return(
           <Page><img className='imggg' src={elem.image} alt="" /></Page>
          );
        })
        }
    </HTMLFlipBook>
    </div>
    {/*running card that will show the ongoing games*/}
    <div className="mt-5 text-center">
          <h1>Ongoing Events</h1>
    </div>
    <div className='run row text-center'>
    <Slider {...settings} style={{width:'100%', height:'100%'}}>
    <div>
        <h3>1</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab soluta distinctio doloribus eum odio veniam dicta ipsum consequuntur, facilis in laborum repellendus nihil provident iste modi ratione ullam quaerat dolorem.</p>
      </div>
      <div>
        <h3>2</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequatur quae repellendus provident. Unde, aliquam aut autem nostrum labore quaerat doloribus! Laboriosam commodi inventore, numquam ipsa ratione sed sapiente deleniti.</p>
      </div>
      <div>
        <h3>3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus, accusamus non rerum voluptas perspiciatis doloremque quibusdam neque est eligendi et, qui, officiis porro atque dolor dolore nulla numquam vero!</p>
      </div>
      <div>
        <h3>4</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat pariatur doloribus ad quo accusantium quae accusamus! Sit atque, quis nostrum provident nisi ut, odit deleniti laborum vel sunt aperiam. Asperiores?</p>
      </div>
      <div>
        <h3>5</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti aperiam consectetur officiis nulla fugiat tempore minus repudiandae, debitis accusamus, eveniet suscipit. Tenetur facilis minus dolores provident autem ad libero.</p>
      </div>
      <div>
        <h3>6</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis aperiam blanditiis mollitia in tempora repellendus ab illo iure doloribus at qui excepturi eveniet natus quas possimus, rem hic. Ipsum.</p>
      </div>
      </Slider> 
    </div>

    {/*graph of overall leaderboard*/}
    <div className="mt-4 text-center">
          <h1>OVERALL LEADERBOARD</h1>
    </div>
  
   {/*second carousel*/}
    <div>
   <HTMLFlipBook width={385} height={500} showCover={true} drawShadow={false} className="flip">
      <Page number="1"><div className="passport-container"><img className='imggg' src={logo} alt="logo" /></div></Page>
      {
          flipphotos.map((slide)=>{
            return(
                <Page><img className='imggg' src={slide.image} alt="" /></Page>
            );
          })
        }
    </HTMLFlipBook>
   </div>
    </>
  )
}
