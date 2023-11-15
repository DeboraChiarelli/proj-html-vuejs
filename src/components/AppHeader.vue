<script>

export default {
    name: 'AppHeader',
    props: ['logo', 'menuItems'],
    mounted() {
        console.log('menuItems:', this.menuItems);
    }
};

</script>
<template>
    <div class="bg-image">
        <header>
            <div class="header-container">
                <div class="logo">
                    <img :src="logo.src" :alt="logo.alt">
                </div>
                <nav>
                    <ul>
                        <li v-for="(menuItem, index) in menuItems" :key="index"
                            :class="{ 'highlighted': menuItem.text === 'Donate' }">
                            <a :href="menuItem.link">{{ menuItem.text }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <section class="hero">
            <!-- Contenuto dell'hero -->
            <h1 class="hero-title">Make a difference</h1>
            <p>As long as poverty, injustice and inequality persist, none of us can truly rest.</p>
            <div class="button-container">
                <a href="#" class="border-button">Our mission</a>
                <a href="#" class="border-button yellow-border-button">Donate now</a>
            </div>
        </section>

    </div>
</template>
<style lang="scss" scoped>
.bg-image {
    height: 800px;
    background-image: url('../../public/HelloIMG1669149393797.jpeg');
    background-size: cover;
    background-position: center;
}

.header-container {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    max-width: 150px;
    height: auto;
    margin-right: 10px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

nav li {
    margin-right: 20px;
}

nav li.highlighted {
    background-color: #FEC96B;
    color: #fff;
    padding: 5px;
}

.hero {

    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.hero-title {
    margin-bottom: 20px;
}

.button-container {
    margin-top: 20px;
}

.border-button {
    display: inline-block;
    padding: 10px 20px;
    margin: 0 10px;
    border: 2px solid #fff;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.yellow-border-button {
    background-color: transparent;
    color: #FEC96B;
    border-color: #FEC96B;
}

.border-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>