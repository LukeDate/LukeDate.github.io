import React from 'react';

const Hamsa = () => {
    //determine if string has all unique characters
    let s1 = "interview"; //true
    let s2 = "elephant"; //false
    let s3 = "unique"; //false
    let s4 = "brandy"; //true

    //intial thought, use object.
    const uniqueChars = (str) => {
        let strArr = str.split('');
        let charObj = {
        };
        for(var i = 0; i < strArr.length; i++) {
            let word = strArr[i];
            charObj[word] = charObj[word] ? 'FALSE' : 1;
            if(charObj[word] === 'FALSE') {
                return false;
            }
        }
        return true;
    }



    return (
        <div>
            {
                console.log(uniqueChars(s1)
                )
            
            }
        </div>
    )
}

export default Hamsa;