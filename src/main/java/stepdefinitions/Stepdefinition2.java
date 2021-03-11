package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import pom.SkipSignin;

public class Stepdefinition2 {
	WebDriver driver;
	
	@Given("^User click on Skip Sign in in demo automation site$")
	public void Click_SkipSignin() {
		SkipSignin objSkipSignin=new SkipSignin(driver);
		objSkipSignin.Click_SkipSignin();
	}

}
