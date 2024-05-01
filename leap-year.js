// program to check leap year
function checkLeapYear(year) {

    const leap = year

    //three conditions to find out the leap year
   if ((leap%4==0) && (leap%100==0) || (leap%400==0)) {
        return ("leap year")
    } else {
        return("not leap year")
    }
}

// take input
const thisYear = 2000
const leapYear = checkLeapYear(thisYear)
console.log(leapYear)
const nextYear = 2010
const leapYearN = checkLeapYear(nextYear)
console.log(leapYearN)