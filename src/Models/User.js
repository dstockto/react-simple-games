export default class User {
  /**
   * Creates a User model
   * @param {string} name
   */
  constructor(name = 'Anonymous') {
    this._name = name;
  }

  /**
   * Returns the user's name
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Returns a new User model with a new name
   *
   * @param {string} name
   * @returns {User}
   */
  static withNewName(name) {
    return new User(name);
  }
}
