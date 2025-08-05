let container = document.querySelector('.container')

function main() {
    gridCreate(16,16)
    hoverChange()
}

main()

// grid creating function

function gridCreate(rowNum,colNum) {
    for (let i = 0; i < colNum; i++) {
        let col = document.createElement('div')
        col.classList.add('col')
        for (let j = 0; j < rowNum; j++) {
            let ro = document.createElement('div')
            ro.classList.add('ro')
            ro.classList.add('hover')
            ro.style.width = "20%"
            col.appendChild(ro)
        }
        container.appendChild(col)
    }
}

// hover color change function

function hoverChange() {
    let divColorChange = document.querySelectorAll('.hover')

    divColorChange.forEach((e)=> {
        e.addEventListener('mouseover', (element)=> {
            element.target.style.backgroundColor = "red"
        })
    })

}