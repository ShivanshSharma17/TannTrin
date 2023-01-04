import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserAlt,faShoppingBag, faBookmark } from '@fortawesome/free-solid-svg-icons';

const categories = ['Bag', 'Travel', 'Accesories', 'Gifting', 'Jewellary' ];

const Nav=() =>{
return (
    <div>
        <span className='toppadding'><h2>TANN TRIM</h2></span>
        <span className='left'>
            <a className='pd'><FontAwesomeIcon icon ={faSearch}/></a>
            <a className='pd'><FontAwesomeIcon icon ={faUserAlt}/></a>
            <a className='pd'><FontAwesomeIcon icon ={faBookmark}/></a>
            <a className='pd'><FontAwesomeIcon icon ={faShoppingBag}/></a>
        </span>
        <div className='showItem'>
            {categories.map((items)=>(<span className='pd'>{items}</span>))}
        </div>
    </div>
)
}
export default Nav;
