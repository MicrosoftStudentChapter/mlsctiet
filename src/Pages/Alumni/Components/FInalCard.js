import Card from "./Card";


const FinalCard = (items) => {
    {[items].map((elem, index) => {
        const { id, name, image, year, linkedIn } = elem.items
        return (
          <div>
            <Card />
          </div>
        )
        })
    }
}

export default FinalCard;