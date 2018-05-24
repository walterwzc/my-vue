<template>
    <div class="main-banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in swiperImgSrc" :key="index"><a href="###"><img :src="item" alt=""></a></div>
                <!-- <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/c11d3c4a7aa542129f79ac4ea4c1eb05.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/c141061b26724fe7bb247147c387908c.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/58c6564168f945aa8dd9be56a01752f9.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/38064dee6146484fa8358d9cfd4d1b11.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/78825c1b2b8741e99f36237b50eed8f4.jpg" alt=""></a></div>
                <div class="swiper-slide"><a href="###"><img src="/static/images/swiper/093987d17e0142b0bf890e5b599b5bcf.jpg" alt=""></a></div> -->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

        <div class="test">
        
        </div>

        <div class="testyo1">

        </div>
    </div>
</template>




<script>
import Swiper from 'swiper'

export default {
    data: () => {
        return {
            swiperImgSrc: ["/static/images/swiper/c11d3c4a7aa542129f79ac4ea4c1eb05.jpg", 
            "/static/images/swiper/c141061b26724fe7bb247147c387908c.jpg",
            "/static/images/swiper/58c6564168f945aa8dd9be56a01752f9.jpg",
            "/static/images/swiper/38064dee6146484fa8358d9cfd4d1b11.jpg",
            "/static/images/swiper/093987d17e0142b0bf890e5b599b5bcf.jpg"]
        }
    },

    mounted() {
        window.onload = function() {
            var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
        })
        }
        
    }
}
</script>




<style lang="scss">

$myParam1: (
    origin-color: blue,
    final-color: yellow,
);

$myParam2: (
    final-color: red
);

$finalParams: map-merge($myParam1, $myParam2);

$color: map-get($map: $finalParams, $key: final-color);

// .test {
//     height: 100px;
//     width: 100px;

//     background: $color;
// }

.testyo1 {
    // @include rect( 1rem, 2rem );
}

.swiper-container {
    height: 1.81rem;    
    position: relative;
}

.swiper-wrapper {

    img {
        height: 1.81rem;
    }
}

.swiper-pagination {
    // position: absolute;
    text-align: right;
    padding-right: 8px;
}

.swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
    width: 6px;
    height: 6px;
}

.swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
}
</style>
