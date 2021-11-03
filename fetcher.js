//required files
const fs = require('fs')
const request = require('request');

//command line arguments
const command = process.argv.slice(2);
const url = command[0];
const filePath = command[1]


//const content = 'Some content!'
let size = 0;


//request from server
request(url, (error, response, body) => {
  //variable to hold content
  let content = error + response + body

  //write to the content to the file
  fs.writeFile(filePath , content, {flag: 'a+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    //read the file to get the size
    fs.readFile(filePath, 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      size = data.length
      let message = `Downloaded and saved ${size} bytes to ${filePath}.`
      console.log(message)
    })

    //file written successfully
  })
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});


 