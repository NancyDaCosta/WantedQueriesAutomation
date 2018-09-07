var wanted = {}

let addWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@enterWanted')
    .api.pause(2000)
  page
    .setValue('@header', warrantInfo.header)
    .setValue('@mke', warrantInfo.mke)
    .setValue('@agency', warrantInfo.agency)
    .setValue('@name', warrantInfo.name)
    .setValue('@sex', warrantInfo.sex)
    .setValue('@race', warrantInfo.race)
    .setValue('@height', warrantInfo.height)
    .setValue('@weight', warrantInfo.weight)
    .setValue('@hairColor', warrantInfo.hairColor)
    .setValue('@offense', warrantInfo.offense)
    .setValue('@dateOfWarrant', warrantInfo.dateOfWarrant)
    .setValue('@operatorLicense', warrantInfo.operatorLicense)
    .setValue('@olState', warrantInfo.olState)
    .setValue('@olExpiration', warrantInfo.olExpiration)
    .setValue('@licensePlate', warrantInfo.licensePlate)
    .setValue('@plateState', warrantInfo.plateState)
    .setValue('@plateYear', warrantInfo.plateYear)
    .click('@submit')
    .api.pause(5000)
  page
    .expect.element('@valid').text.to.equal('Valid')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

let clearWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@enterWanted')
    .api.pause(2000)
  page
    .setValue('@header', warrantInfo.header)
    .setValue('@mke', warrantInfo.mke)
    .setValue('@agency', warrantInfo.agency)
    .setValue('@name', warrantInfo.name)
    .setValue('@sex', warrantInfo.sex)
    .setValue('@race', warrantInfo.race)
    .setValue('@height', warrantInfo.height)
    .setValue('@weight', warrantInfo.weight)
    .setValue('@hairColor', warrantInfo.hairColor)
    .setValue('@offense', warrantInfo.offense)
    .setValue('@dateOfWarrant', warrantInfo.dateOfWarrant)
    .setValue('@operatorLicense', warrantInfo.operatorLicense)
    .setValue('@olState', warrantInfo.olState)
    .setValue('@olExpiration', warrantInfo.olExpiration)
    .setValue('@licensePlate', warrantInfo.licensePlate)
    .setValue('@plateState', warrantInfo.plateState)
    .setValue('@plateYear', warrantInfo.plateYear)
    .click('@clear')
    .api.pause(5000)
  page
    .expect.element('@invalid').text.to.equal('Submit query for validation.')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

let modifyWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@modifyWanted')
    .api.pause(2000)
  page
    .setValue('@warrantID', warrantInfo.id)
    .setValue('@header', warrantInfo.header)
    .setValue('@mke', warrantInfo.mke)
    .setValue('@agency', warrantInfo.agency)
    .setValue('@name', warrantInfo.name)
    .setValue('@sex', warrantInfo.sex)
    .setValue('@race', warrantInfo.race)
    .setValue('@height', warrantInfo.height)
    .setValue('@weight', warrantInfo.weight)
    .setValue('@hairColor', warrantInfo.hairColor)
    .setValue('@offense', warrantInfo.offense)
    .setValue('@dateOfWarrant', warrantInfo.dateOfWarrant)
    .setValue('@operatorLicense', warrantInfo.operatorLicense)
    .setValue('@olState', warrantInfo.olState)
    .setValue('@olExpiration', warrantInfo.olExpiration)
    .setValue('@licensePlate', warrantInfo.licensePlate)
    .setValue('@plateState', warrantInfo.plateState)
    .setValue('@plateYear', warrantInfo.plateYear)
    .click('@submit')
    .api.pause(5000)
  page
    .expect.element('@valid').text.to.equal('Valid')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

let clearModifyWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@modifyWanted')
    .api.pause(2000)
  page
    .setValue('@header', warrantInfo.header)
    .setValue('@mke', warrantInfo.mke)
    .setValue('@agency', warrantInfo.agency)
    .setValue('@name', warrantInfo.name)
    .setValue('@sex', warrantInfo.sex)
    .setValue('@race', warrantInfo.race)
    .setValue('@height', warrantInfo.height)
    .setValue('@weight', warrantInfo.weight)
    .setValue('@hairColor', warrantInfo.hairColor)
    .setValue('@offense', warrantInfo.offense)
    .setValue('@dateOfWarrant', warrantInfo.dateOfWarrant)
    .setValue('@operatorLicense', warrantInfo.operatorLicense)
    .setValue('@olState', warrantInfo.olState)
    .setValue('@olExpiration', warrantInfo.olExpiration)
    .setValue('@licensePlate', warrantInfo.licensePlate)
    .setValue('@plateState', warrantInfo.plateState)
    .setValue('@plateYear', warrantInfo.plateYear)
    .click('@clear')
    .api.pause(5000)
  page
    .expect.element('@invalid').text.to.equal('Submit query for validation.')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

let cancelWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@cancelWanted')
    .api.pause(2000)
  page
    .setValue('@warrantID', warrantInfo.id)
    .setValue('@reasonForCancellation', warrantInfo.reason)
    .setValue('@dateOfCancel', warrantInfo.dateOfCancel)
    .click('@submit')
    .api.pause(5000)
  page
    .expect.element('@valid').text.to.equal('Valid')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

let clearCancelWarrant = (page, warrantInfo) => {
  page
    .click('@burger')
    .api.pause(2000)
  page
    .click('@cancelWanted')
    .api.pause(2000)
  page
    .setValue('@warrantID', warrantInfo.id)
    .setValue('@reasonForCancellation', warrantInfo.reason)
    .setValue('@dateOfCancel', warrantInfo.dateOfCancel)
    .click('@clear')
    .api.pause(5000)
  page
    .expect.element('@invalid').text.to.equal('Submit query for validation.')
  page
    .expect.element('@queryBody').text.to.equal(warrantInfo.queryString)
    .before(500)
}

module.exports = {
  beforeEach: browser => {
    wanted = browser.page.wanted()
    wanted.navigate()
  },
  after: browser => {
    browser.end()
  },
  'Does this load?': browser => {
    wanted
      .expect.element('@title').text.to.equal('Wanted Queries')
  },
  'Add warrant for Harry Dresden': browser => {
    //Running Automated Test for Q7ND-32
    addWarrant(wanted, {
      header: '123456789',
      mke: 'ABC',
      agency: 'OAI123456',
      name: 'Harry Dresden',
      sex: 'M',
      race: 'W',
      hairColor: 'Brown',
      height: '607',
      weight: '215',
      offense: 'Arson',
      dateOfWarrant: '10312016',
      operatorLicense: 'A123456',
      olState: 'IL',
      olExpiration: '10312017',
      licensePlate: 'ABC123',
      plateState: 'IL',
      plateYear: '10312017',
      queryString: '123456789.ABC.OAI123456.Harry Dresden.M.W.607.215.Brown.Arson.2016-10-31.A123456.IL.2017-10-31.ABC123.IL.2017-10-31'
    })
  },
  'Add warrant for Harry Dresden then clear everything': browser => {
    //Running Automated Test for Q7ND-36
    clearWarrant(wanted, {
      header: '123456789',
      mke: 'ABC',
      agency: 'OAI123456',
      name: 'Harry Dresden',
      sex: 'M',
      race: 'W',
      hairColor: 'Brown',
      height: '607',
      weight: '215',
      offense: 'Arson',
      dateOfWarrant: '10312016',
      operatorLicense: 'A123456',
      olState: 'IL',
      olExpiration: '10312017',
      licensePlate: 'ABC123',
      plateState: 'IL',
      plateYear: '10312017',
      queryString: ''
    })
  },
  'Modify warrant for Harry Dresden': browser => {
    //Running Automated Test for Q7ND-39
    modifyWarrant(wanted, {
      id: '0000000001',
      header: '123456789',
      mke: 'ABC',
      agency: 'OAI123456',
      name: 'Harry Dresden',
      sex: 'M',
      race: 'W',
      hairColor: 'Brown',
      height: '607',
      weight: '215',
      offense: 'Arson',
      dateOfWarrant: '10312016',
      operatorLicense: 'A123456',
      olState: 'IL',
      olExpiration: '10312017',
      licensePlate: 'ABC123',
      plateState: 'IL',
      plateYear: '10312017',
      queryString: '0000000001.123456789.ABC.OAI123456.Harry Dresden.M.W.607.215.Brown.Arson.2016-10-31.A123456.IL.2017-10-31.ABC123.IL.2017-10-31'
    })
  },
  'Clear Modify warrant for Harry Dresden': browser => {
    //Running Automated Test for Q7ND-42
    clearModifyWarrant(wanted, {
      id: '0000000001',
      header: '123456789',
      mke: 'ABC',
      agency: 'OAI123456',
      name: 'Harry Dresden',
      sex: 'M',
      race: 'W',
      hairColor: 'Brown',
      height: '607',
      weight: '215',
      offense: 'Arson',
      dateOfWarrant: '10312016',
      operatorLicense: 'A123456',
      olState: 'IL',
      olExpiration: '10312017',
      licensePlate: 'ABC123',
      plateState: 'IL',
      plateYear: '10312017',
      queryString: ''
    })
  },
  'Cancel Warrant': browser => {
    //Running Automated Test for Q7ND-44
    cancelWarrant(wanted, {
      id: '0000000001',
      reason: 'No longer guilty',
      dateOfCancel: '09072018',
      queryString: '0000000001.No longer guilty.2018-09-07'
    })
  },
  'Clear Cancelling a Warrant': browser => {
    //Running Automated Test for Q7ND-47
    clearCancelWarrant(wanted, {
      id: '0000000001',
      reason: 'No longer guilty',
      dateOfCancel: '09072018',
      queryString: ''
    })
  }
}