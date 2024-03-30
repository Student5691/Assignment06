// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm'), empTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount'), numOfEmps = 0;
empCount.textContent = '(Count: ' + numOfEmps +')'

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => document.getElementById(id)
    let empID = $('id'), fullName = $('name'), ext = $('extension'), email = $('email'), dept = $('department')

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(), cellName = row.insertCell(), cellExt = row.insertCell(), cellEmail = row.insertCell(), cellDept = row.insertCell(), cellDelete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID.value))
    cellName.appendChild(document.createTextNode(fullName.value))
    cellExt.appendChild(document.createTextNode(ext.value))
    cellEmail.appendChild(document.createTextNode(email.value))
    cellDept.appendChild(document.createTextNode(dept.value))
    
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button'), textDelete = document.createTextNode('X')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    deleteBtn.setAttribute('id', 'delBtn')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    empID.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    numOfEmps++
    empCount.textContent = '(Count: ' + numOfEmps +')'
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.id === 'delBtn') {
        if (confirm('Are you sure you want to delete this employee?')) {
            e.target.closest('tr').remove()
            numOfEmps--
            empCount.textContent = '(Count: ' + numOfEmps +')'
        }
    }
})