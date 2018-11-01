class Check {
  constructor() {
    this._positions = [];
  }

  add(name, price) {
    this._positions.push({ name, price })
  }

  remove(name) {
    this._positions = this._positions.filter((position) => position.name !== name )
  }

  get positionsCount() {
    return this._positions.length
  }

  get positions() {
    return this._positions
  }

  get sum() {
    return this._positions.reduce((total, position) => total + position.price, 0)
  }
}

export default Check;
