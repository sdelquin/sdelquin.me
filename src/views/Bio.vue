<template>
  <div class="bio">
    <p>
      <i class="fas fa-terminal"></i> I was born in
      <a href="https://www.laorotava.es/">La Orotava (Tenerife)</a> back in 1979! I started loving
      <span class="hl">computing</span> quite young when I used to visit one of my father's friend.
      I remember he got a <a href="https://en.wikipedia.org/wiki/Amiga">Commodore Amiga</a> and I
      spent hours fooling with the <a href="https://en.wikipedia.org/wiki/MS-DOS">MS-DOS</a> on
      <a href="https://en.wikipedia.org/wiki/Windows_3.1x">Windows 3.11</a>.
    </p>
    <BioSep />
    <p>
      <i class="fas fa-school"></i>
      Highschool was one of my best stages so far. There I met very
      <span class="hl">good people</span> and I discovered interesting subjects and fields of
      knowledge. My passion about computing grew in front of my eyes. I fondly remember
      <a href="http://www.iesrafaelarozarena.com/">IES Rafael Arozarena</a>.
    </p>
    <BioSep />
    <p>
      <i class="fas fa-laptop-code"></i>
      It was obvious that I was going to study Computer Science. My time at
      <a href="http://ull.es/">University of La Laguna</a> was intense but also very hard. There I
      figured out the dimension of what programming is:
      <span class="hl">a non-stop learning journey</span>. Fortunately I could meet there great
      teachers that showed me some right paths.
    </p>
    <BioSep />
    <p>
      <i class="fas fa-flag-usa"></i>
      Languages have played an important role in my life (not only the programming ones). Maybe this
      affection comes from my mum. In an earlier stage I finished <span class="hl">English</span> B2
      Level at <a href="https://www.eoilaorotava.com/">EOI El Mayorazgo</a>. After some years I
      choose to leap on <span class="hl">German</span> B2 Level at
      <a href="https://www.eoipuertodelacruz.com/">EOI Puerto de la Cruz</a>.
    </p>
    <BioSep />
    <p>
      <i class="fas fa-chalkboard-teacher"></i>
      I can not understand my career without <span class="hl">teaching</span>. After overcoming my
      academic degree I decided to take the educational road. I could pass the official tests and
      got my position as teacher of higher IT studies at
      <a href="http://iespuertodelacruz.es/">IES Puerto de la Cruz - Telesforo Bravo</a>.
      Furthermore I had the chance to get involved in <a href="https://www.eoi.es/">EOI</a> as
      teacher of IT courses. I combine both teaching activities.
    </p>
    <BioSep />
    <p>
      <i class="fab fa-python"></i>
      Programming is a fascinating stuff for me. A set of great tech tools that lets you
      <span class="hl">create something new from scratch</span>. I really love it. Fortunately I
      have been able to learn different programming languages, but life changes when Python appeared
      on the scene. Wherever you are, thanks adsaman for being my mentor. I am cofounder of
      <a href="https://pythoncanarias.es">Python Canarias</a>.
    </p>
  </div>
</template>

<script>
import BioSep from '@/components/BioSep.vue'
import { annotate, annotationGroup } from 'rough-notation'

export default {
  name: 'Bio',
  components: {
    BioSep,
  },
  mounted: function() {
    const itemsToHighlight = []
    const hightlightStyle = { type: 'highlight', color: '#ff8c002b' }
    document.querySelectorAll('.hl').forEach(item => {
      itemsToHighlight.push(annotate(item, hightlightStyle))
    })
    const ag = annotationGroup(itemsToHighlight)
    ag.show()
  },
}
</script>

<style lang="scss" scoped>
.bio {
  text-align: justify;
  font-size: 0.9rem;
}
i {
  color: darkorange;
  font-size: 1rem;
}
</style>
