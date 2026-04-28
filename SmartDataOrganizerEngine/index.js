
// 🟢 LEVEL 1 (Basic Sorting) [1–10]
// Users ko salary ascending me sort karo
const userOrderBySalary = (data)=>{
  return data.toSorted((a, b) => a.salary - b.salary);
}
console.log('Asc order by Salary:', userOrderBySalary(users));
// Salary descending me sort karo
const descOrderBySalary = (data) => {
  return data.toSorted((a,b) => b.salary - a.salary)
}
console.log('Desc order by Salary:', descOrderBySalary(users));
// Age ascending sort karo
const getUserOrderByAge = (data) => {
  return data.toSorted((a, b) => a.age - b.age)
}
console.log('user order by age :', getUserOrderByAge(users))
// Name alphabetically sort karo
const userNameAscSort = data => {
  return data.toSorted((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map(u  => u.name)
}
console.log('Name alphabetically sort : ', userNameAscSort(users))
// Name reverse alphabetically
const userSortDescOrder = data => {
  return data.toSorted((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())).map(u => u.name)
}
console.log('desc order name :', userSortDescOrder(users))
// Cities alphabetically
const getCitiesAlphaSort = data => {
   return data.toSorted((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
}
console.log('cities sort by asc:' , getCitiesAlphaSort(users))
// Users ko id ke basis pe sort karo
const userSortById = data =>{
  return data.toSorted((a,b) => a.id - b.id)
}
console.log('user sort by id: ', userSortById(users))
// Shortest name first
const shortestNameUser = data =>{
  return data.toSorted((a, b) =>{
     const lenDiff = a.name.length - b.name.length;
    if(lenDiff !== 0) return lenDiff;
    return a.name.localeCompare(b.name);
  });
}

console.log('shortest name :', shortestNameUser(users))
// Longest name first
const longestNameLenFirst = data =>{
  return [...data].sort((a,b) => {
    const lenDiff = b.name.length - a.name.length;
    if(lenDiff !== 0) return lenDiff;
    return b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
  })
};

console.log('longest name order :',longestNameLenFirst(users) )
// Salary even wale users pehle
const sortEvenThenSalary = (data) => {
  return data.toSorted((a, b) => {
    const diff = (a.salary % 2) - (b.salary % 2);
    if (diff !== 0) return diff;

    return a.salary - b.salary;
  });
};
console.log('salary even order : ', sortEvenThenSalary(users))
