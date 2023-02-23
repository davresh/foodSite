import './style.scss';

import Food from '../../components/food';
import List from '../../components/list';
import About from '../../components/about';
import { useContext, useEffect, useState } from 'react';
import { myContext } from '../../assets/MyContext';
function Section(){
    let box = useContext(myContext)
    let [blockFood,setBlockFood] = useState(box.foodBox)
    let [btnVal,setBtnVal] = useState('')
    let [opaen,setOpaen] = useState(0)
    let [boxMany,setBoxMany] = useState('none')
    let [value,setValue] = useState(500)
    useEffect(()=>{
        btnVal.length?setOpaen('flex'):setOpaen('none');
        let clock = setTimeout(()=>{
            setBlockFood(box.foodBox.filter(el => {
                if(el.foodName.toLowerCase().includes(btnVal.toLowerCase())){
                    return el
                }
            }))
       },1000);
       return()=>{
            clearTimeout(clock)
       }
    },[btnVal])
    return (
        <section className='block box' id='food'>
            <div className='serchFood box'>
                <div className='box-change'><input type="text" placeholder='Search Food' value={btnVal} onChange={(e)=>{
                    setBtnVal(e.target.value)
                }}/></div>
                <div className='box-change'><h1>{'value - ' + value + ' $'}</h1></div>
                <div className='box-no-many' style={{display:boxMany}}>
                    <div className='no-many'>
                        <button onClick={()=>{
                            setBoxMany('none')
                        }}>X</button>
                        <h1>Դուք չունեք բավարար միջոցներ</h1>
                    </div>
                </div>
                <div className='resultSearch' style={{display:opaen}}>
                    {blockFood.map((el,i) => {
                        if(i <= 4){
                            return (
                                <div key={el.id} onClick={()=>{
                                    setBtnVal(el.foodName)
                                    setOpaen('none')
                                }}>
                                    <h3>{el.foodName}</h3>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            {blockFood.map(el => <Food key={el.id} item={el} onBuy={(val)=>{box.buyFood(value,val,setValue,setBoxMany)}}/>)}
            <div className='list box'>
                {box.numbers.map(el => <List key={el.id} food={el.num} serchFood={(food)=>{
                    if(food=='all'){
                        setBlockFood(box.foodBox)
                    }else{
                        setBlockFood(box.foodBox.filter(el => el.food == food))
                    }
                }}/>)}
            </div>
            
            <About/>
        </section>
    )
}
export default Section;