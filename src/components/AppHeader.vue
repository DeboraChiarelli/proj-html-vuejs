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
    <header>
        <div class="header-container">
            <div class="logo">
                <img :src="logo.src" :alt="logo.alt">
                <span>{{ logo.text }}</span>
            </div>
            <nav>
                <ul>
                    <li v-for="(menuItem, index) in menuItems" :key="index">
                        <a :href="menuItem.link">{{ menuItem.text }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    max-width: 150px;
    height: auto;
    margin-right: 10px;
    margin-left: 50px;

}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin-right: 50px;
}

a {
    text-decoration: none;
    color: #000;
}
</style>