import './style.scss';
import chef from '../../assets/images/chef.jpg';
function About(){
    return (
        <section className='about box' id='about'>
            <h1>About Me, The Food Man</h1>
            <div className='about-img'><img src={`${chef}`} alt="" /></div>
            <div className='aboutChef'>
                <h3>I am Who I Am!</h3>
                <h4>With Passion For Real, Good Food</h4>
                <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
        </section>
    )
}
export default About;