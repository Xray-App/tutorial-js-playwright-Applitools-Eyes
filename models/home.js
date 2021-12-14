const config = require ("../config/config.json");

// models/home.js
class HomePage {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto(config.endpoint);
    }
    
    async getMenuEntry(){
        return await this.page.locator(config.top_menu_entry).first();
    }

    async getHomeText(){
        return config.home_text;
    }

  }
  module.exports = { HomePage };