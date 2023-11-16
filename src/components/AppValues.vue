<script></script>
<template>
    <div class="bg-image">
        <div class="content-section">
            <h2 class="title-with-border">Our values</h2>
            <p>Think bigger, act bigger</p>
        </div>
        <div class="columns">
            <div class="column">
                <font-awesome-icon class="icon" :icon="['fas', 'droplet']" />
                <h3>Clean Water</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="button-container">
                    <a href="#" class="border-button bg-yellow">Learn more</a>
                </div>
            </div>

            <div class="column">
                <font-awesome-icon class="icon" :icon="['fas', 'stethoscope']" />
                <h3>Vaccinations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="button-container">
                    <a href="#" class="border-button bg-yellow">Learn more</a>
                </div>
            </div>

            <div class="column">
                <font-awesome-icon class="icon" :icon="['fas', 'graduation-cap']" />
                <h3>Education</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="button-container">
                    <a href="#" class="border-button bg-yellow">Learn more</a>
                </div>
            </div>

            <div class="column">
                <font-awesome-icon class="icon" :icon="['fas', 'seedling']" />
                <h3>Farming</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="button-container">
                    <a href="#" class="border-button bg-yellow">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.bg-image {
    height: 700px;
    background-image: url('../../public/HelloIMG1669149393797.jpeg');
    background-size: cover;
    background-position: center;
}

.content-section {
    color: #fff;
    text-align: center;
    padding: 20px;
}

.title-with-border {
    border-bottom: 2px solid #FEC96B;
    max-width: 10%;
    /* Imposta la larghezza massima del titolo */
    margin: 0 auto;
    /* Centra il titolo nel contenitore */
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 100px;
    text-transform: uppercase;
    white-space: nowrap;
}

.paragraph {
    margin-bottom: 20px;
}

.columns {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.column {
    flex: 1;
    text-align: center;
    padding: 80px;
    margin: 0 10px;
    color: white;
}

.column .icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #FEC96B;
}

h3 {
    padding: 10px;
}

.button-container {
    margin-top: 40px;
}

.border-button {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
    background-color: #FEC96B;
}
</style>