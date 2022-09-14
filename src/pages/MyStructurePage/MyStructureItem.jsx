

export default function MyStructureItem({ paymentLevel, activityPartners, partners }) {
  return (
    <div className="mystructure-item">
      <div className="mystructure-item-wrp">
        <div className="mystructure-item-numbers">
          <p className="mystructure-item-number">{paymentLevel}</p>
          <p className="mystructure-item-number">{activityPartners}</p>
        </div>
        <div className="mystructure-item-separator" />
        <div className="mystructure-item-titles">
          <p className="mystructure-item-title">Уровень выплат</p>
          <p className="mystructure-item-title">Активных партнёров</p>
        </div>
        <div className="mystructure-item-users-wrp">
          {partners.map((partner, i) =>
            <div key={i} className="mystructure-item-user">
              <img className="mystructure-item-user-img" src={partner.image} alt={partner.name} />
              <p className="mystructure-item-user-title">{partner.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}