import styles from "../Style/Gallery.css"

export default function Page(){
    // JS
    
      function changeimg(){
          const attr1=document.querySelector('#img1');
          const attr2=document.querySelector('#img2');
          const attr3=document.querySelector('#img3');
          const attr4=document.querySelector('#img4');
          const attrbtn1=document.getElementById("btn1");
          const attrbtn2=document.getElementById("btn2");
          
        if(n==1){
          attr1.style.transform="translateX(0vw)";
          attr1.style.filter="blur(0px)";
          attr2.style.transform="translateX(50vw)";
          attr2.style.filter="blur(10px)";
          attr3.style.transform="translateX(100vw)";
          setTimeout(() => {
            attr4.style.transform="translateX(100vw)";
            attrbtn1.disabled=false;
            attrbtn2.disabled=false;
          }, 1000);  
        }  
        else if(n==2){
          attr1.style.transform="translateX(-50vw)";
          attr1.style.filter="blur(10px)";
          attr2.style.transform="translateX(0vw)";
          attr2.style.filter="blur(0px)";
          attr3.style.transform="translateX(50vw)";
          attr3.style.filter="blur(10px)";
          attr4.style.transform="translateX(-100vw)";
          attr4.style.visibility="hidden";
          setTimeout(() => {
            attr4.style.transform="translateX(100vw)";
            attrbtn1.disabled=false;
            attrbtn2.disabled=false;
          }, 1000);
        }
        else if(n==3){
          attr2.style.transform="translateX(-50vw)";
          attr2.style.filter="blur(10px)";
          attr3.style.transform="translateX(0vw)";
          attr3.style.filter="blur(0px)";
          attr4.style.visibility="visible";
          attr4.style.transform="translateX(50vw)";
          // setTimeout(() => {
            
          // }, 420);
          attr4.style.filter="blur(10px)";
          attr1.style.transform="translateX(-100vw)";
          attr1.style.visibility="hidden";
          setTimeout(() => {
            attr1.style.transform="translateX(100vw)";
            attrbtn1.disabled=false;
            attrbtn2.disabled=false;
          }, 1000);
        }
        else if(n==4){
          attr3.style.transform="translateX(-50vw)";
          attr3.style.filter="blur(10px)";
          attr4.style.transform="translateX(0vw)";
          attr4.style.filter="blur(0px)";
          attr1.style.display="block";
          attr1.style.transform="translateX(50vw)";
          // setTimeout(() => {
            
          // }, 200);
          attr1.style.filter="blur(10px)";
          attr2.style.transform="translateX(-100vw)";
          attr2.style.visibility="hidden";
          setTimeout(() => {
            attr2.style.transform="translateX(100vw)";
          }, 1000);
        }
      }
      
      let n=1;
      const add =() =>{
        const attrbtn1=document.getElementById("btn1");
        const attrbtn2=document.getElementById("btn2");
        if(n<4){
          n++;
          console.log(n);
          attrbtn1.disabled=true;
          attrbtn2.disabled=true;
          changeimg();
        }
        else{
          n=1;
          console.log(n);
          changeimg();
        }
      }
      
      const subtract =() =>{
        const attrbtn1=document.getElementById("btn1");
        const attrbtn2=document.getElementById("btn2");
        attrbtn1.disabled=true;
        attrbtn2.disabled=true;
        if(n>1){
          n--;
          console.log(n);
          changeimg();
        }
        else{
          n=4;
          console.log(n);
          changeimg();
        }
      }
      
    //   JSX
      return(
        <div className="pagewrapper">

            <img id="img1" className="image"src="https://www.pandotrip.com/wp-content/uploads/2013/05/red-beach-china-740x440.jpg"/>
            <img id="img2" className="image" src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=480:*"/>
            <img id="img3"className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg"/>
            <img id="img4"className="image" src="https://media.cntraveler.com/photos/5cb63a4c1a7e7050e8f70959/master/w_4000,h_2667,c_limit/Socotra-Yemen_GettyImages-487703989.jpg"/>

          <div className="aligncenter">
            <button id='btn1' className="btn" onClick={subtract}>&lt; </button>
              <div id="imageplaceholder"></div>
            <button id='btn2' className="btn" onClick={add}> &gt; </button>
          </div>
        </div>  
      )
    }