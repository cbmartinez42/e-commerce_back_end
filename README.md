# E-commerce Back End

This is an application to create a MySQL database for product information for e-commerce purposes. This application allows a user to view, modify and delete product, category and product tag info

  
A [video walkthrough](https://youtu.be/_PoDF5K7n2Q) is available

## Features
* Utilizes Node.js with the Sequelize module to allow for functionality 
    * Sequelize uses model associations to manage relationships between models
    * Route management functionality assisted by Sequelize as well


### Challenges
* Model associations proved to be the biggest challenge with this project
    * Properly setting associations between multiple tables, as well as functionality for cascading was a little confusing, but by referring to the Sequelize documentation as well as reaching out to other developers, this challenge was overcome


## Credits
Many thanks to the below individuals who provided input and suggestions
* Mim Armand
* Stephen Simone
* Jay Yousef 
* And last, but not least - *Grogu*
        
<img src="./assets/images/grogu.png">


If any additional issues are found, or if there are any suggestions for improvement, please send an email to developer Chris Martinez at cbmartinez42@gmail.com

---

### <ins>Installation</ins>
1.  Clone or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  Copy the content from `schema.sql` and paste into your favorite SQL GUI to create the database
4.  Update the information in `.env.EXAMPLE` with your username and password and rename the file as `.env`
5.  Type `npm run seed` in your terminal to seed the database
6.  When ready, type `npm start` in your terminal to launch `server.js`

#### <ins>Cloning</ins>
1. From Github, select the "Code" button, choose either HTTPS or SSH as appropriate
2. Click the copy button <img src="./assets/images/copy-button.PNG"> to add it to your clipboard
3. In your preferred command line (terminal, bash, etc), navigate to the folder you'd like to download the repository into
4. Type `git clone [pasted url from clipboard]` and press enter


#### <ins>Zip file</ins>
1. From Github, select the "Code" button, then select "Download ZIP"
2. Choose which folder to download the repository into via the dialog box that appears
3. After downloading, open the .zip file and select "Extract All" from the top of the window that appears


---

This application is covered under [MIT License](./LICENSE)


