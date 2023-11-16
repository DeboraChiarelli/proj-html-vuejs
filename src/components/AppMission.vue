<script></script>

<template>
    <div class="content-section">
        <div class="white-section">
            <!-- Contenuto della parte bianca -->
            <h2 class="title-with-border">Every moment counts</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fuga, repellat quod sunt necessitatibus
                suscipit, sapiente perspiciatis adipisci animi architecto, aperiam consectetur! Temporibus facere, quos
                ratione sequi voluptas asperiores quis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fuga, repellat quod sunt necessitatibus
                suscipit, sapiente perspiciatis adipisci animi architecto, aperiam consectetur! Temporibus facere, quos
                ratione sequi voluptas asperiores quis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fuga, repellat quod sunt necessitatibus
                suscipit, sapiente perspiciatis adipisci animi architecto, aperiam consectetur! Temporibus facere, quos
                ratione sequi voluptas asperiores quis?</p>
            <div class="button-container">
                <a href="#" class="border-button bg-yellow">Our mission</a>
            </div>
        </div>
        <div class="red-section">
            <!-- Contenuto della parte rossa -->
            <div class="donations">
                <font-awesome-icon class="icon" :icon="['far', 'heart']" />
                <span>2032</span>
            </div>
            <p>Volunteers Worldwide</p>
            <div class="donations">
                <font-awesome-icon class="icon" :icon="['fas', 'earth-americas']" />
                <span>132</span>
            </div>
            <p>Active projects</p>
            <div class="donations">
                <font-awesome-icon class=icon :icon="['fas', 'dollar-sign']" />
                <span>3,8M</span>
            </div>
            <p>Donated</p>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
h2 {
    text-transform: uppercase;
}

.content-section {
    display: flex;
    height: 100%;
}

.white-section {
    flex: 2;
    background-color: #fff;
    padding: 50px;
}

.red-section {
    flex: 1;
    background-color: #E2615F;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-with-border {
    border-bottom: 2px solid #FEC96B;
    padding-bottom: 20px;
    /* Distanza dal testo al bordo */
    margin-bottom: 40px;
    width: 40%;
    /* Larghezza del bordo rispetto al contenuto */
}

p {
    margin-top: 40px;
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

.donations {
    display: flex;
    justify-content: center;
    font-size: 40px;
    margin-top: 40px;
}

.icon {
    margin-right: 10px;
}

.red-section p {
    text-align: center;
    margin-top: 5px;
}
</style>