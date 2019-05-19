export default class User {
  constructor(name = 'Anonymous') {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  withNewName(name) {
    return new User(name);
  }
}
