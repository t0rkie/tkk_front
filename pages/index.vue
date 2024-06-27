<template>
  <div class="">
    <!-- 各セクション -->
    <section class="section" v-for="section in sections">
      <h1 style="margin-bottom: 0;">{{ section.content.name }}</h1>
      <div>
        <div v-for="content in section.content.contents">
          <div style="display: flex; margin-bottom: 10px;height: 100px;">
            <div style="position: relative;">
              <div style="position: absolute;top:30px;font-weight: bold;text-shadow:2px 2px #FFF;font-size: 50px;transform: skewX(-10deg);">{{ content?.ranking }}</div>
              <div style="width: 150px;">
                <img :src="content.content.imageUrl" style="max-width: 100%;object-fit: fill;" />
              </div>
            </div>
            <div style="margin: 10px;">
              <div v-if="section.content.type == 'new'">
                <span style="background-color:var(--main-color);color:#FFF;font-size:10px;padding:3px;">NEW</span>
              </div>
              <span style="font-weight:bold">{{ content.content.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
/* 各セクション */
const content_popular = {
  type: 'popular',
  name: '人気ランキング',
  contents: [
    {
      id: 1,
      ranking: 1,
      content: {
        imageUrl: '/img_test/4.jpg',
        title: 'ONEチャンピオンシップ チンギス・アラゾフ vs. マラット・グレゴリアン'
      }
    },
    {
      id: 2,
      ranking: 2,
      content: {
        imageUrl: '/img_test/1.jpg',
        title: 'Yogibo presents 超RIZIN.3 朝倉未来 vs. 平本蓮'
      }
    },
    {
      id: 3,
      ranking: 3,
      content: {
        imageUrl: '/img_test/7.jpg',
        title: 'UFC FIGHT NIGHT ペレス vs. 平良'
      }
    }
  ]
}
const content_new = {
  type: 'new',
  name: '新着',
  contents: [
    {
      id: 1,
      content: {
        imageUrl: '/img_test/4.jpg',
        title: 'ONEチャンピオンシップ チンギス・アラゾフ vs. マラット・グレゴリアン'
      }
    },
    {
      id: 2,
      content: {
        imageUrl: '/img_test/5.jpg',
        title: 'UFC マクレガー vs. チャンドラー'
      }
    },
    {
      id: 3,
      content: {
        imageUrl: '/img_test/7.jpg',
        title: 'UFC FIGHT NIGHT ペレス vs. 平良'
      }
    }
  ]
}
const sections = [
  {
    order: 1,
    content: content_popular
  },
  {
    order: 2,
    content: content_new
  }
]
</script>
<style scoped>
</style>