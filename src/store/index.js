import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {
        project_telephone: '07484719158',
        project_email: 'admin@conferencevirtually.com',
        project_address: ' 6, Liverpool Science Park IC1, The Webinar Vet, 131 Mount Pleasant, Liverpool L3 5TF',
        project_name: 'conferencesvirtually',
        project_name_expanded: 'Conference, <br> Virtually.',
        project_strap_line: 'Lorem ipsum dolor sit amet, ius graece verterem adversarium an, no dolorum apeirian per. Usu no omnesque vivendum, tale magna senserit in usu.',
        project_copywrite_slug: 'Copyright ©2020. All Rights Reserved. Website created by <a href="http://www.aaronfletcher.co.uk">Aaron Fletcher</a>',
        project_landing_video_id: 'PDlRFxYM2t4',
        project_social_media: [
          {class: "facebook", to: "https://www.facebook.com/anthony.chadwick.501", id: '1'},
          {class: "twitter", to: "https://twitter.com/anthonychadwic6?lang=en", id: '2'},
          {class: "linkedin", to: "https://www.linkedin.com/in/anthonychadwick/?originalSubdomain=uk", id:'3'},

        ]
    },

    // getters are Vuex's equivalent to computed properties in Vue.
    // functions here will always contain state as a parameter
    getters: {
    },

    // mutations are essentially functions that update state in some way.
    // You can think of these as kind of being Vuex's equivalent to Vue's methods.
    mutations: {
    },
    // actions are effectively the functions that get called by your components in order to trigger a mutation.
    actions: {

    }
});
