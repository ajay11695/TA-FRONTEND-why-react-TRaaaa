let input = document.querySelector('input[type="text"]')
let rootEle = document.querySelector('.movie_list')

let allMovie = [
    {
        name: 'Forest gump',
        iswatched: false
    },
    {
        name: 'Inception',
        iswatched: false
    }
]

input.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && event.target.value) {
        let obj = {
            name: event.target.value,
            iswatched: false
        }
        allMovie.push(obj)
        event.target.value = ''
        createUI()
    }
})

function handleChange(e) {
    let id = e.target.id
    allMovie[id].iswatched = !allMovie[id].iswatched
    createUI()
}

let elm = React.createElement

function createUI(data = allMovie) {
    let movieUI = data.map((ele, i) => {
        // let li = elm(
        //     "li",
        //     { className: 'flex' },
        //     elm('p', {}, ele.name),
        //     elm('button', { id: i, onClick: handleChange, className: ele.iswatched ? 'btn' : '' }, ele.iswatched ? "Watched!" : 'To Watch'),
        // )
        return (
            <li class="flex" key={ele.name}>
                <p>{ele.name}</p>
                <button id={i} class={ele.iswatched ? 'btn' : '' }  onClick={handleChange}>{ele.iswatched ? "Watched!" : 'To Watch'}</button>
            </li>
        )
    })
    ReactDOM.render(movieUI, rootEle)
}

createUI()

