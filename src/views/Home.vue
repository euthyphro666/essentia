<template>
  <div class="grid-container">
      <Title class="title"/>
      <Projects class="projects"/>
      <About class="about"/>
      <Social class="social"/>
  </div>
</template>

<script>
import Title from '../components/home/Title';
import Projects from '../components/home/Projects';
import About from '../components/home/About';
import Social from '../components/home/Social';

export default {
    name: "Home",
    components: {
        Title,
        Projects,
        About,
        Social
    }
}
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-areas: 
            "title projects"
            "about social";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        .grid-container {
            display: grid;
            grid-template-areas: 
                "title"
                "projects"
                "social"
                "about";
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            width: 100%;
            height: 100%;
        }
    }


    .title {
        grid-area: title;
        /* background: #abcdef; */
    }

    .projects {
        grid-area: projects;
        /* background: #bbc11f; */
    }

    .about {
        grid-area: about;
        /* background: #cc2f11; */
    }

    .social {
        grid-area: social;
        /* background: #11ff3e; */
    }

    

</style>