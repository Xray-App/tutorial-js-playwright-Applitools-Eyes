const config = require ("../config/config.json");

// models/home.js
class OwnersPage {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto(config.endpoint);
    }
    
    async click_find_owners_button(){
        await this.page.click(config.find_owners_button);
    }

  }
  module.exports = { OwnersPage };