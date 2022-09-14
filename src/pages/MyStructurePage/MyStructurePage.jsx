import MyStructureItem from "./MyStructureItem";
import image from '../../assets/images/avatar.png';
import './MyStructurePage.scss';

export default function MyStructurePage() {

  const getUsers = () => {
    return new Array(12).fill(2).map(i => {
      return {
        name: 'kris_anfalova',
        image
      }
    })
  }

  const getCards = () => {
    return new Array(14).fill(1).map(i => getUsers())
  }

  return (
    <div className="mystructure">
      <div className="mystructure-wrp">
        <div className="mystructure-items-wrp">
          {getCards().map((item, i) =>
            <MyStructureItem
              key={i}
              activityPartners={133}
              paymentLevel={1}
              partners={item}
            />
          )}
        </div>
      </div>
    </div>
  )
}