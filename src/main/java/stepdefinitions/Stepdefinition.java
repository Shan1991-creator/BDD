package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Stepdefinition {
	WebDriver driver;
	
	@Given("^I launch the application$")
	public void launchapplication() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\admin\\Desktop\\Jar\\chromedriver_win32 (1)\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.automationtesting.in/");
		driver.manage().window().maximize();
		
}
	
	@When("^I click on skip sign in$")
	public void Skipsignin() {
	driver.findElement(By.id("btn2")).click();

	}
	@And("^I enter Firstname as \"(.*)\"$")
	public void Firstname(String Fname) {
	driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(Fname);
	}
	
	@And("^I enter Lastname as \"(.*)\"$")
	public void Lastname(String Lname) {
	driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(Lname);
	}
	
	@And("^I enter Adress as \"(.*)\"$")
	public void Address(String Address) {
	driver.findElement(By.xpath("//textarea[@ng-model='Adress']")).sendKeys(Address);
	}
    
	@And("^I enter EmailAdress as \"(.*)\"$")
	public void EmailAddress(String EmailAddress) {
	driver.findElement(By.xpath("//input[@ng-model='EmailAdress']")).sendKeys(EmailAddress);
	}
	
	@And("^I enter Phone as \"(.*)\"$")
	public void Mobile(String Mobile) {
	driver.findElement(By.xpath("//input[@ng-model='Phone']")).sendKeys(Mobile);
	}
	
	@And("^I click on Gender$")
	public void Gender() {
	driver.findElement(By.xpath("//input[@name='radiooptions']")).click();
	}
	
	@And("^I click on Hobbies$")
	public void Hobbies() {
	driver.findElement(By.xpath("//input[@id='checkbox1']")).click();
	}
}
