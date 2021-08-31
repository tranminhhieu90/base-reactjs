
class Storage {

  setToken(token) {
    localStorage.setItem('token', token);
  }
  setTokenRefresh(tokenRefresh) {
    localStorage.setItem('tokenRefresh', tokenRefresh);
  }
  setExpiresIn(expiresIn) {
    localStorage.setItem('expiresIn', expiresIn);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getTokenRefresh() {
    return localStorage.getItem('tokenRefresh');
  }
  getExpiresIn() {
    return localStorage.getItem('expiresIn');
  }
  setAccount(account) {
    localStorage.setItem('account', JSON.stringify(account));
  }
  getAccount() {
    return JSON.parse(localStorage.getItem('account'));
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  setProductCrawl(product) {
    sessionStorage.setItem('productCrawl', JSON.stringify(product));
  }
  getProductCrawl() {
    return JSON.parse(sessionStorage.getItem('productCrawl'));
  }
  logout() {
    localStorage.removeItem('account');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenRefresh');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('orderCart');
    window.location.reload();
  }
  updateAccount(account) {
    this.setAccount(account);
  }

  // order cart
  setOrderCart(orderCart) {
    localStorage.setItem('orderCart', JSON.stringify(orderCart));
  }
  getOrderCart() {
    return JSON.parse(localStorage.getItem('orderCart')) || [];
  }
  isHasOrderCart() {
    return this.getOrderCart().length > 0;
  }
}
export default new Storage();