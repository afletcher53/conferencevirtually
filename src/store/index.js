import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {
        project_telephone: '0151 324 0580',
        project_email: 'admin@conferencevirtually.com',
        project_address: '16, Liverpool Science Park IC1, The Webinar Vet, 131 Mount Pleasant, Liverpool L3 5TF',
        project_name: 'conferencesvirtually',
        project_name_expanded: 'Conference, <br> Virtually.',
        project_strap_line: 'The current crisis has caused wholesale cancellations of physical conferences, leading to conferences being held online. We are the world leaders in virtual congresses with seven years experience. <br> Introducing Conference, Virtually.',
        project_other_projects: 'Our Other Companies',
        project_strap_line_condensed: 'The world leader for virtual congresses.',
        project_copywrite_slug: 'Copyright ©2020. All Rights Reserved. Website created by <a href="https://www.aaronfletcher.co.uk">Aaron Fletcher</a>',
        project_landing_video_id: 'IcUo83XpWMI',
        project_social_media: [
          {name: "Facebook", class: "facebook", to: "https://www.facebook.com/conferencevirtually/ ", id: '1',  icon:'facebook'},
          {name: "Twitter", class: "twitter", to: "https://twitter.com/ConfVirtually", id: '2', icon:'twitter'},
          // {name: "LinkedIn", class: "linkedin", to: "https://www.linkedin.com/in/anthonychadwick/?originalSubdomain=uk", id:'3',  icon:'linkedin'},
        ],
        project_services: [
          {class: "Certification", id: '1', image: require( "@/assets/img/home/logo/wv-logo-community.png")},
          {class: "Communities", id: '2',  image: require("@/assets/img/home/logo/wv-logo-screen.png")},
          {class: "Webinars",  id:'3', image: require("@/assets/img/home/logo/wv-logo-certifcate.png")},

        ],
        project_about_us_history: 'We have over 10 years’ experience of running educational webinars and online events',
        project_about_us_history_title: 'Our History',
        project_about_us_mission: 'We aim to deliver virtual conferences which save not only time and money, but also the planet!',
        project_about_us_mission_title: 'Our Mission',
        project_about_us_who_we_are: 'Conference Virtually was established to help medical professionals bring their conferences online',
        project_about_us_who_we_are_title: 'Who we are',
        project_services_title: 'What We Provide',
        project_services_strapline: 'We are a full-service provider for your virtual event; from organising speakers to getting CE accreditation. We can provide a congress website and help promote your conference to your community. We are experts at organising and running virtual events. All recordings are available after the event for people to view. No more having to choose which stream you attend.',
        project_funfacts_title: 'Serving Medical Communities. Online, Everywhere.',
        project_funfacts_strapline: 'Our founder, Anthony Chadwick, is a vet and has been providing online education for vets and nurses for over ten years. Other companies and professions began approaching him for advice on running digital events and the idea of Conference, Virtually was born. The ongoing global crisis has quickened the adoption of digital technology in the conference space.',
        project_about_title: 'A little about us.',
        project_about_strapline: "<p>When I started The Webinar Vet in 2010, nobody had heard of webinars in the veterinary profession. I set it up because I wanted to make veterinary education more accessible and affordable to vets worldwide. With less stress too! At the end of a busy day in the practice, the very last thing I wanted to do was jump in the car and travel an hour to a hotel for some veterinary CPD. </p><br/><p>Amazingly, none of the traditional veterinary CPD companies had thought of this and for 12 months I was all alone in the online space. The company grew very quickly amongst vets and nurses because my pain was felt by them too. </p><p>The company has continued to grow quickly because I think the community senses that, as a vet, I want to help my fellow colleagues develop themselves and become better vets or nurses. </p><br/><p>There have been many highlights in the last nine years like winning the Regional Business Awards in my home city of Liverpool as the leading Knowledge Transfer Business of 2016. It was an emotional night and it was lovely to share it with the team. </p><br/><p>However, my two proudest moments have been our partnership with the Royal College in setting up mindfulness training for vets. This has been life-changing for some of the community and looking at the amazing team that I have helped to develop and grow over the last three years. They help me to develop as well! </p><br/><p>I'm truly blessed to have such a dedicated team who want to help all our community members.</p>",
        project_features_two_title: 'Simply Locums',
        project_features_two_url: 'https://simplylocums.co.uk/#/',
        project_features_two_strapline: 'Simply Locums was founded by Ben Sweeney BVSc MSc CertAVP MRCVS in 2016. As a disruptive innovator in the recruitment space, the business strived to challenge the status quo. By offering alternative approaches to locum sourcing and growing the largest community of veterinary locums in the UK, we have been able to help thousands of practices and countless vets and nurses over the last four years.</p><br/><p>We connect practices and locums directly meaning there are no middlemen in the process. It saves practices time and money, improves transparency and offers a vet-led recruitment option for locum staff. Veterinary practices will always ned a locum community, we just want to bring you closer.',
        project_features_one_title: 'The Webinar Vet',
        project_features_one_url: 'http://www.thewebinarvet.com/',
        project_features_one_strapline: 'The Webinar Vet was set up in 2010 by Anthony Chadwick (BVSC CertVD MRCVS), with the express wish of making veterinary education easier, more accessible and affordable for vets like you who have very busy lives.</p><br/><p> s a small animal vet for over 20 years, Anthony experienced first-hand the problems of travelling around to CPD meetings after a hard day\'s work. He knew there had to be a better and more efficient way to deliver CPD that would save vets time and money - The Webinar Vet was born.',
        project_features_three_title: 'Simply Vets',
        project_features_three_url: ' https://www.facebook.com/vetsimply/',
        project_features_three_strapline: 'Simply Vets was launched in July 2020. It is the first peer to peer careers networking platform in the veterinary profession. We know that word of mouth is one of the most powerful tools in attracting new talent to your practice. But what if you had a digital platform to spread that message further and wider? Our site offers practices the chance to list jobs for free, and the finder\'s fees are offered out to people who apply to the roles and those who refer the roles across their own network. We bring everyone\'s networks together giving you one HUGE opportunity for you to advertise your jobs for free and our members the chance to earn money for successfully networking your job for you. ',
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
