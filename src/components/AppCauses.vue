<script></script>
<template>
    <div class="bg-image">
        <div class="content-section">
            <h2 class="title-with-border">Recent causes</h2>
            <p>We run projects in over 30 countries in 5 continents </p>
        </div>
        <div class="columns">
            <div class="column">
                <img src="../../public/HelloIMG1669149317319.jpeg">
            </div>

            <div class="column">
                <img src="../../public/HelloIMG1669149318263.jpeg">
            </div>

            <div class="column">
                <img src="../../public/HelloIMG1669149319450.jpeg">
            </div>

            <div class="column">
                <img src="../../public/HelloIMG1669149321401.jpeg">
            </div>
        </div>
    </div>
    <section class="all-causes">
        <p class="paragraph">View all our causes</p>
    </section>
</template>


<style lang="scss" scoped>
.bg-image {
    min-height: 590px;
    background-size: cover;
    background-position: center;
}

.content-section {
    color: black;
    text-align: center;
    padding: 20px;
}

.title-with-border {
    border-bottom: 2px solid #FEC96B;
    max-width: 15%;
    /* Imposta la larghezza massima del titolo */
    margin: 0 auto;
    /* Centra il titolo nel contenitore */
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 100px;
    text-transform: uppercase;
    white-space: nowrap;
}


.columns {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    padding: 0 100px;
}

.column {
    flex: 1;
    text-align: center;
    padding: 10px;
    color: white;
}


h3 {
    padding: 10px;
}

.all-causes {
    min-height: 100px;
    background-color: #ED6967;
    display: flex;
    justify-content: center;
    align-items: center;
}

.paragraph {
    color: white;
    text-transform: uppercase;
    text-align: center;
}
</style>