import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div class="sc" onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(false)} >About Us</div>
            <input type="text" id="name" placeholder="Type something"></input>
            <buttton >Search</buttton>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header