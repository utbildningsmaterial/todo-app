<template>
    <main id="new-todo">
        <header>

        </header>
        <section class="content">
            <input type="text" v-model="newTodo">
        </section>
        <footer>
            <a href="#" class="btn">Add new Todo</a>
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
                border: none;
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
