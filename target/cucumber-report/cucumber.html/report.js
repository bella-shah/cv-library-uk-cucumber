$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search",
  "description": "As a user I want to search jobs on cv library website",
  "id": "job-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cjobTitle\u003e\" in JobTitle field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003clocation\u003e\" in Location field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"\u003cdistance\u003e\" from Distance dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003csalaryMin\u003e\" in SalaryMin field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003csalaryMax\u003e\" in SalaryMax field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"\u003csalaryType\u003e\" from Salary Type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"\u003cjobType\u003e\" from Job Type dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search;user-should-search-for-jobs-successfully;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search;user-should-search-for-jobs-successfully;;2"
    },
    {
      "cells": [
        "IT",
        "Harrow",
        "up to 7 miles",
        "401",
        "500",
        "Per day",
        "Contract",
        "It jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search;user-should-search-for-jobs-successfully;;3"
    },
    {
      "cells": [
        "Test Analyst",
        "London",
        "up to 15 miles",
        "40001",
        "50000",
        "Per annum",
        "Contract",
        "Contract Test Analyst jobs in London"
      ],
      "line": 23,
      "id": "job-search;user-should-search-for-jobs-successfully;;4"
    },
    {
      "cells": [
        "Tester",
        "Watford Hertfordshire",
        "up to 5 miles",
        "40001",
        "60000",
        "Per annum",
        "Contract",
        "Contract Tester jobs in Watford"
      ],
      "line": 24,
      "id": "job-search;user-should-search-for-jobs-successfully;;5"
    },
    {
      "cells": [
        "Accountant",
        "Harrow Weald Greater London",
        "up to 5 miles",
        "30001",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent Accountant jobs in Harrow Weald"
      ],
      "line": 25,
      "id": "job-search;user-should-search-for-jobs-successfully;;6"
    },
    {
      "cells": [
        "Retail Manager",
        "West London",
        "up to 10 miles",
        "35001",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Retail Manager jobs in West London"
      ],
      "line": 26,
      "id": "job-search;user-should-search-for-jobs-successfully;;7"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 7 miles",
        "301",
        "500",
        "Per day",
        "Contract",
        "Contract Automation Tester jobs in London"
      ],
      "line": 27,
      "id": "job-search;user-should-search-for-jobs-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4554243200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Harrow\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 5 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"30000\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"500000\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per annum\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Permanent\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 97678900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22230764100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 159684200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 66540300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 186246200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 313319600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 180482100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 63302800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 46093500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 93022000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 96127900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 4895265600,
  "status": "passed"
});
formatter.after({
  "duration": 739468700,
  "status": "passed"
});
formatter.before({
  "duration": 2568692500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"IT\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Harrow\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 7 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"401\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"500\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per day\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Contract\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"It jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22226622500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 159221200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 124602800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 158839400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 84898800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 189671000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 148083000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 74649200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 75906200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 169734100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 6503388100,
  "status": "passed"
});
formatter.after({
  "duration": 747769600,
  "status": "passed"
});
formatter.before({
  "duration": 2398737300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Test Analyst\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"London\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 15 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"40001\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"50000\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per annum\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Contract\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Contract Test Analyst jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22173123100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Analyst",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 159832300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 156455200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 44491200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 379868200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40001",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 101628100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 93275000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 45867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 90891900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 85127900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Test Analyst jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 4661589600,
  "status": "passed"
});
formatter.after({
  "duration": 739272600,
  "status": "passed"
});
formatter.before({
  "duration": 2533381900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Watford Hertfordshire\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 5 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"40001\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"60000\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per annum\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Contract\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Contract Tester jobs in Watford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22168495300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 196097000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford Hertfordshire",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 191329100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 105418900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 285444100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40001",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 154553800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 71617200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 43842000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 78799000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 87037400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Tester jobs in Watford",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 4293350000,
  "status": "passed"
});
formatter.after({
  "duration": 758344600,
  "status": "passed"
});
formatter.before({
  "duration": 2394615800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Accountant\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Harrow Weald Greater London\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 5 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"30001\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"60000\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per annum\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Permanent\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Permanent Accountant jobs in Harrow Weald\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22193602900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 154209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow Weald Greater London",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 195079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 98069200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 237533200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30001",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 117969400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 126982600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 39951700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 79343200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 94493000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Accountant jobs in Harrow Weald",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 5068012600,
  "status": "passed"
});
formatter.after({
  "duration": 759869100,
  "status": "passed"
});
formatter.before({
  "duration": 2317605600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Retail Manager\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"West London\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 10 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"35001\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"50000\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per annum\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Permanent\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Permanent Retail Manager jobs in West London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22168078200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Manager",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 176111900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West London",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 227169100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 74230400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 372744300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35001",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 87790200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 72696300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 99025700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 76154100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 86167000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Retail Manager jobs in West London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 4345539700,
  "status": "passed"
});
formatter.after({
  "duration": 737714900,
  "status": "passed"
});
formatter.before({
  "duration": 2384269700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should search for jobs successfully",
  "description": "",
  "id": "job-search;user-should-search-for-jobs-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on CV-Library homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept IFrame alert",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Automation Tester\" in JobTitle field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"London\" in Location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"up to 7 miles\" from Distance dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"301\" in SalaryMin field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"500\" in SalaryMax field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Per day\" from Salary Type dropdown",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"Contract\" from Job Type dropdown",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can verify Search \"Contract Automation Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnCVLibraryHomepage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 22197641500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 167883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 186671800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromDistanceDropdown(String)"
});
formatter.result({
  "duration": 84558100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 141394500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "301",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMinField(String)"
});
formatter.result({
  "duration": 218384400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnterInSalaryMaxField(String)"
});
formatter.result({
  "duration": 79118200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromSalaryTypeDropdown(String)"
});
formatter.result({
  "duration": 85889300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelectFromJobTypeDropdown(String)"
});
formatter.result({
  "duration": 59819300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 89559700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Automation Tester jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iCanVerifySearch(String)"
});
formatter.result({
  "duration": 4142404400,
  "status": "passed"
});
formatter.after({
  "duration": 773248200,
  "status": "passed"
});
});