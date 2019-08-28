class Store {
  constructor(rootReducer){
    this.rootReducer = rootReducer;
    this.state = {
      student: 'Asem',
      lunch: 'wrap',
      sleepy: 'true',
      study: 'never'
    }
  }

  getState() {
    let copy = Object.assign({}, this.state)
    return copy
  }


}