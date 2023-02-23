import './style.scss';

function Tags(props){
    let item = props.item
    return (
        <div className='footer-block'>
            <h2>POPULAR TAGS</h2>
            <div className='city-box box'>
                {item.map((el,i) => {
                    return (
                        <span key={i+60} style={{backgroundColor:i==0?'black':'#ccc'}}>{el.city}</span>
                    )
                })}
            </div>
        </div>
    )
}
export default Tags;