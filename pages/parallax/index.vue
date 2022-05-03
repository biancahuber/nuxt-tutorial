<template>
  <div class="parallax">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim sed pariatur reprehenderit aspernatur porro aliquid, quis dolore repellat, commodi veniam ullam corrupti cumque tenetur sint, sequi sapiente laudantium non?
      </p>
      <kinesis-container class = 'parallax-container parallax-container--left' event="scroll">
        <kinesis-element class="child" type="translate" :strength="500">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
        <kinesis-element class="child" type="translate" :strength="300">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
        <kinesis-element class="child" type="translate" :strength="150">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
    </kinesis-container>
    <kinesis-container class = 'parallax-container parallax-container--right' event="scroll">
        <kinesis-element class="child" type="translate" :strength="500">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
        <kinesis-element class="child" type="translate" :strength="300">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
        <kinesis-element class="child" type="translate" :strength="150">
          <img class='image' src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Falkland_Islands_Penguins_36.jpg" alt="">
        </kinesis-element>
    </kinesis-container>
    </div>
</template>

<script>
export default {
}
</script><style scoped>
.parallax{
  position: relative;
}
.parallax-container{
  position: absolute;
  top: 20px;
}
.parallax-container--left{
  left: 0;
  z-index: -1;
}
.parallax-container--right{
  right: 0;
}
.child {
  width: 200px;
  margin-bottom: 20px;
  margin: 100px auto;
}

.image{
  display: block;
  width: 100%;

}
</style>
