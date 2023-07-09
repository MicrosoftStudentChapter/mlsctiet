// import '../Styles/Card.css'
import styles from '../Styles/Card.module.css'

export default function Card ({items}) {
    return(
        <div className='productList'>
            <div className='productCard'>
                <img src="../Assets/Sampleimg.png" alt="Sampleimg.png"  className='productImage'/>
                <div className='productCard__content'>
                    <h3 className='productName'>Loren Ipsum</h3>
                    <p className="productInfo">Loren Ipsum</p>
                </div>
            </div>
         </div>
    )
}