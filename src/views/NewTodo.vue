<template>
    <main id="new-todo">
        <header>

        </header>
        <section class="content">
            <input type="text" v-model="newTodo">
        </section>
        <footer>
            <p>{{ newTodo.length }} / 30 tecken</p>
            <a href="#" class="btn" @click="addTodo">Add new Todo</a>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'newTodo',
    data(){
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo(){

            let todo = {
                done: false,
                text: this.newTodo
            }

            this.$store.commit('newTodo', todo);

            this.newTodo = '';

            this.$store.commit('swipe', 0);

        }
    }
}
</script>

<style lang="scss">

    #new-todo {

        .content {
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                font-size: 1.4rem;
                font-weight: 700;
                border: 1px solid #222;
                appearance: none;
                background: none;
                text-align: center;
                padding: .25rem;

                &:focus {
                    outline: none;
                }
            }

        }

        footer {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            
            a.btn {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #222;
                color: white;
                font-weight: 700;
                text-decoration: none;
                height: 3rem;
                border-radius: 99rem;
            }

        }

    }


</style>
