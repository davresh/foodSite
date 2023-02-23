import { useContext } from 'react';
import { myContext } from '../../assets/MyContext';
import Blog from '../../components/blog';
import Praesent from '../../components/praesent';
import Tags from '../../components/tags';
import './style.scss';

function Footer(){
    let box = useContext(myContext)
    return (
        <footer className='footerBox box'>
            <Praesent/>
            <Blog/>
            <Tags key={box.city.map(el => el.id)} item={box.city}/>
        </footer>
    )
}
export default Footer;