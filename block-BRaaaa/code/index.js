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

function inputHandle(event){
    // console.log(event.target.value,event.keyCode)
    if(event.keyCode==13 && event.target.value){
        let obj={
            name: event.target.value,
            iswatched: false
        }

        allMovie.push(obj)
        createUI()
    }
}

function handleChange(e){
    let id =e.target.id
    console.log(id)
    allMovie[id].iswatched=! allMovie[id].iswatched
    createUI()
}

function createUI(data=allMovie){
    rootEle.innerHTML=''
    data.forEach((ele,i)=>{
        let div=document.createElement('div')
        div.className='flex'
        let p=document.createElement('p')
        p.innerText=ele.name
        let button=document.createElement('button')
        button.id=i
        if(ele.iswatched){
            button.classList.add('btn')
        }else{
            button.classList.remove('btn')
        }
        button.innerText=ele.iswatched?"Watched!":'To Watch'
        button.addEventListener('click',handleChange)
        let hr=document.createElement('hr')
        
        div.append(p,button)
        rootEle.append(div,hr)
    })
}

input.addEventListener('keyup',inputHandle)

createUI()
