const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]

//   const reckur = function(item_1){
//     if (Array.isArray(item_1)) { // случай (1)
//         return item_1.reduce((prev, current) => prev + current.name); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(item_1)) {
//         sum += reckur(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     } 
//   }
//   console.log(reckur(company))

  const searchCount = function (massJ) {
    for (let i = 0; i < massJ.length; i++) {
        if (Array.isArray(massJ[i])) { // if array
          incrementNestedNumbers(massJ[i]);
        } else { // if number
          massJ[i]
        }
      }
    }
  
//searchCount(company)
console.log(searchCount(company))
//console.log(company)