const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//3.1
const searchCount = function (massJ) {
  massJ.forEach(org => {
    let sum = 0;
    let newEnterprises = []
    if (org.departments) {
      sum=0
      org.departments.forEach(dept => {
        sum+=dept.employees_count
        if(dept.employees_count === 0){
          newEnterprises.push('- ' + dept.name + ' (нет сотрудников)')
        } else{
          newEnterprises.push('- ' + dept.name + ' (' + dept.employees_count + ' сотрудников)')
        }
        })
    }
    if(sum===0){
      console.log(org.name + ' (нет сотрудников)')
    } else{
      console.log(org.name + ' (' + sum + ' сотрудников)')
    }
    console.log(newEnterprises.join('\n'))
  })
}

//searchCount(enterprises)


//3.2
const getEnterpriseName = function(item_1){
  enterprises.forEach(org => {
    org.departments.forEach(dept => {
      if(dept.id === item_1 || dept.name === item_1){
        console.log(org.name)
      }
    })
   }) 
}

// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")


//генерация нового id
const newId = function(){
  let newId = 0
  enterprises.forEach(org => {
    org.departments.forEach(dept => {
      newId = dept.id
    })
    newId+=1
  })
  return newId
}


//3.3
const addEnterprise = function(item_1){
  enterprises.push({id: newId(), name: item_1, departments: []})
}

addEnterprise("Название нового предприятия")
//console.log(enterprises)


//3.4
const addDepartment = function(item_1, item_2){
  enterprises.forEach(org => {
    if(org.id === item_1){
      org.departments.push({id: newId(), name: item_2, employees_count: 0})
    }

  })
  
}

addDepartment(1, "Название нового отдела")
//console.log(enterprises)
//console.log(enterprises[0].departments)


//3.5
const editEnterprise = function(item_1, item_2){
  enterprises.forEach(org => {
    if(org.id === item_1){
      org.name = item_2
    }
  })
}

editEnterprise(1, "Новое название предприятия")
//console.log(enterprises)


//3.6
const editDepartment = function(item_1,item_2){
  enterprises.forEach(org => {
    org.departments.forEach(dep => {
      if(dep.id === item_1){
        dep.name = item_2
      }
    })

  })
}

editDepartment(7, "Новое название отдела")
//console.log(enterprises[1].departments)


//3.7
const deleteEnterprise = function(item_1){
  enterprises.forEach((org, i) =>{
    if(org.id === item_1){
      enterprises.splice(i, 1)
    }
  })
}
//deleteEnterprise(1)
//console.log(enterprises)


//3.8
const deleteDepartment = function(item_1){
  enterprises.forEach((org,i) =>{
    org.departments.forEach((dep,j) =>{
      if(dep.id === item_1){
        if(dep.employees_count === 0){
          enterprises[i].departments.splice(j, 1)
        }
      }
    })
  })
}
//deleteDepartment(12)
//console.log(enterprises[0])


//3.9
const moveEmployees = function(item_1, item_2){
  let buf=0
  enterprises.forEach(org =>{
    org.departments.forEach(dep =>{
      if(dep.id === item_1){
        org.departments.forEach(copy =>{
          if(copy.id === item_2){
            buf=dep.employees_count
            dep.employees_count=copy.employees_count
            copy.employees_count=buf
          }
        })
      }
    })
  })
}

//moveEmployees(2, 3)
console.log(enterprises[0])