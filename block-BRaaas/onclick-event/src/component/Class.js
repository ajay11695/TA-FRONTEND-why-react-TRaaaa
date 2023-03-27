
function handleClick(){
    alert('Hello React Event')
}

function handleHelpClick(){
    alert('To learn React use https://reactjs.org')
    alert('React and ReactDOM works together')
    alert('Babel helps in writing JSX')
}

function handlenameClick(name,event){
    alert(`Hello ${name}`)
}

function Class(){
    return (
        <>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={handleHelpClick}>How can help you?</button>
        <button onClick={(event)=>handlenameClick('Arya',event)}>Arya</button>
        <button onClick={(event)=>handlenameClick('John',event)}>John</button>
        <button onClick={(event)=>handlenameClick('Bran',event)}>Bran</button>
        </>
    )
}

export default Class