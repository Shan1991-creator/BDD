Feature: Login Action
@SIT @Test
Scenario Outline: Login should be successful with Valid Credentials

Given I launch the application 

When I click on skip sign in

And I enter Firstname as "<FirstName>"

And I enter Lastname as "Tester"

And I enter Adress as "Chennai"

And I enter EmailAdress as "apsn@gmal.com" 

And I enter Phone as "6767576767"

And I click on Gender

And I click on Hobbies

Examples:

|FirstName|
|Shan|
|Rajesh|
|Gokul|







