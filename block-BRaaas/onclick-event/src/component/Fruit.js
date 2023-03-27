
let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
];

function handleClick(name){
    alert(name)
}

function Fruit() {
    let allfruitBtn = fruits.map(fruit => {
        return (
            <>
                <button onClick={() => handleClick(fruit.id)}>{fruit.value}</button>
            </>
        )
    })

    return (
        <>
            {allfruitBtn }
        </>
    )
}

export default Fruit