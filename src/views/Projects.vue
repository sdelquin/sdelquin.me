<template>
  <div class="projects">
    <nav class="panel">
      <Project
        v-for="(project, index) in projects"
        :key="index"
        :icon="project.icon"
        :title="project.title"
        :url="project.url"
      />
    </nav>
    <p>
      <i class="fas fa-angle-double-right"></i>
      And many more on my <a class="link" href="https://github.com/sdelquin">GitHub account</a>!!
    </p>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'Bio',
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          icon: 'fas fa-cube',
          title: 'Experiments on Computer Aided Design (3D)',
          url: 'https://cad.sdelquin.me',
        },
        {
          icon: 'fas fa-camera-retro',
          title: 'Pictures of my travels',
          url: 'https://pics.sdelquin.me',
        },
        {
          icon: 'fab fa-amazon',
          title: 'Price of Amazon products for Canary Islands',
          url: 'https://ciap.sdelquin.me',
        },
        {
          icon: 'fas fa-video',
          title: 'Web application with latin dancing videos',
          url: 'https://susikiu.es',
        },
        {
          icon: 'fas fa-diagnoses',
          title: 'Extract haplotypes from DNA sequences',
          url: 'https://haplosearch.com',
        },
        {
          icon: 'far fa-gem',
          title: 'Utilities for Crystallographic Information Files',
          url: 'https://cifutils.sdelquin.me',
        },
      ],
    }
  },
  metaInfo: {
    title: 'Projects',
  },
}
</script>
