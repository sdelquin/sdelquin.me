<template>
  <div class="bio">
    <BioPar leadingIcon="fas fa-terminal">
      I was born in <a href="https://www.laorotava.es/">La Orotava (Tenerife)</a> back in 1979! I
      started loving
      <div class="hl">computing</div>
      quite young when I used to visit one of my father's friend. I remember he got a
      <a href="https://en.wikipedia.org/wiki/Amiga">Commodore Amiga</a> and I spent hours fooling
      with the <a href="https://en.wikipedia.org/wiki/MS-DOS">MS-DOS</a> on
      <a href="https://en.wikipedia.org/wiki/Windows_3.1x">Windows 3.11</a>.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fas fa-school">
      Highschool was one of my best stages so far. There I met very
      <div class="hl">good people</div>
      and I discovered interesting subjects and fields of knowledge. My passion about computing grew
      in front of my eyes. I fondly remember
      <a href="http://www.iesrafaelarozarena.com/">IES Rafael Arozarena</a>.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fas fa-laptop-code">
      It was obvious that I was going to study Computer Science. My time at
      <a href="http://ull.es/">University of La Laguna</a> was intense but also very hard. There I
      figured out the dimension of what programming is:
      <div class="hl">a non-stop learning journey</div>
      . Fortunately I could meet there great teachers that showed me some right paths.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fas fa-flag-usa">
      Languages have played an important role in my life (not only the programming ones). Maybe this
      affection comes from my mum. In an earlier stage I finished
      <div class="hl">English</div>
      B2 Level at <a href="https://www.eoilaorotava.com/">EOI El Mayorazgo</a>. After some years I
      choose to leap on
      <div class="hl">German</div>
      B2 Level at <a href="https://www.eoipuertodelacruz.com/">EOI Puerto de la Cruz</a>.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fas fa-chalkboard-teacher">
      I can not understand my career without
      <div class="hl">teaching</div>
      . After overcoming my academic degree I decided to take the educational road. I could pass the
      official tests and got my position as teacher of higher IT studies at
      <a href="http://iespuertodelacruz.es/">IES Puerto de la Cruz - Telesforo Bravo</a>.
      Furthermore I had the chance to get involved in <a href="https://www.eoi.es/">EOI</a> as
      teacher of IT courses. I combine both teaching activities.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fab fa-python">
      Programming is a fascinating stuff for me. A set of great tech tools that lets you
      <div class="hl">create something new from scratch</div>
      . I really love it. Fortunately I have been able to learn different programming languages, but
      life changes when Python appeared on the scene. Wherever you are, thanks adsaman for being my
      mentor. I am cofounder of <a href="https://pythoncanarias.es">Python Canarias</a>.
    </BioPar>
    <BioSep />
    <BioPar leadingIcon="fa fa-magic">
      When I finished my degree on Computer Science I started to collaborate with
      <a href="http://www.gobiernodecanarias.org/istac/"
        >Instituto Canario de Estadística (ISTAC)</a
      >
      developing a statistical software. It's curious that 15 years later I resumed this link again.
      Nowadays I work at ISTAC doing
      <div class="hl">automation in data processing</div>
      .
    </BioPar>
  </div>
</template>

<script>
import BioSep from '@/components/BioSep.vue'
import BioPar from '@/components/BioPar.vue'
import { annotate, annotationGroup } from 'rough-notation'

const PAGE_TITLE = 'Bio'

export default {
  name: 'Bio',
  components: {
    BioSep,
    BioPar,
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
  metaInfo: {
    title: PAGE_TITLE,
  },
}
</script>

<style lang="scss" scoped>
.hl {
  display: inline-block;
}
</style>
