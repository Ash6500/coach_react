import star from '../images/star.png'

const Card = (props) => {
  let badgeText
  if(props.openSpots === 0){
    badgeText = 'SOLD OUT'
  }else if(props.location === 'Online'){
    badgeText = 'ONLINE'
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.coverImg} alt="Katie-Zaferes" className='card--image' />
        <div className='card--stats'>
            <img src={star} alt="star"className='card--star' />
            <span>{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount}) • </span>
            <span className='gray'>{props.location}</span>
        </div>
        <h2 className='card--title'>{props.title}</h2>
        <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card