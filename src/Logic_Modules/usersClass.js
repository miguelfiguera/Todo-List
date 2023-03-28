class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set settingName(name) {
    this.name = name;
  }
}
