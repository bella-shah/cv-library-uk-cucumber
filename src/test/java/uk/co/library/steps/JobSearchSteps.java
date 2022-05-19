package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {
    @Given("^I am on CV-Library homepage$")
    public void iAmOnCVLibraryHomepage() {

    }

    @And("^I accept IFrame alert$")
    public void iAcceptIFrameAlert() throws InterruptedException {
        new HomePage().acceptIFrameAlert();
    }

    @And("^I enter \"([^\"]*)\" in JobTitle field$")
    public void iEnterInJobTitleField(String jobtitle) {
        new HomePage().addJobTitle(jobtitle);
    }

    @And("^I enter \"([^\"]*)\" in Location field$")
    public void iEnterInLocationField(String location) {
        new HomePage().addLocation(location);
    }

    @And("^I select \"([^\"]*)\" from Distance dropdown$")
    public void iSelectFromDistanceDropdown(String distance)  {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on More Search Options$")
    public void iClickOnMoreSearchOptions() {
        new HomePage().clickOnMoreSearchOption();
    }

    @And("^I enter \"([^\"]*)\" in SalaryMin field$")
    public void iEnterInSalaryMinField(String minSal) {
        new HomePage().enterMinSalary(minSal);
    }

    @And("^I enter \"([^\"]*)\" in SalaryMax field$")
    public void iEnterInSalaryMaxField(String maxSal) {
        new HomePage().enterMaxSalary(maxSal);
    }

    @And("^I select \"([^\"]*)\" from Salary Type dropdown$")
    public void iSelectFromSalaryTypeDropdown(String salType) {
        new HomePage().selectSalaryType(salType);
    }

    @And("^I select \"([^\"]*)\" from Job Type dropdown$")
    public void iSelectFromJobTypeDropdown(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on Find Jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobButton();
    }

    @Then("^I can verify Search \"([^\"]*)\"$")
    public void iCanVerifySearch(String result) {
        new ResultPage().verifyTheResults(result);
    }
}