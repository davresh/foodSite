import './style.scss';
import workshop from '../../assets/images/workshop.jpg'
import gondol from '../../assets/images/gondol.jpg'
function Blog(){
    return (
        <div className='footer-block'>
            <h2>BLOG POSTS</h2>
            <div className='blog-box blog-box-border'>
                <div className='blog-img'>
                    <img src={`${workshop}`} alt="workshop"/>
                </div>
                <div className='blog-text'>
                    <h4>Lorem</h4>
                    <h5>Sed mattis nunc</h5>
                </div>
            </div>
            <div className='blog-box'>
                <div className='blog-img'>
                    <img src={`${gondol}`} alt="workshop"/>
                </div>
                <div className='blog-text'>
                    <h4>Ipsum</h4>
                    <h5>Praes tinci sed</h5>
                </div>
            </div>
        </div>
    )
}
export default Blog;