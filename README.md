WebdriverIO Framework Architecture (Appium + Java SCript)
===============

Installing
----------

1. If you are new to VsCode and JavaScript, appium then
    a. First learn the basics of `JavaScript`, `WebdriverIO`, & `POM design pattern`
    b. Install `node.js`, `Java-JDK`, `Android SDK`, `Appium inspector` to your local machine

2. Go to terminal from given project navigation tab
    a. To clone this project repository to you local run below command in terminal
        `git clone repository URL(https://github.com/princyy18/Appium_JS_POC.git)` 
        
    b. For installing required packages you need to run below commad
        `npm -i init`   
        It will download `node- modules` and genearats `package.json file` 
    c. Now you can start you work on this project
    c. There are different branches available in this repository
    d. If you are cloned this repo for practice or only for yourself you can work on "master branch" and push this project to youu github account for vesion control.
    e. If you are working as a team, suggession is to create a new branch sepratly and work on it

How to Run the tests from teaminal
--------------------
1. To run specific testfile
    `npx wdio run wdio.conf.js --spec path to the file(i.e. test\specs\explore.js )`   

2. To run all test files
    `npx wdio`

3. To run tests with browserstack
    `npx wdio wdio.conf.bs.js` 
    Note: for different platforms android, IOS, and cloud platform(i.e browserstack) are different, to avoid conflicts suggesion is to create new WDIO file as an when required and specify wdio file name while running scripts.

4. To generate allure report
    `allure generate allure-results --clean -o allure-report` 

5. To open allure report
    `allure open` 

What included in webdriverIO Framework Architecture
------------------------------------------------
1. Automation is performed on lenskart Android application
2. Used the Page Object Model for storing the locators.
3. `allure` Report is enabled so it can display the error and test results after the test are executed successfully
4. `package.json` has all diffrent required packages for project
5. There are different folders created for storing files as per webdriver freamwork
    app: Has mobile application of android and IOS
    test: Has all different folders 
        data : Has dynemic data files 
        Specs: Has test files as per different functionalities
        page_objects: Has all different page objects files
        Utils: Has all diffrent common methods files
    allure-results: automated generated files for reports
    allure- report: Contains allure report
    gitignore: It will ignor contians modules/files from commiting to your repository
    jasonconfig.json: File has modules which will provides suggession in code while you are writting your tests.
    .env: Contains browser stack configurations
    
    
6. Note that your execution starts from `Wdio.conf.js` file as it contains configurations relted to your tests
7. In `Wdio.conf.js` file there is an section called `capabilities`, do chages in that as per your device on which you wants run a tests

 


    
