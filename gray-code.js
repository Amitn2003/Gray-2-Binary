function grayCode() {
    let opr1 = document.getElementById('binaryIp').value
    console.log(opr1)
    bin = String(opr1)
    array = []
    result = bin[0]
    carry = 0
    for (let i = 0; i < bin.length; i++) {
        array.push(bin[i]);
        if (i != 0) {
                if (bin[i - 1] == 0 && bin[i] == 0) {
                    result = result + '0'
                }
                else if (bin[i - 1] == 0 && bin[i] == 1) {
                    result = result + '1'
                }
                else if (bin[i - 1] == 1 && bin[i] == 0) {
                    result = result + '1'
                }
                else if (bin[i - 1] == 1 && bin[i] == 1) {
                    result = result + '0'
            }
        }
    }
    console.log(array)
    console.log("Result is ", result)
    const rst = document.querySelector('.result')
    rst.innerText = "The answer is "+ result
};  

function check (num1 , grayResult) {
    console.log(num1, " ", Array(grayResult))
    console.log(grayResult.length)
    lengthhhh = grayResult.lenght
    grayResult = String(grayResult)
    console.log("Type of grayResult is", typeof(grayResult))
    console.log("Length of grayResult is", grayResult.lenght)
    if (num1 == 0 && grayResult[lengthhhh] == 0) {
        grayResult = grayResult.concat("0")
    }
    else if (num1 == 1 && grayResult[lengthhhh] == 0) {
        grayResult = grayResult.concat("1")
    }
    else if (num1 == 0 && grayResult[lengthhhh] == 1) {
        grayResult = grayResult.concat("1")
    }
    else if (num1 == 1 && grayResult[lengthhhh] == 1) {
        grayResult = grayResult.concat("0")
    }
    else {
        console.log("Check 'check' func!")
    }
}


function binaryCode() {
    let gr = document.getElementById('grayIp').value
    console.log(gr)
    grayString = String(gr)
    gray = String(gr)
    tryResult = String(gray[0])
    tryResult = String(tryResult)
    for (let i = 1; i <= gray.length; i++) {
        console.log(gray[i])
        console.log("Now the result is ;;:", tryResult)
        console.log("Try Result lengh is ", tryResult.slice(-1))
        console.log("Try Result type is ", typeof(tryResult))
        if (gray[i] == 0 && tryResult.slice(-1) == 0) {
            console.log("First is ",gray[i], "2nd is", tryResult.slice(-1))
            tryResult = tryResult + "0"
        }
        else if (gray[i] == 1 && tryResult.slice(-1) == 0) {
            console.log("First is ",gray[i], "2nd is", tryResult.slice(-1))
            tryResult = tryResult + "1"
        }
        else if (gray[i] == 0 && tryResult.slice(-1) == 1) {
            console.log("First is ",gray[i], "2nd is", tryResult.slice(-1))
            tryResult = tryResult + '1'
        }
        else if (gray[i] == 1 && tryResult.slice(-1) == 1) {
            console.log("First is ",gray[i], "2nd is", tryResult.slice(-1))
            tryResult = tryResult + "0"
        }
    }
    console.log("Final result is -- ", tryResult)
    const binresult = document.querySelector('.resultbin')
    binresult.innerText = "The answer is " + tryResult
}
