const config = require ("../config/config.json");

class Helper {

  constructor() {
    
  }

  getBatch_ID(){
    return config.batch_id;
  }

  handleTestResults(summary){
    let ex = summary.getException();
    if (ex != null ) {
        console.log("System error occurred while checking target.\n");
    }
    let result = summary.getTestResults();
    if (result == null) {
        console.log("No test results information available\n");
    } else {
        console.log("[Eyes URL|%s] \\\\ AppName = %s \\\\ testname = %s \\\\ status = %s \\\\ different = %s \\\\ Browser = %s \\\\ OS = %s \\\\ viewport = %dx%d \\\\ matched = %d \\\\ mismatched = %d \\\\ missing = %d\\\\ aborted = %s\\\\",
            result.getUrl(),
            result.getAppName(),
            result.getName(),
            result.getStatus(),
            result.getIsDifferent(),
            result.getHostApp(),
            result.getHostOS(),
            result.getHostDisplaySize().getWidth(),
            result.getHostDisplaySize().getHeight(),
            result.getMatches(),
            result.getMismatches(),
            result.getMissing(),
            (result.getIsAborted() ? "aborted" : "no"));
            let steps = result.getStepsInfo();
            steps.forEach(step => {
              console.log("StepName = %s, different = %s\\\\", step.getName(), step.getIsDifferent());
            });
        }

  };

  }
  module.exports = { Helper };