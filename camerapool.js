class CameraPool {
  constructor() {
    this.valArr = [];           // values
    this.pool = new Map();    // val -> index in valArr
  }

  // O(1) average
  insert(id) {
    if (this.pool.has(id)) return false;
    this.pool.set(id, this.valArr.length);
    this.valArr.push(id);
    return true;
  }

  // O(1) average
  remove(id) {
    if (!this.pool.has(id)) return false;

    const idx = this.pool.get(id);
    const lastIdx = this.valArr.length - 1;
    const lastVal = this.valArr[lastIdx];

    // move last to idx
    this.valArr[idx] = lastVal;
    this.pool.set(lastVal, idx);

    // remove last
    this.valArr.pop();
    this.pool.delete(id);

    return true;
  }

  // O(1)
  getRandom() {
    if (this.valArr.length === 0) return undefined; // or throw
    const r = Math.floor(Math.random() * this.valArr.length);
    return this.valArr[r];
  }
}