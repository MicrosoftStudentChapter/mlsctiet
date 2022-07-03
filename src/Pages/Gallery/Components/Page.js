import styles from "../Style/Gallery.module.css"

export default function Page(){
    // JS
      function changeimg(){
          const attr1=document.querySelector('#img1');
          const attr2=document.querySelector('#img2');
          const attr3=document.querySelector('#img3');
          const attr4=document.querySelector('#img4');
        if(n==1){
          attr1.style.transform="translateX(0vw)";
          attr1.style.filter="blur(0px)";
          attr2.style.transform="translateX(50vw)";
          attr2.style.filter="blur(10px)";  
        }  
        else if(n==2){
          attr1.style.transform="translateX(-50vw)";
          attr1.style.filter="blur(10px)";
          attr2.style.transform="translateX(0vw)";
          attr2.style.filter="blur(0px)";
          attr3.style.transform="translateX(50vw)";
          attr3.style.filter="blur(10px)";
          attr4.style.transform="translateX(-100vw)";
          attr4.style.display="none";
        }
      }
      let n=1;
      const add =() =>{
        if(n<4){
          n++;
          console.log(n);
          changeimg();
        }
        else{
          n=1;
          console.log(n);
          changeimg();
        }
      }
      
      const subtract =() =>{
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
        <div className={styles.pagewrapper}>
            <img id={styles.img1} className={styles.image}src="https://www.pandotrip.com/wp-content/uploads/2013/05/red-beach-china-740x440.jpg"/>
            <img id={styles.img2} className={styles.image} src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=480:*"/>
            <img id={styles.img3}className={styles.image} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg"/>
          <img id={styles.img4}className={styles.image} src="https://media.cntraveler.com/photos/5cb63a4c1a7e7050e8f70959/master/w_4000,h_2667,c_limit/Socotra-Yemen_GettyImages-487703989.jpg"/>
          <div className={styles.aligncenter}>
            <button className={styles.btn} onClick={subtract}>&lt; </button>
              <div id={styles.imageplaceholder}></div>
            <button className={styles.btn} onClick={add}> &gt; </button>
          </div>
        </div>  
      )
    }