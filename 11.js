const jungle = [
    { name: "frog", threat: 0 },
    { name: "monkey", threat: 5 },
    { name: "gorilla", threat: 5 },
    { name: "lion", threat: 10 }
  ];
  
//   // break the object down in order to use .includes() or .indexOf()
//   const names = jungle.map(el => el.name); // returns ['frog', 'monkey', 'gorilla', 'lion']
//   console.log(names.includes("gorilla")); // returns true
//   console.log(names.indexOf("lion")); // returns 3 - which corresponds correctly assuming no sorting was done
  
//   // methods we can do on the array of objects
 console.log(jungle.find(el => el.threat === 5)); // returns object - {name: "monkey", threat: 5}
  console.log(jungle.filter(el => el.threat === 5)); // returns array - [{name: "gorilla", threat: 8}, {name: 'lion', threat: 10}]