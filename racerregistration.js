let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=true;
let runnerAge=22;
if (runnerAge>18 && registeredEarly){
  raceNumber+=1000;
}
if (runnerAge>18 && registeredEarly){
  console.log(`Race starts at 9:30am. Your race number is ${raceNumber}`);
  console.log(raceNumber);
} else if (runnerAge>18 && !registeredEarly){
  console.log(`Race Starts at 11:00am. Your race number is ${raceNumber}`);
}else if (runnerAge<18){
  console.log(`Race starts at 12:30pm Your race number is ${raceNumber}`)
}else {
  console.log(`See the registration desk`);
}