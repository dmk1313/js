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

// let a = 0;

// for(let i = 0; i < enterprises.length; i++){
//   for(let j = 0; j < departments.length; j++){
//     console.log(i.enterprises.departments.j.name)
//   }
// } 



//что то можно придумать
//console.log(enterprises.departments[0].name)



// let sum = 0
//   for(let i = 0; i < enterprises.length; i++){
//     console.log(enterprises[i].name, '(' + sum, 'сотрудников)')
//     sum=0
//     for(let j = 0; j < enterprises.length; j++){
//       sum+=enterprises[i].departments[j].employees_count;
//       if(enterprises[i].departments[j].employees_count === 0){
//         console.log(enterprises[i].name, '(нет сотрудников)')
//         console.log('-', enterprises[i].departments[j].name, '(нет сотрудников)')
//         break
//       } 
//         console.log('-', enterprises[i].departments[j].name, '('+ 
//         enterprises[i].departments[j].employees_count, 'сотрудников)')
//     }
//   }
  

//
// const copy = []
// enterprises.forEach(function(el, i){
//   copy.push(el.name)
//   copy.push(el.employees_count[i])
//   //for(let i = 0; i < enterprises.length; i++){
//   //copy.push(el.departments)
//   //}
  
// })
// console.log(copy)

// const findEmployees = function(massJ){
//   for(let i = 0; i<massJ.length; i++){
//     console.log(massJ.filter(el => el.departments.name !==0))
//   }
// }

// findEmployees(enterprises)

let sum = 0;

enterprises.forEach(org => {
  let newEnterprises = []
  if (org.departments) {
    sum=0
    org.departments.forEach(dept => {
      sum+=dept.employees_count
      if(dept.employees_count === 0){
        newEnterprises.push('- ' + dept.name + ' (нет сотрудников)')
      } else{
        newEnterprises.push('- ' +  dept.name + ' (' + dept.employees_count + ' сотрудников)')
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




// let sum = 0;


// enterprises.forEach(org => {
// let newEnterprises = []
//   if (org.departments) {
//       let array = []
//     sum=0
//     org.departments.forEach(dept => {
//       sum+=dept.employees_count
//       newEnterprises.push('- ' +  dept.name + ' (' + dept.employees_count + ' сотрудников)')

//       })
//   }
//   console.log(org.name + ' ' + sum + ' сотрудников')
//   console.log(newEnterprises)
// })