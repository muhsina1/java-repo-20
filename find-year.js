function findLeapYear(years) {

    for (var i = 0; i < years.length; i++) {
        const element = years[i]
        if (years[i] % 4 == 0 && years[i] % 100 != 0 || years[i] % 400== 0) {

            console.log(element)

        }

    }

}

const myYears = [2023, 2024, 2025, 2032, 2028, 2030]
findLeapYear(myYears)
