let container = document.querySelector('.container')



function gridCreate(rowNum,colNum) {
    for (let i = 0; i < column; i++) {
        let col = document.createElement('div')
        col.classList.add('col')
        for (let j = 0; j < row; j++) {
            let ro = document.createElement('div')
            ro.classList.add('ro')
            ro.style.width = "20%"
            col.appendChild(ro)
        }
        container.appendChild(col)
    }
}
