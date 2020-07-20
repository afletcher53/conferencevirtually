<script>
import Banner from './index/Banner';
import Services from './index/Services';
import Funfacts from './index/Funfacts';
import Features from './index/Features';
import FeaturesTwo from './index/FeaturesTwo';
import FeaturesThree from './index/FeaturesThree';
import Feedback from './index/Feedback';

export default {
    name: 'Index',
    components: {
        Banner,
        Services,
        Funfacts,
        Features,
        FeaturesTwo,
        FeaturesThree,
        Feedback,
    }
}
</script>

<template>
  <div>
    <Banner />
    <Services />
    <Funfacts />
    <Features />
    <FeaturesTwo />
    <FeaturesThree />
    <Feedback />
  </div>
</template>
