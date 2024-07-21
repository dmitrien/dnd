import './index.css';

const lists = document.querySelectorAll('.list')

function addTaSK() {
    const btn = document.querySelector('.add_btn')
    const addBtn = document.querySelector('.add_item-btn')
    const cancelBtn = document.querySelector('.cancel_item-btn')
    const textarea = document.querySelector('.textarea') 
    const form = document.querySelector('.form')

    let value 

    btn.addEventListener('click', () => {
        form.style.display = 'block'
        btn.style.display = 'none'
        addBtn.style.display = 'none'

        textarea.addEventListener('input', e => {
            value = e.target.value

            if (value) {
                addBtn.style.display = 'block'
            } else {
                addBtn.style.display = 'none'
            }
        })
    })

    cancelBtn.addEventListener('click', () => {
        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'flex'
    })

    addBtn.addEventListener('click', () => {
        const newItem = document.createElement('div')
        newItem.classList.add('list_item')
        newItem.draggable = true
        newItem.textContent = value
        lists[0].append(newItem)
        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'flex'
        dragAndDrop()
    })


}

addTaSK()

let draggedItem = null

function dragAndDrop() {
    const listItems = document.querySelectorAll('.list_item')
    const lists = document.querySelectorAll('.list')

    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i]

        item.addEventListener('dragstart', () => {
            item.style.cursor = 'grabbing'
            draggedItem = item
            setTimeout(() => {
                item.style.display = 'none'
            }, 0)
        })

        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.display = 'block'
                draggedItem = null
            }, 0)

        })


        for (let j = 0; j < lists.length; j++){
            const list = lists[j]

            list.addEventListener('dragover', e => e.preventDefault())
            
            list.addEventListener('drop', function (e) {
                this.append(draggedItem)
            })

        }
    }
    
}

dragAndDrop()