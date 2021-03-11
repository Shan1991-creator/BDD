package pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Register {
	
	WebDriver driver;
	
	@FindBy(xpath="//input[@placeholder='First Name']")
	public WebElement txtFirstName;
	
	@FindBy(xpath="//input[@placeholder='Last Name']")
	public WebElement txtLastName;
	
	@FindBy(xpath="//textarea[@ng-model='Adress']")
	public WebElement txtAddress;
	
	public Register() {
		this.driver=Context.getInstance().getDriver();
		PageFactory.initElements(driver,this);
	}
	
	public void user_enters FirstName_and_LastName(String fname,String lname) throws Interrupted Exception{
		txtFirstName.clear();
		txtFirstName.sendKeys(fname);
		txtLastName.sendKeys(lname);
		Thread.sleep(10000L);
		
		
		
	}

