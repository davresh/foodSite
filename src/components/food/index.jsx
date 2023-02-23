import './style.scss';

function Food({item,onBuy}){
    return (
        <div className='foodBox'>
            <div className='foodImg'><img src={`${item.foodImg}`} alt={`${item.foodName}`}/></div>
            <h4>{item.foodName}</h4>
            <p>{item.aboutFood}</p>
            <h3>{item.value+' $'}</h3>
            <div className='btn-buy'>
                <button onClick={()=>{
                    onBuy(item.value)
                }}>Buy Food</button>
            </div>
            
        </div>
    )
}
export default Food;