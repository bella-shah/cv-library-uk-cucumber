@Smoke
Feature: Job Search
  As a user I want to search jobs on cv library website


  Scenario Outline: User should search for jobs successfully
    Given   I am on CV-Library homepage
    And     I accept IFrame alert
    And     I enter "<jobTitle>" in JobTitle field
    And     I enter "<location>" in Location field
    And     I select "<distance>" from Distance dropdown
    And     I click on More Search Options
    And     I enter "<salaryMin>" in SalaryMin field
    And     I enter "<salaryMax>" in SalaryMax field
    And     I select "<salaryType>" from Salary Type dropdown
    And     I select "<jobType>" from Job Type dropdown
    And     I click on Find Jobs button
    Then    I can verify Search "<result>"
    Examples:
      | jobTitle          | location                    | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                       |
      | Tester            | Harrow                      | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Tester jobs in Harrow on the Hill            |
      | IT                | Harrow                      | up to 7 miles  | 401       | 500       | Per day    | Contract  | It jobs in Harrow on the Hill                |
      | Test Analyst      | London                      | up to 15 miles | 40001     | 50000     | Per annum  | Contract  | Contract Test Analyst jobs in London         |
      | Tester            | Watford Hertfordshire       | up to 5 miles  | 40001     | 60000     | Per annum  | Contract  | Contract Tester jobs in Watford              |
      | Accountant        | Harrow Weald Greater London | up to 5 miles  | 30001     | 60000     | Per annum  | Permanent | Permanent Accountant jobs in Harrow Weald    |
      | Retail Manager    | West London                 | up to 10 miles | 35001     | 50000     | Per annum  | Permanent | Permanent Retail Manager jobs in West London |
      | Automation Tester | London                      | up to 7 miles  | 301       | 500       | Per day    | Contract  | Contract Automation Tester jobs in London    |