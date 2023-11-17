<template>
    <div class="bg-image">
        <div class="content-section">
            <h2 class="title-with-border">Change a life today</h2>
            <p>As long as poverty, injustice and inequality persist, none of us can truly rest. It doesn't take much to
                change a life. <br>Get in touch today and start making the difference</p>
            <br>
            <div class="button-container">
                <a href="#" class="border-button">Volunteers</a>
                <a href="#" class="border-button">Donate now</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-image {
    min-height: 500px;
    background-image: url('../../public/HelloIMG1669149393797.jpeg');
    background-size: cover;
    background-position: center;
}

.content-section {
    color: white;
    text-align: center;
    padding: 20px;
}

.title-with-border {
    border-bottom: 2px solid #FEC96B;
    max-width: 25%;
    margin: 0 auto;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 100px;
    text-transform: uppercase;
    white-space: nowrap;
}

.p {
    margin-bottom: 20px;
}

.button-container {
    margin-top: 20px;
    text-align: center;
    /* Aggiunto per centrare i bottoni */
}

.border-button {
    display: inline-block;
    padding: 10px 20px;
    margin: 0 10px;
    border: 2px solid #fff;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
}

.border-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>