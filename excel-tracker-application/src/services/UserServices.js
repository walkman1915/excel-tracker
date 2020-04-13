import dummyData from './DummyData'
import Config from './../Config'

const key = 'eyJraWQiOiJJbSt0cTlubU81YWZTT0g1Z0pQMXZnZ2xVdUJwUTQzVGhFaHFsUXQ1YndFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMGY2NzZkMi01MTA0LTRmNzUtYTVmNi1iZWY4ODAxZmNiY2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfZUpuZExSQ1A2IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6InRlc3R1c2VyMSIsImF1ZCI6IjFlaTNndjZwbWxxbW9zdWNtZXRiZ3U1Y21lIiwiZXZlbnRfaWQiOiJlNzg2YTIzYi1mYzc2LTQzMzgtYWNmMC1lNTM2MGZhNDUwZGQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU4Njc5ODM1NCwibmFtZSI6InRlc3QxIiwiZXhwIjoxNTg2ODAxOTU0LCJjdXN0b206cm9sZSI6IkFkbWluIiwiaWF0IjoxNTg2Nzk4MzU0LCJlbWFpbCI6IndhbGtlcmhwb3dlbGxAaG90bWFpbC5jb20ifQ.CJ6Z6-mUnm-8tVD2BGJlMysYc8L-N_verF-gH0O2lR_VpB0LPM4dYtbkUgYF4RgtpnFfnpvW2xs6BPelNeVpKDjmRnGHzUBnYcYgdVu7YxJMF5CTyY8wqUolUfjEyM7_9uH9jTqEGNZ6ENGNLDUK07FJ3OHqtHZZzgTMN7SWvMKQC4IoMMO42ifFYYVXVTmn_1h-goHzHRCsqFtraJS3TOAVoP_ebSM3Qm4D87Z83dc74fSvBfmVPOpp_ZQRVxHs7oP9rfaWtfyjmFKOvRnpg9pUlYZEwXLxTjyz70vEqNdtZSTtQE7u5Vc10LRpbLb-Bfwv3bYA8V--gukDtTrHaA'

const UserServices = {
  login: async function(username, password) {
    let data = {
      "Username": username,
      "Password": password,
    }

    let url = Config.baseAPI + '/login'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    return response
  },

  inviteNewUser: function(userId, type) {
    return null;
  },

  getStudents: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Student'))
  },

  getInstructors: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Faculty/Staff'))
  },

  sendResetPasswordLink: function(userEmail) {
    return null;
  },

  getMentors: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Mentor'))
  },

  assignMentor: function(studentEmail, mentorEmail) {
    return null
  },

  getTrackingLocations() {
    return dummyData.trackingLocations
  },

  getCompetencies() {
    return dummyData.competencies
  },

  deleteStudent(studentEmail) {
    return null;
  },

  getMentor(studentEmail) {
    let student = dummyData.users.filter((user) => user.email == studentEmail);
    console.log("GOODBYE", student)
    return student[0].mentor;
  },

  unassignMentor(studentEmail) {
    return null
  },

  searchTrackingLocations(search) {
    return dummyData.trackingLocations.filter((trackingLocation) => (trackingLocation.name.toLowerCase().includes(search.toLowerCase()))||search =='') 
  },

  searchCompetencies(search) {
    return dummyData.competencies.filter((competency) => (competency.title.toLowerCase().includes(search.toLowerCase()))||search =='') 
  },

  getTrackingLocation(tlid) {
    return dummyData.trackingLocations.filter((trackingLocation) => (trackingLocation.locationID == tlid))
  },

  async createTrackingLocation(name) {
    let data = {
      "LocationName": name,
      "CompetencyIds": ["testId"] // for some reason, must be in double quotes " not single quotes '
    }

    let url = Config.baseAPI + '/tracking-locations-to-competencies'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      },
      body: JSON.stringify(data)
    })

    return response

  },

  addCompToTL(compId, track) {
    console.log(compId)
    return null
  },

  addStudentToTL(studentEmail, track) {
    console.log(studentEmail)
    return null
  },

  addInstructorToTL(instructorEmail, track) {
    console.log(instructorEmail)
    return null
  },

  getInstructor(emails) {
    return dummyData.users.filter((user) => emails.includes(user.email))
  }, 
  tlToCompetency(cids) {
    return dummyData.competencies.filter((competency) => cids.includes(competency.id))
  },
  getStudent(emails) {
    return dummyData.users.filter((user) => emails.includes(user.email))
  }, 
  
  getUser(email) {
    return dummyData.users.filter((user) => email == (user.email))[0]
  }, 
}

export default UserServices;