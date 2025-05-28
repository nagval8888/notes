<script>
import Card from '@/components/UI/Card.vue'
import items from '@/seeders/items.json'
import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'

export default {
    name: "home",
    components: {Card, Carousel, Slide, Navigation},
    data() {
        return {
            items,
            carouselConfig: {
                itemsToShow: 3,
                wrapAround: true,
                snapAlign: 'center',
                autoplay: 1000,
                gap: 5,
                pauseAutoplayOnHover: true,
                transition: 1000
            },
            breakpoints: {
                360: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                480: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                520: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                760: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                1080: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                }
            }
        }
    }
}
</script>

<template>
        <Carousel :="carouselConfig" :breakpoints="breakpoints" >
            <slide class="card__wrapper" v-for="item in items" :key="item.id">
                <Card
                        :name="`${item.level} level`"
                        :title="item.title"
                        :imgUrl="item.img"
                        :link="`/${item.alias}`"
                >
                    <template #header>{{ item.title }}</template>
                    <template #body>{{ item.description }}</template>
                    <template #footer>
                        <div class="card-stats">
                            <div
                                    v-for="(stat, index) in item.info"
                                    :key="index"
                                    class="one-third"
                            >
                                <div class="stat-value">{{ stat.value }}</div>
                                <div class="stat">{{ stat.title }}</div>
                            </div>
                        </div>
                    </template>
                </Card>
            </slide>
            <template #addons>
                <Navigation/>
            </template>
        </Carousel>
</template>

<style lang="scss">
@import '../assets/scss/main';

.card-stats {
    display: flex;
    margin: 30px 0;
    border-radius: 14px;
    color: white;
    background-color: #ec9b3b;
    font-weight: 700;
    border-bottom-left-radius: $border-radius-size;
    border-bottom-right-radius: $border-radius-size;
}

.one-third {
    width: 33%;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px 15px;

    &:last-child {
        border-right: none;
    }
}

.stat-value {
    position: relative;
    font-size: 24px;
    margin-bottom: 10px;
}

.stat {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
}
</style>
