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
