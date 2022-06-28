Vue.createApp({
  data() {
    return {
      candidates: [
        {
          id: '1a2',
          name: 'Zack',
          url: 'https://avatars.dicebear.com/api/miniavs/zack.svg',
          post: 'What do you call a singing laptop? A Dell!',
          votes: 10,
        },
        {
          id: '3a3',
          name: 'Patty',
          url: 'https://avatars.dicebear.com/api/miniavs/patty.svg',
          post: 'I tried to sue the airport for misplacing my luggage. I lost my case.',
          votes: 12,
        },
        {
          id: '4a2',
          name: 'Marco',
          url: 'https://avatars.dicebear.com/api/miniavs/m.svg',
          post: "Some people think prison is one word…but to robbers it's the whole sentence.",
          votes: 8,
        },
        {
          id: '7aq',
          name: 'Stephen',
          url: 'https://avatars.dicebear.com/api/miniavs/dave.svg',
          post: 'I was wondering why the frisbee was getting bigger, then it hit me.',
          votes: 8,
        },
      ],
    };
  },
  methods: {
    voteme(student){
      // console.log(this.candidates[0].votes)
      // this.candidates[0].votes++;
      // if(this.candidates[0].votes === 10){
      //   let voting = document.getElementsByClassName("voting__list-item")
      //   console.log(voting[0])
      //   voting[0].style.borderColor = "red"
      // }
      student.votes += 1;
      console.log(student.votes)
    },
    voteDown(student){
      // for(item in this.candidates){
      //   console.log(this.candidates[item])
      // }
      if(student.votes > 0){
        student.votes -= 1;
        console.log(student.votes)
      }
      // else{
      //   let voting = document.getElementsByClassName("voting__list-item")
      //     console.log(voting)
      //     voting[0].style.borderColor = "red"

      // }
      
      
    }
  },
  computed: {
    sorter() {
      return this.candidates.sort((a, b)=> {
        return b.votes - a.votes;
      });
    },
  },
}).mount('#app');
