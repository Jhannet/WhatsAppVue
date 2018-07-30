export default {
  getStates() {
    return Promise.resolve({
      states: [
        {
          Id: 1,
          ProfileImage: '../assets/profile.png',
          NameContact: 'Contact 1',
          LastTime: '01/25/2018 08:00',
        },
        {
          Id: 2,
          ProfileImage: '../assets/profile.png',
          NameContact: 'Contact 2',
          LastTime: '01/25/2018 08:00',
        },
      ],
    });
  },
};
