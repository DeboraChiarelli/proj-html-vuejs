<template>
    <div class="bg-image">
        <div class="content-section">
            <h2 class="title-with-border">Latest articles</h2>
            <p>Together we make all the difference</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <img src="../../public/HelloIMG1669149322752.jpeg" alt="Article Image">
                        <div class="card-text">
                            <p class="yellow">Understanding community complexities</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <!-- Prima immagine con testo -->
                    <div class="image-block">
                        <div class="image-content">
                            <img src="../../public/HelloIMG1669149318263.jpeg" alt="Image 1">
                            <div class="image-text">
                                <p class="yellow">The human story of uniqueness</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Seconda immagine con testo -->
                    <div class="image-block">
                        <div class="image-content">
                            <img src="../../public/HelloIMG1669149319450.jpeg" alt="Image 2">
                            <div class="image-text">
                                <p class="yellow">Sustainable trade tactics</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Terza immagine con testo -->
                    <div class="image-block">
                        <div class="image-content">
                            <img src="../../public/HelloIMG1669149321401.jpeg" alt="Image 3">
                            <div class="image-text">
                                <p class="yellow">Farmers making a difference</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Quarta immagine con testo -->
                    <div class="image-block">
                        <div class="image-content">
                            <img src="../../public/HelloIMG1669149322752.jpeg" alt="Image 4">
                            <div class="image-text">
                                <p class="yellow">Meeting remote tribes in Peru</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-articles">
            <h3 class="title-articles">View all our articles</h3>
        </div>
    </div>
</template>
  
  
<style lang="scss" scoped>
.bg-image {
    min-height: 800px;
}

.content-section {
    color: black;
    text-align: center;
    padding: 20px;
}

.title-with-border {
    border-bottom: 2px solid #FEC96B;
    max-width: 15%;
    margin: 0 auto;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 100px;
    text-transform: uppercase;
    white-space: nowrap;
}

.container {
    max-width: 800px;
    display: flex;
}

.col-6 {
    flex-basis: calc((100% / 12) * 6);
}

.card {
    border: 1px solid #ccc;
    margin-bottom: 20px;
}

img {
    height: auto;
}

.card-text {
    padding: 5px;
    font-size: 15px;
    margin-left: 10px;
    margin-top: 20px;
}

.yellow {
    color: #FEC96B;
}

.image-block {
    margin-bottom: 29px;
}

.image-content {
    display: flex;
    flex-direction: row;
}

.image-content img {
    max-width: 100px;
    height: auto;
}

.image-text {
    margin-left: 10px;
    line-height: 1;
    font-size: 15px;
}

.banner-articles {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    padding-bottom: 80px;

}

.title-articles {
    max-width: 800px;
    text-transform: uppercase;
    background-color: #ED6967;
    padding: 20px;
    text-align: center;
    font-size: 15px;
    color: white;
}
</style>