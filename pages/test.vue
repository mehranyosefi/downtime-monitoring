<script setup lang="ts">
definePageMeta({
  layout: false,
});

onMounted(() => {
  const elementsToMove = document.querySelectorAll(".move");

  let moveObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        console.log("eee");
        entry.target.style.animation = `moving 1s ease-in-out`;
      } else {
        entry.target.style.animation = "none";
      }
    });
  });

  elementsToMove.forEach((element) => {
    moveObserver.observe(element);
  });
});
</script>

<template>
  <div class="h-screen bg-red-200 !overflow-scroll">
    <div class="move">mehran</div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque
      mollitia iure ducimus est doloribus commodi quam ipsum sit. Magnam et quas
      facere dolorum. Incidunt soluta labore distinctio eaque natus? Quam atque
      quae rerum beatae repellendus, blanditiis omnis non neque consectetur
      doloremque inventore! Soluta fugit deleniti, numquam autem officiis
      eligendi! Eaque delectus dolore et maxime culpa ipsum illo ab ipsa. Culpa,
      officiis dolorem eaque hic exercitationem asperiores, dolore cum ad animi
      delectus laudantium repudiandae quis totam nam. Voluptate inventore harum
      ut labore, voluptatibus totam, velit quos, nam quo iste repellendus.
      Similique earum tenetur dicta blanditiis. Eius eveniet deleniti fuga
      distinctio nam! Ipsam ratione unde quisquam consequatur dolor amet
      voluptate modi, maxime cupiditate sapiente, a omnis deserunt? Optio sint
      ullam minus. Tenetur aperiam magni, cumque cupiditate excepturi voluptatum
      amet consequatur facere modi atque rem fugiat laudantium repellat ad, aut
      doloremque quas quasi voluptate, delectus officiis expedita quae nisi
      odio. Accusantium, non? Repudiandae ut animi eligendi esse dolore. Odit
      tempore accusantium porro in quaerat impedit voluptatem eos quidem est
      dolores minus sit perferendis, veniam voluptatum deleniti harum quasi.
      Nobis quaerat perferendis veniam. Consequuntur, voluptates corporis
      quisquam fugit nostrum beatae expedita maiores nesciunt facilis. Dolorum,
      quas atque voluptatem ea eius eveniet. Placeat praesentium non, a numquam
      quam quia perspiciatis repellendus dolorem ut quisquam. Quaerat impedit
      saepe iste, reiciendis porro officia dolor doloribus libero soluta
      consequatur sint nesciunt eum dicta blanditiis dignissimos sequi
      aspernatur architecto adipisci vel! Eos aliquam numquam ducimus aperiam
      commodi aut! Atque recusandae rerum adipisci aspernatur ullam accusamus
      necessitatibus harum. Distinctio mollitia soluta animi pariatur
      praesentium sunt aut a commodi atque. Accusantium temporibus minima quo
      nostrum ea odit aperiam illo distinctio. Nulla distinctio nobis architecto
      eum vitae expedita et obcaecati iure hic possimus impedit officiis soluta
      excepturi vero ipsa modi neque ipsam nisi illo necessitatibus, perferendis
      earum, atque voluptate nihil. Atque! Asperiores necessitatibus nam aliquid
      hic quo dolorem. Corrupti voluptatem molestiae dicta hic perferendis
      cumque, assumenda odio? Animi, ipsa voluptates! Nemo, neque in quae
      obcaecati voluptatum provident magni perspiciatis eaque quaerat. Tenetur
      possimus soluta qui, dolorum eaque aut neque esse sunt officiis molestiae
      culpa dolores quas optio, tempora delectus nam eius nesciunt a architecto!
      Assumenda inventore et officiis adipisci consequatur? Sunt. Laborum est
      omnis quas voluptas illo. Expedita saepe harum dicta quae sint, qui
      voluptas nisi repellendus! Quisquam eius eum laboriosam est vero, sit
      nobis. Rerum placeat voluptas veniam expedita asperiores? Quo dolore
      repellendus numquam expedita at dignissimos praesentium earum accusantium
      mollitia nam! Molestiae harum distinctio atque voluptatibus iste, iure
      consequatur laudantium porro adipisci, reiciendis, delectus maiores magnam
      repudiandae dicta tempore. Reiciendis maxime suscipit nostrum hic cum
      aspernatur at deleniti, odio iusto labore iure beatae autem fuga fugiat,
      et voluptatum, nobis ut? Quis, laborum distinctio tenetur voluptates
      reiciendis necessitatibus est vitae! Exercitationem quisquam distinctio
      magnam nostrum ipsa, ad ducimus mollitia numquam debitis nobis facere et
      error eius obcaecati corporis atque reiciendis pariatur esse, minima
      minus! Neque earum magni necessitatibus in minus! Recusandae architecto
      eligendi pariatur dignissimos omnis eius voluptas, ducimus praesentium aut
      nesciunt culpa, repellendus eveniet nemo natus rem provident autem! Ea
      necessitatibus assumenda esse in tempore, blanditiis minima voluptate
      cupiditate. Optio expedita dolorum magnam provident ipsa nostrum natus
      eligendi, animi id ullam, inventore ducimus. Eius, at voluptatem quis non
      explicabo quidem sequi inventore, debitis voluptas aspernatur ullam facere
      eligendi nam. Maxime expedita ipsa necessitatibus enim minus alias,
      dolorem architecto porro at laborum cupiditate. Velit atque tempora,
      similique eum, sunt itaque sapiente nostrum, magni dolorum laboriosam at
      beatae totam rerum fugit. Autem ex blanditiis commodi cumque quia possimus
      optio nisi iste illo quam voluptas obcaecati quo modi deleniti
      necessitatibus saepe minima voluptate, laboriosam laborum ullam quod?
      Necessitatibus maiores omnis voluptates ratione. Consequuntur maiores esse
      sit! Eius labore odio officiis eaque doloribus, dolores vitae dicta,
      minima ipsum rerum magnam blanditiis veritatis molestias eos hic tenetur
      explicabo laboriosam dolor aliquam perspiciatis necessitatibus sed. Sint
      velit tempora, quo nulla incidunt, voluptatibus rem molestiae, voluptatum
      ipsa asperiores numquam placeat modi similique aperiam iste. Numquam
      blanditiis nam modi voluptas itaque eveniet consectetur fugiat aliquam
      iure rerum. Odio, totam autem? Enim eius corrupti recusandae praesentium
      quod asperiores ab, voluptatem placeat quibusdam dolorem nihil nisi optio
      sequi quam laborum maiores in et distinctio laboriosam veritatis rem earum
      quisquam? Eius, autem, nostrum nobis est quibusdam iste asperiores, unde
      repellendus cupiditate in qui incidunt maxime blanditiis debitis excepturi
      minus ullam repellat dicta totam dolores. In neque nam nisi molestiae
      maiores. Sapiente iure aspernatur ipsam illo rerum consequuntur at
      mollitia nihil! Optio eius sequi consequuntur labore quod delectus minus.
      Delectus, deleniti ratione sequi laboriosam explicabo minus debitis
      assumenda? Quia, architecto repudiandae. Autem atque soluta amet sint,
      itaque eos cum laborum ea unde, labore voluptatum quasi ut similique fugit
      maiores omnis rem praesentium aliquam ipsum quos! Omnis necessitatibus
      labore accusamus. Nemo, repellat? Molestiae commodi eius minima magni
      quidem, ipsum maxime in dolores possimus cupiditate. Repellendus illum
      doloribus nulla suscipit distinctio sint rerum iste, a vitae? Adipisci
      dolorem dolores non ea vel facere. Cum qui dignissimos nesciunt fugit nisi
      ad excepturi dolores labore et accusantium aut esse rem iusto inventore
      obcaecati quisquam, impedit omnis delectus! Excepturi mollitia facere
      dolore similique, odio pariatur vitae! Libero quos dignissimos esse nam
      sit ullam praesentium dicta necessitatibus aspernatur voluptate quasi,
      dolore ad, quas, voluptas non consequuntur magni repellendus nesciunt
      provident! Rerum sequi in doloremque soluta, aspernatur atque! Reiciendis,
      iusto quia blanditiis impedit adipisci quae. Placeat laudantium libero
      voluptates culpa perferendis voluptate fuga sequi rem corporis fugit
      officia, beatae earum, enim corrupti a voluptatibus veniam doloribus
      nostrum itaque. Repudiandae facilis sapiente fugit aliquid cupiditate
      reiciendis officiis pariatur odio ipsa laudantium exercitationem dolorem
      corporis, perferendis quae. Omnis voluptatibus repellendus laudantium
      labore rerum iste ex, corrupti ad quaerat, aperiam ipsum. Quod perferendis
      asperiores ab. Sit, eius velit neque exercitationem, omnis officia ipsa
      nulla ipsum incidunt assumenda blanditiis quibusdam nihil laudantium sed
      expedita! At qui voluptas neque nesciunt hic architecto sed? Nam enim rem
      sunt deserunt aut nemo commodi totam et nisi culpa, voluptatibus in velit
      ipsum iusto provident est, saepe nobis tenetur omnis. Quos fuga, ut quo
      molestiae officia porro! Laborum velit eum vitae voluptates autem
      similique, perferendis sint? Veritatis quos iure nesciunt enim aliquid
      obcaecati mollitia consequatur optio amet quas iste, aliquam officia.
      Voluptatem sequi quo officiis molestias ea. Omnis optio suscipit,
      reprehenderit odit ipsum molestias eveniet soluta necessitatibus
      distinctio adipisci numquam repellendus tenetur enim exercitationem cum
      nulla veniam ipsa praesentium esse. Minus harum natus, adipisci
      necessitatibus enim quod. Nostrum veritatis deleniti nesciunt vel optio,
      nam modi iure, eveniet rerum laudantium odio, ut provident? Mollitia
      architecto atque molestias tempore totam, iste deleniti et rem neque
      dignissimos qui laudantium eveniet. Cumque possimus, ea ducimus quo unde
      ipsam voluptas minus, aliquam itaque cupiditate accusamus eligendi
      incidunt labore quis! Sint suscipit eum, ad cumque earum recusandae
      eligendi quaerat facere, dolore, velit hic! Sunt laboriosam fuga natus ex
      necessitatibus, odio rerum non consectetur! Iusto expedita molestiae modi,
      error quam dolorum, accusamus eius exercitationem tempora ex fugiat rem
      debitis voluptatem, reiciendis illo aspernatur quibusdam? Harum in
      provident doloremque rem eaque officia impedit accusamus, eligendi
      reprehenderit quia soluta assumenda, nulla optio natus totam. Omnis
      asperiores quaerat vel provident laudantium error doloribus ex consectetur
      sapiente facere! Quae accusantium officiis saepe beatae nisi aperiam cum
      consectetur laudantium excepturi, dignissimos possimus quam, aut at.
      Impedit illo maiores odio distinctio consequatur optio atque, adipisci
      tempore cupiditate recusandae culpa incidunt? Veniam, tempora fugit
      mollitia corrupti perspiciatis rerum perferendis sequi soluta. Mollitia
      magni tempora blanditiis assumenda ducimus dolores praesentium temporibus
      debitis, commodi, possimus saepe hic molestias iusto, doloribus eligendi
      enim cumque! Omnis veritatis officia placeat commodi, tenetur modi
      corporis dolorum, rem qui libero praesentium numquam, voluptate in.
      Blanditiis consequatur iste nesciunt cumque culpa non delectus
      reprehenderit minima asperiores. Quae, quod deserunt! Magni omnis
      accusantium ratione pariatur culpa, id quas quisquam. Ipsum, mollitia! In
      velit, voluptates eligendi fuga perspiciatis id ratione possimus earum.
      Nulla, tempora enim. Error pariatur quas voluptas laboriosam facere.
      Minima voluptatibus hic optio reprehenderit facilis praesentium nobis
      provident totam doloremque asperiores, voluptas aliquam blanditiis maiores
      labore! Molestias, dolore ad rerum quia cum, odio suscipit laudantium
      cumque esse ut expedita? Optio necessitatibus numquam cumque repudiandae
      blanditiis veniam dolore praesentium veritatis soluta consequuntur
      quisquam sunt, placeat omnis. Quae debitis ab reiciendis provident
      necessitatibus, nulla iste, non possimus ullam voluptatibus sapiente
      dolorem. In porro, dolorem dolorum architecto perspiciatis qui eaque ea
      maiores animi doloremque minus vitae, quasi perferendis quod accusamus
      rerum reprehenderit commodi repellendus veniam, consectetur reiciendis.
      Minima sunt deserunt tenetur rerum! Alias dolores ipsum quibusdam quod
      obcaecati eveniet, corporis repellendus eos ducimus reiciendis porro
      voluptatum dicta? Eos in ullam, incidunt sed a fugit expedita modi
      eligendi harum obcaecati error rerum ipsam. Voluptas, exercitationem
      nostrum. Et facere quam, dignissimos distinctio voluptas quaerat ab sint
      dolores omnis blanditiis animi aperiam, mollitia placeat natus id laborum
      ullam beatae vero! Explicabo in optio provident accusantium. Incidunt est
      fugiat laborum ea dolore cum provident aspernatur veniam perspiciatis.
      Rerum sit, corporis vel laborum aut laboriosam aperiam. Assumenda
      consequuntur quaerat ad, id numquam sed distinctio incidunt sunt deleniti.
      Aspernatur minima et reprehenderit facere debitis provident, adipisci
      autem voluptas modi dolorum eos illum eum corrupti quibusdam
      necessitatibus! Labore earum excepturi architecto, alias libero distinctio
      officiis omnis est hic optio.
    </div>
  </div>
</template>
<style lang="postcss" scoped>
@keyframes moving {
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(200px);
  }
}
</style>
