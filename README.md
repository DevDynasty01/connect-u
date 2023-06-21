# ConnectU - A Task Manager Portal 

Clients are facing decreased productivity. They need a centralized solution to manage tasks. 

## Why Connect-U?
ConnectU gives managers and employees a centralized place where managers can delegate tasks to their employees and employees can easily view what tasks are assigned increasing productivity. 

## To launch this app: 

1. Clone this repo
2. Run ```npm i```
3. Build your mySQL DB using employeeDB and tasksDB files. 
    1. These.sql files can be foun in /server/Database
4. In /server/firebase, add your own firebaseConfig.js file. 
``` 	apiKey: process.env.APP_FIREBASE_API_KEY,
      authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
	    projectId: process.env.APP_FIREBASE_PROJECT_ID,
	    storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
	    messagingSenderId: process.env.APP_FIREBASE_MESSAGING_SENDER_ID,
	    appId: process.env.APP_FIREBASE_APP_ID, 
  ```
5. Run 
```npm run dev ```
6. Try it out!
  To test the app as a manager user use:  
  email: ghopper@devedynasty.com 
  password: 123456

  While logged in as a manager, you can add a new task  to Ada Lovelace and see it pop up when you login as her.
  
  To test the app as an employee user use: 
  email: alovelace@devdynasty.com
  password:123456

  Also, feel free to create a new user and log in to your new account after.
  

  

