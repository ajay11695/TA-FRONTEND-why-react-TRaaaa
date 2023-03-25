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

function inputHandle(event) {
    if (event.keyCode == 13 && event.target.value) {
        let obj = {
            name: event.target.value,
            iswatched: false
        }
        allMovie.push(obj)
        createUI()
    }
}

function handleChange(e) {
    let id = e.target.id
    allMovie[id].iswatched = !allMovie[id].iswatched
    createUI()
}

function elm(type, attribute = {}, ...children) {
    let element = document.createElement(type)
    for (let key in attribute) {
        if (key.startsWith('data-')) {
            element.setAttribute(key, attribute[key])
        }else if(key.startsWith('on')){
            let eventType=key.replace('on','').toLowerCase()
            element.addEventListener(eventType,attribute[key])
        }else {
            element[key] = attribute[key]
        }

    }
    children.forEach(child => {
        // console.log(child, typeof child)
        if (typeof child === 'object') {
            element.append(child)
        }
        if (typeof child === 'string') {
            let node = document.createTextNode(child)
            element.append(node)
        }
    })

    return element
}


function createUI(data = allMovie) {
    rootEle.innerHTML = ''
    data.forEach((ele, i) => {
        let li = elm("li",{ className: 'flex'},
            elm('p', {}, ele.name),
            elm('button', { id: i ,onClick:handleChange}, ele.iswatched ? "Watched!" : 'To Watch'),
        )
        rootEle.append(li)
    })
}

// function createUI(data=allMovie){
//     rootEle.innerHTML=''
//     data.forEach((ele,i)=>{
//         let li=elm("li",{className:'flex'})
//         let p=elm('p',{innerText:ele.name})
//         let button=elm('button',{"data-id":i,innerText:ele.iswatched?"Watched!":'To Watch'})
//         if(ele.iswatched){
//             button.classList.add('btn')
//         }else{
//             button.classList.remove('btn')
//         }

//         button.addEventListener('click',handleChange)
//        

//         li.append(p,button)
//         rootEle.append(li)
//     })
// }

input.addEventListener('keyup', inputHandle)

createUI()

