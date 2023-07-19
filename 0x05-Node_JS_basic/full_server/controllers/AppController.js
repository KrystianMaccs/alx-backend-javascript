/**
 * Contains the miscellaneous route handlers.
 * @author Christian Maccs <https://github.com/KrystianMaccs>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;
