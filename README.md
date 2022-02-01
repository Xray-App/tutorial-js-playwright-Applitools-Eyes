# tutorial-js-playwright-Applitools-Eyes
[![build workflow](https://github.com/Xray-App/tutorial-js-playwright-Applitools-Eyes/actions/workflows/main_cloud.yml/badge.svg)](https://github.com/Xray-App/tutorial-js-playwright-Applitools-Eyes/actions/workflows/main_cloud.yml)
[![license](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/Xray-App/community)

## Overview
Code that support the tutorial [Testing web applications using Applitools Eyes](https://docs.getxray.app/display/XRAYCLOUD/Testing+web+applications+using+Applitools+Eyes) showcasing the integratoin between [Xray Test Management](https://www.getxray.app/) on Jira and [Applitools Eyes](https://applitools.com/products-eyes/).

The test automation code implements [Playwright tests](https://playwright.dev/docs/test-intro/)

## Prerequisites
In order to run this tutorial you need to have Nodejs, install the playwrighttest runner and install the Applitools Eyes SDK.
```
-- Install Playwright
npx playwright install
npm i -D @playwright/test
```
-- Install eyes
```
npm i -D @applitools/eyes-playwright
```
You need to get an [API_KEY](https://applitools.com/docs/topics/overview/obtain-api-key.html?Highlight=api%20key) from the Applitools Eyes application.

## Running
Tests can be executed locally with the following command
```
APPLITOOLS_API_KEY="API_KEY" PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test * --browser=chromium --reporter=junit,line
```

## Submitting results to Jira

Results can be submitted to Jira so that they can be shared with the team and their impacts be easily analysed.
This can be achieved using [Xray Test Management](https://www.getxray.app/) as shown in further detail in this [tutorial](https://docs.getxray.app/display/XRAYCLOUD/Testing+web+applications+using+Applitools+Eyes).

## Contact

Any questions related with this code, please raise issues in this GitHub project. Feel free to contribute and submit PR's.
For Xray specific questions, please contact [Xray's support team](https://jira.getxray.app/servicedesk/customer/portal/2).

## References

- [Playwright test](https://playwright.dev/docs/test-intro/)
- [Playwright](https://playwright.dev/)
- [How Xray processes NUnit XML reports](https://docs.getxray.app/display/XRAYCLOUD/Taking+advantage+of+NUnit+XML+reports)
- [Applitools Eyes](https://applitools.com/products-eyes/)


## LICENSE

[BSD 3-Clause](LICENSE)
