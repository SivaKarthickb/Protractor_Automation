describe('Admin Module_Outreach_Search and Filter', function() {

	var heading = element(by.xpath("//span[@class='display_1']"));

	it('user should able to sign in', function() {

		browser.get('http://frontenduat.eastus.cloudapp.azure.com');
		var username = element(by.model("vm.username"));
		username.sendKeys("testtrialadmin2");
		element(by.model("vm.password")).sendKeys("Avigo4Quest!");
		element(by.buttonText("Login")).click();

		expect(browser.getTitle()).toEqual('Quest - PDR');  

	});

	it('user navigates to Outreach', function() {
		var outreach = element(by.xpath("(//span[@class='menu_name'])[4]"));
		outreach.click();
		expect(heading.getText()).toEqual("Questionnaire");
		browser.sleep(5000);
	}); 

	/* it('Search and Filter using Questionnaire Title', function() {
		browser.sleep(5000);
		element(by.xpath("//span[1]/mat-panel-title")).click();
		element(by.xpath("(//input[@id])[1]")).sendKeys("test");
		element(by.xpath("//div[2]/button[2]/span")).click();
		var scroll  = element(by.xpath("(//div//span[@class='display_2'])[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", scroll.getWebElement());
		scroll.click();
		browser.sleep(10000);

		var results  = element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']"));

		element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']")).count().then(function(count) {  

			console.log("Total values in Search and Filter results are: ", count);

			element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']")).each(function(element) {
				element.getText().then(function(results) {
					console.log(results);
					expect(true).toEqual(results.includes("Test"));
				});

			});

		}); 
	}); */

	/* it('Search and Filter using Questionnaire Title', function() {
		browser.sleep(5000);
		element(by.xpath("//span[1]/mat-panel-title")).click();
		element(by.xpath("(//input[@id])[1]")).sendKeys("trial");
		element(by.xpath("//div[2]/button[2]/span")).click();
		var scroll  = element(by.xpath("(//div//span[@class='display_2'])[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", scroll.getWebElement());
		scroll.click();
		browser.sleep(5000);

		var results  = element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']"));

		element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']")).count().then(function(count) {  

			console.log("Total values in Search and Filter results are: ", count);

			element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-questionnaireName mat-column-questionnaireName']")).getText().then(function(results) {
				for(var i = 0; i<results.length;i++)
					console.log(results[i]);
				var result = results.toLocaleString().toLowerCase();
				console.log("Results are in lowercase: " , result);
				expect(result).toMatch(/trial/);
				console.log("Search result is Verified");
			});
		});

	}); 

	it('Search and Filter using Search by Trial', function() {
		browser.sleep(5000);
		element(by.xpath("//span[1]/mat-panel-title")).click();
		element(by.xpath("(//div[@class='mat-select-arrow-wrapper'])[1]")).click();

		var selectoption = element.all(by.xpath("//mat-option[@role='option']")).get(1);
		browser.waitForAngular();
		selectoption.click();

		var text = element.all(by.xpath("//mat-option[@role='option']")).get(1).getText();

		var el = element(by.xpath("//div[2]/button[2]/span"));
		browser.actions().mouseMove(el.getLocation()).perform();
		browser.actions().click().perform();
		el.click();

		var scroll  = element(by.xpath("(//div//span[@class='display_2'])[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", scroll.getWebElement());
		scroll.click();
		browser.sleep(10000);

		var trials  = element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-trialName mat-column-trialName']"));

		element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-trialName mat-column-trialName']")).count().then(function(count) {  

			console.log("Total results are: ", count);

			element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-trialName mat-column-trialName']")).getText().then(function(trials) {
				for(var i = 0; i<trials.length;i++)
					console.log(trials[i]);
				expect(trials).toContain(text);
				console.log("Search result is Verified");

			});

		});

	});  

	it('Search and Filter using Search by Sponsor', function() {
		browser.sleep(5000);
		element(by.xpath("//span[1]/mat-panel-title")).click();
		element(by.xpath("(//div[@class='mat-select-arrow-wrapper'])[3]")).click();

		var selectsponsor = element.all(by.xpath("//mat-option[@role='option']")).get(0);
		browser.sleep('5000');
		selectsponsor.click();

		var sponsor = element.all(by.xpath("//mat-option[@role='option']")).get(0).getText();
		var ele = element(by.xpath("//div[2]/button[2]/span"));
		browser.actions().mouseMove(ele.getLocation()).perform();
		browser.actions().click().perform();
		ele.click();
		var scroll  = element(by.xpath("(//div//span[@class='display_2'])[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", scroll.getWebElement());
		scroll.click();
		browser.sleep(10000);

		var trials  = element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-sponsorName mat-column-sponsorName']"));

		element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-sponsorName mat-column-sponsorName']")).count().then(function(count) {  

			console.log("Total results are: ", count);

			element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-sponsorName mat-column-sponsorName']")).getText().then(function(trials) {
				for(var i = 0; i<trials.length;i++)
					console.log(trials[i]);
				expect(trials).toContain(sponsor);
				console.log("Search result is Verified");
			});
		});
	}); */

	it('Search and Filter using Search by Collaborator', function() {
		browser.sleep(5000);
		element(by.xpath("//span[1]/mat-panel-title")).click();
		element(by.xpath("(//div[@class='mat-select-arrow-wrapper'])[4]")).click();

		var collaborator = element.all(by.xpath("//mat-option[@role='option']")).get(2);
		browser.sleep('5000');
		collaborator.click();

		var text1 = element.all(by.xpath("//mat-option[@role='option']")).get(2).getText();

		var ele = element(by.xpath("//div[2]/button[2]/span"));
		browser.actions().mouseMove(ele.getLocation()).perform();
		browser.actions().click().perform();
		ele.click();

		var scroll  = element(by.xpath("(//div//span[@class='display_2'])[2]"));
		browser.executeScript("arguments[0].scrollIntoView();", scroll.getWebElement());
		scroll.click();
		browser.sleep(10000);

		var collaborators  = element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-collaboratorName mat-column-collaboratorName']"));

		element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-collaboratorName mat-column-collaboratorName']")).count().then(function(count) {  

			console.log("Total results are: ", count);

			element.all(by.xpath("//mat-cell[@class='mat-cell cdk-column-collaboratorName mat-column-collaboratorName']")).getText().then(function(collaborators) {
				for(var i = 0; i<collaborators.length;i++)
					console.log(collaborators[i]);
				expect(collaborators).toContain(text1);
				console.log("Search result is Verified");

			});

		});

	}); 
}); 

