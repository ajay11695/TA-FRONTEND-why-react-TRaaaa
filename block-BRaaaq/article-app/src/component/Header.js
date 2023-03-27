import "../style/index.css"

function Header(){
    return (
        <>
        <nav className="flex">
            <h1 className="brand">GIZMO</h1>
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