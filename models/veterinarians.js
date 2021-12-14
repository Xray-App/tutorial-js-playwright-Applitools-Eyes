const config = require ("../config/config.json");

// models/home.js
class VetsPage {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto(config.endpoint);
    }
    
    async getTopMenuEntry(){
        return this.page.locator(config.vet_menu_entry).first();
    }

    async getVetsText(){
        return config.vet_text;
    }

  }
  module.exports = { VetsPage };