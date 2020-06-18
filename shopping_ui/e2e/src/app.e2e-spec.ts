import {by, element, browser} from 'protractor';

describe('workspace-project App', () => {
  // register page
  it('should click register button',function (){
    browser.get("http://localhost:4200/login");
    let button = element(by.name("register"));
    button.click();
    expect(browser.get("http://localhost:4200/register"));
  })

  // new registration
  it('should add register new user', function(){
    let email= element(by.id("uEmailId"));
    let pass= element(by.id("uPass"));
    let name= element(by.id("uName"));
    let dob= element(by.id("uDOB"));
    let phoneno= element(by.id("uPhone"));
    let address= element(by.id("uAddress"));

    email.sendKeys("shubham123.rathi01@infosys.com");
    pass.sendKeys("$hubH1996");
    name.sendKeys("Shubham Rathi");
    dob.sendKeys("02/11/1996");
    phoneno.sendKeys("7586694585");
    address.sendKeys("Infosys Ltd,Hebbel Industrial Area,Mysore-570027");

    let button=element(by.name("register"));
    button.click();

    let message=element(by.name("success"));
    expect(message.getText()).toContain("Successfully Registered! Login to Continue...");
  })

  //redirect to login page
  it('should click register button',function (){
    let button=element(by.name("register"));
    button.click();
    // expect(browser.get("http://localhost:4200/register"));
  })
});


describe('workspace-project App', () => {
  it('should navigate to login page', function () {
    browser.get("http://localhost:4200/login");
    // expect(browser.getCurrentUrl()).toContain("login");
  }) 

  // //login
  it('should login successfully', function () {
    let email = element(by.id("uEmailId"));
    let pass = element(by.id("uPass"));

    email.sendKeys("shubham123.rathi01@infosys.com");
    pass.sendKeys("$hubH1996");

    let button = element(by.name("submit"));
    button.click();

    browser.waitForAngular();
    browser.sleep(2000);
    

    // expect(browser.get("http://localhost:4200/dashboard"));
  })
  
  

  it('should search a product',function(){
    let searchkey = element(by.name("searchinput"));
    let searchbutton = element(by.name("search"));

    searchkey.sendKeys("table");
    searchbutton.click();
    browser.waitForAngular();
    browser.sleep(2000);

    // let searchkey = element(by.name("searchinput"));
    // let searchbutton = element(by.name("search"));

    // searchkey.clear();
    searchkey.sendKeys(" by @home");
    searchbutton.click();
    browser.waitForAngular();
    browser.sleep(2000);

    // let addtocartbutton = element(by.name("product"));
    // addtocartbutton.click()

    // browser.waitForAngular();
    // let product=element(by.id("productshow"));
    // expect(product.g)


    // expect(browser.getCurrentUrl()).toContain("dashboard");

  })
});