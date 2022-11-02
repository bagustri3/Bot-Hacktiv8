'use strict';

const fs = require('fs');
const axios = require("axios");
const https = require("https")


   const result = async ()  => {
    const aa = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=1`)
    // console.log(data)
    console.log(aa.data.data[0].id)
    return aa
}
// class Test {
//     static async html(req, res) {
//         try {
//             const result = await https.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=1`)
//             console.log(result)
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }

// console.log(axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=epaga`))
result()
// Test.html()