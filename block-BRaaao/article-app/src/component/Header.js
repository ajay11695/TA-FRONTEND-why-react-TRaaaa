import "../style/index.css"

function Header(){
    return (
        <>
        <nav className="flex">
            <a href="#" className="brand">GIZMO</a>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </>
    )
}

export default Header