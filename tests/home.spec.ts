import { test, expect } from '@playwright/test';
import { HomePage } from "../models/home";
import { Helper } from "../models/helper"

const { Eyes, ClassicRunner, Target , Configuration, BatchInfo, MatchLevel, TestResultContainer, TestResults} = require('@applitools/eyes-playwright')

test.describe("PetClinic validations", () => {
  let eyes, runner, helper, myBatchInfo;

  test.beforeEach(async () => {

    helper = new Helper();
    // Initialize the Runner for your test.
    runner = new ClassicRunner();

    // Create Eyes object with the runner
    eyes = new Eyes(runner);

    // Initialize the eyes configuration
    const configuration = new Configuration();

    // create a new batch info instance and set it to the configuration
    myBatchInfo = new BatchInfo('PetClinic Batch - Playwright - Classic');
    myBatchInfo.setId(helper.getBatch_ID());
    configuration.setBatch(myBatchInfo);


    // Define the match level we need for our tests
    eyes.setMatchLevel(MatchLevel.Strict);

    // Set the configuration to eyes
    eyes.setConfiguration(configuration);

  });

  test('Validate home link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await eyes.open(page, 'PetClinic', 'HomeLink', { width: 800, height: 600 });
    const topMenuEntry = await homePage.getMenuEntry();
    //await page.screenshot({ path: 'home.png' });
    const homeText = await homePage.getHomeText();
    await expect(topMenuEntry).toContainText(homeText);
    await eyes.check(Target.window().fully());
    await eyes.close();
  });

  test.afterEach(async () => {
    
    // If the test was aborted before eyes.close was called, ends the test as aborted.
    await eyes.abort();

    // We pass false to this method to suppress the exception that is thrown if we
    // find visual differences
    const results = await runner.getAllTestResults(false);

    results.getAllResults().forEach(result  => {
      helper.handleTestResults(result);
    });

  });
}) 
