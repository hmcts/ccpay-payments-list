# ccpay-payments-list

HTML5 Web component to display lists of payments

# How to install

# Node.js / Angular

1. npm i @hmcts/ccpay-payments-list
2. modify your build process so it copies these files to locations where they will be visible on the client-side.

# Vanilla

Copy the following files to your project:

- imports/webcomponents-bundle.js
- imports/json2html.js
- payments.js

# How to use

 - Import the 3 scripts from the locations they are visible. Example:
 
 `<script src="../imports/webcomponents-bundle.js">`
  `</script>`
  `<script src="../imports/json2html.js">`
  `</script>`
  `<script src="../payments.js" defer>`
  `</script>`   
  
  - Declare the template
  
  `<template id="payments-list"></template>`
  
  - Place the component where you want to be rendered
  
 `<payments-list data='jsonDataAsItComesFromTheService'></payments-list>`
  
  In the data attribute pass the body response received from the payments by case endpoint
