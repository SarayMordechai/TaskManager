export class ServiceDB{
  // initial local storage
  constructor() {
    JSON.parse(localStorage.getItem('data') || '[]');
  }
  // update table by object
  updateTable(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
  }
  get_data() {
    return JSON.parse(localStorage.getItem('data') || '[]');
  }
}
