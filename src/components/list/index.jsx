import './style.scss';
function List({food,serchFood}){
    return (
        <input 
        className='list-box' type="button" value={food} 
        onClick={()=>{serchFood(food)}}
        />
    )
}
export default List;