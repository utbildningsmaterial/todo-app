<template>
    <article class="todo">
        <aside class="done">
            <img src="../assets/check.svg" alt="done">
        </aside>
        <section class="text">
            {{ todo.text }}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todo',
    data(){
        return {
            todo: {
                text: 'Köp bananer',
                done: false
            }
        }
    }
}
</script>

<style lang="scss">

.todo {
    background: rgba($color: #000000, $alpha: .1);
    padding: .25rem;
    display: flex;
    border-radius: 999rem;

    aside {
        background: rgb(56, 180, 128);
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;
    }

    .text {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
    }
}

</style>
