export class Cell {
  static maxCellValue = 0;

  constructor(gridElement, x, y) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.append(cell);
    this.x = x;
    this.y = y;
  }

  linkTile(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }

  unlinkTile() {
    this.linkedTile = null;
  }

  isEmpty() {
    return !this.linkedTile;
  }

  linkTileForMerge(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTileForMerge = tile;
  }

  unlinkTileForMerge() {
    this.linkedTileForMerge = null;
  }

  hasTileForMerge() {
    return !!this.linkedTileForMerge;
  }

  canAccept(newTile) {
    return (
      this.isEmpty() ||
      (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
    );
  }

  mergeTiles() {
    const cellValue = this.linkedTile.value + this.linkedTileForMerge.value;
    if (cellValue > Cell.maxCellValue) Cell.maxCellValue = cellValue;

    this.linkedTile.setValue(cellValue);
    this.linkedTileForMerge.removeFromDOM();
    this.unlinkTileForMerge();
  }

  getMaxCellValue() {
    return Cell.maxCellValue;
  }
}
