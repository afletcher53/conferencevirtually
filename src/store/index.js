import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {
        project_telephone: '07484719158',
        project_email: 'admin@conferencevirtually.com',
        project_address: '16, Liverpool Science Park IC1, The Webinar Vet, 131 Mount Pleasant, Liverpool L3 5TF',
        project_name: 'conferencesvirtually',
        project_name_expanded: 'Conference, <br> Virtually.',
        project_strap_line: 'The current crisis has caused wholesale cancellations of physical conferences, leading to conferences being held online. We are the world leaders in virtual congresses with seven years experience. <br> Introducing Conference, Virtually.',
        project_strap_line_condensed: 'The world leader for virtual congresses.',
        project_copywrite_slug: 'Copyright ©2020. All Rights Reserved. Website created by <a href="https://www.aaronfletcher.co.uk">Aaron Fletcher</a>',
        project_landing_video_id: 'IcUo83XpWMI',
        project_social_media: [
          {class: "facebook", to: "https://www.facebook.com/anthony.chadwick.501", id: '1'},
          {class: "twitter", to: "https://twitter.com/anthonychadwic6?lang=en", id: '2'},
          {class: "linkedin", to: "https://www.linkedin.com/in/anthonychadwick/?originalSubdomain=uk", id:'3'},

        ],
        project_services: [
          {class: "Certification", to: "https://www.facebook.com/anthony.chadwick.501", id: '1', text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: require( "@/assets/img/home/logo/wv-logo-community.png")},
          {class: "Communities", to: "https://twitter.com/anthonychadwic6?lang=en", id: '2',  text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: require("@/assets/img/home/logo/wv-logo-screen.png")},
          {class: "Webinars", to: "https://www.linkedin.com/in/anthonychadwick/?originalSubdomain=uk", id:'3',  text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: require("@/assets/img/home/logo/wv-logo-certifcate.png")},

        ],
        project_services_title: 'What We Provide',
        project_services_strapline: 'We are a full-service provider for your virtual event; from organising speakers to getting CE accreditation. We can provide a congress website and help promote your conference to your community. We are experts at organising and running virtual events. All recordings are available after the event for people to view. No more having to choose which stream you attend.',
        project_funfacts_title: 'Serving Medical Communities. Online, Everywhere.',
        project_funfacts_strapline: 'Our founder, Anthony Chadwick, is a vet and has been providing online education for vets and nurses for over ten years. Other companies and professions began approaching him for advice on running digital events and the idea of Conference, Virtually was born. The ongoing global crisis has quickened the adoption of digital technology in the conference spac.',
        project_about_title: 'A little about us.',
        project_about_strapline: "<p>When I started The Webinar Vet in 2010, nobody had heard of webinars in the veterinary profession. I set it up because I wanted to make veterinary education more accessible and affordable to vets worldwide. With less stress too! At the end of a busy day in the practice, the very last thing I wanted to do was jump in the car and travel an hour to a hotel for some veterinary CPD. </p><br/><p>Amazingly, none of the traditional veterinary CPD companies had thought of this and for 12 months I was all alone in the online space. The company grew very quickly amongst vets and nurses because my pain was felt by them too. </p><p>The company has continued to grow quickly because I think the community senses that, as a vet, I want to help my fellow colleagues develop themselves and become better vets or nurses. </p><br/><p>There have been many highlights in the last nine years like winning the Regional Business Awards in my home city of Liverpool as the leading Knowledge Transfer Business of 2016. It was an emotional night and it was lovely to share it with the team. </p><br/><p>However, my two proudest moments have been our partnership with the Royal College in setting up mindfulness training for vets. This has been life-changing for some of the community and looking at the amazing team that I have helped to develop and grow over the last three years. They help me to develop as well! </p><br/><p>I'm truly blessed to have such a dedicated team who want to help all our community members.</p>"
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
