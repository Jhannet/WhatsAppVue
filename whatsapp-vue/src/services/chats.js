export default {
 	getChats() {
    return Promise.resolve({
      chats: [
        {
          Id: 1,
          ProfileImage: '../assets/profile.png',
          NameContact: 'Contact 1',
          LastMessage: 'bye bye',
          LastDatetime: '01/25/2018 08:00',
        },
        {
          Id: 2,
          ProfileImage: '../assets/profile.png',
          NameContact: 'Contact 2',
          LastMessage: 'Hello.',
          LastDatetime: '01/25/2018 08:00',
        },
      ],
    });
  },
  getChat(id) {
    console.log(id)
    return Promise.resolve({
      chat:
        {
          Id: 1,
          ProfileImage: '../assets/profile.png',
          NameContact: 'Contact 1',
          LastMessage: 'bye bye',
          LastDatetime: '01/25/2018 08:00',
          Messages: ['Hi', 'Hi, Good morning.', 'How are you'],
        },
    });
  },
};
