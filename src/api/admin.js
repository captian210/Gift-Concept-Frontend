import Parent from '.'

class API extends Parent {
  isSetAdmin() {
    return this.post('/isSetAdmin')
  }
  setup(data) {
    return this.post('setup', data)
  }
  newSellers() {
    return this.post('newSellers')
  }
  newDrivers() {
    return this.post('newDrivers')
  }
  approveUser(userId) {
    return this.post('approve', {userId})
  }
}

export default new API("admin");
