import svgStyle from './styles/back.module.css';
import downArrow from './assets/vectors/downarrow.svg'

const Back = () => {
  return (
    <div className={svgStyle.back}>
      <img src={downArrow} className={svgStyle.downArrow} />
    </div>
  )
}

export default Back;
