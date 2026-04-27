const users = [
  {
    id: 1,
    name: "Aman",
    age: 22,
    active: true,
    salary: 30000,
    city: "Delhi",
    skills: ["js", "react"],
  },
  {
    id: 2,
    name: "Sara",
    age: 28,
    active: false,
    salary: 50000,
    city: "Mumbai",
    skills: ["python", "ml"],
  },
  {
    id: 3,
    name: "John",
    age: 25,
    active: true,
    salary: 40000,
    city: "Delhi",
    skills: ["js", "node"],
  },
  {
    id: 4,
    name: "Priya",
    age: 30,
    active: true,
    salary: 60000,
    city: "Bangalore",
    skills: ["java", "spring"],
  },
  {
    id: 5,
    name: "Rahul",
    age: 27,
    active: false,
    salary: 45000,
    city: "Mumbai",
    skills: ["js", "angular"],
  },
  {
    id: 6,
    name: "Neha",
    age: 24,
    active: true,
    salary: 35000,
    city: "Delhi",
    skills: ["react", "node"],
  },
  {
    id: 7,
    name: "Aman",
    age: 29,
    active: true,
    salary: 70000,
    city: "Bangalore",
    skills: ["go", "docker"],
  },
  {
    id: 8,
    name: "Isha",
    age: 26,
    active: false,
    salary: 38000,
    city: "Pune",
    skills: ["html", "css"],
  },
  {
    id: 9,
    name: "Arjun",
    age: 31,
    active: true,
    salary: 80000,
    city: "Delhi",
    skills: ["js", "react", "node"],
  },
  {
    id: 10,
    name: "Meena",
    age: 23,
    active: true,
    salary: 30000,
    city: "Pune",
    skills: ["python", "django"],
  },
];

// safe check
const safeCheck = (data) => {
  return Array.isArray(data) && data.length > 0;
};
// total salary
const usersTotalSalary = (data) => {
  // if (!Array.isArray(data) || data.length === 0) return false;
  if (!safeCheck(data)) return [];
  return data.reduce((total, user) => total + user.salary, 0);
};

const totalSalary = usersTotalSalary(users);
console.log("total salary :", totalSalary);

// total age
const usersTotalAge = (data) => {
  if (!safeCheck(data)) return [];
  return data.reduce((acc, curr) => acc + curr.age, 0);
};

console.log("total age of users :", usersTotalAge(users));

// all users name without map
const usersName = (data) => {
  if (!safeCheck(data)) return [];
  // return data.map(u => u.name);
  return data.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
  }, []);
};
console.log("users name :", usersName(users));

// count active users
/*const countActiveUsers = (data) =>{
  return data.filter(u => u.active).length;
};

console.log('active users are :', countActiveUsers(users));
*/
// count active users (without filter);
const getActiveUsersLength = (data) => {
  return data.reduce((acc, user) => {
    return user.active ? acc + 1 : acc;
  }, 0);
};
console.log("active users are:", getActiveUsersLength(users));

// inactive users count
const getInActiveUsers = (data) => {
  return data.reduce((count, u) => {
    return u.active === false ? count + 1 : count;
  }, 0);
};
console.log("inActive users :", getInActiveUsers(users));

// count user who earns more than 40k
const getAboveSalary = (data) => {
  return data.reduce((acc, curr) => {
    return curr.salary > 40000 ? acc + 1 : acc;
  }, 0);
};

console.log("salary > 40k :", getAboveSalary(users));

// total skills
const getTotalSkills = (data) => {
  return data.reduce((count, u) => {
    return count + u.skills.length;
  }, 0);
};

console.log("skill count: ", getTotalSkills(users));

// Har city me kitne users hain 👉 output: { delhi: 3, mumbai: 2 }
const getUserCountByCity = (data) => {
  return data.reduce((acc, curr) => {
    const c = curr.city;
    if (acc[c]) acc[c]++;
    else acc[c] = 1;
    return acc;
  }, {});
};

console.log("users by city:", getUserCountByCity(users));

// get total salary by cities
const getTotalSalaryByCity = (data) => {
  return data.reduce((acc, curr) => {
    const city = curr.city;
    if (acc[city]) acc[city] += curr.salary;
    else acc[city] = curr.salary;
    return acc;
  }, {});
};

console.log(getTotalSalaryByCity(users));

// skill count
const getSkillFrequencyCount = (data) => {
  return data.reduce((acc, user) => {
    user.skills.forEach((skill) => {
      acc[skill] = (acc[skill] || 0) + 1;
    });
    return acc;
  }, {});
};

console.log("skill count: ", getSkillFrequencyCount(users));

// active users total salary
const getTotalSalaryByActiveUsers = (data) => {
  return data.reduce((acc, user) => {
    return user.active ? acc + user.salary : acc;
  }, 0);
};

console.log("active user total salary", getTotalSalaryByActiveUsers(users));

// user +  salary output => {aman : 30000, sara: 60000};
const transformedUsers = (data) => {
  return data.reduce((acc, curr) => {
    const n = curr.name;
    if (acc[n]) acc[n].push(curr.salary);
    else acc[n] = [curr.salary];
    return acc;
  }, {});
};

console.log(transformedUsers(users));

// create an object => {totalUsers,activeUsers,inactiveUsers,totalSalary}

const genrateReportOne = (data) => {
  return data.reduce((acc, user) => {
    // tatal user
    acc.totalUsers += 1;

    // active user and inactive 
    if(user.active) acc.activeUsers += 1 ;
    else acc.inactiveUsers += 1;

    // total salary
    acc.totalSalary += user.salary

    // higehst salary user
   
    return acc
  }, {
      totalUsers: 0,
      activeUsers: 0,
      inactiveUsers: 0,
      totalSalary: 0,
    highestSalaryUser: null,
    lowestSalaryUsers:null
  });
};

console.log("Report One :", genrateReportOne(users));


const getCityWithHighestAvg = (data) => {
  const cityData = data.reduce((acc, curr) => {
    const c = curr.city;
    if (!acc[c]) {
      acc[c] = {
        total: 0,
        count: 0,
      };
    }

    acc[c].total += curr.salary;
    acc[c].count += 1;

    return acc;
  }, {});

  let maxAvg = null;
  let maxCity = null;

  for (const city in cityData) {
    const { total, count } = cityData[city];
    const avg = total / count;

    if (avg > maxAvg) {
      maxAvg = avg;
      maxCity = city;
    }
  }

  return maxCity;
};

console.log("city with highest salary avg :", getCityWithHighestAvg(users));

