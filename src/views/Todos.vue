<template>
    <main id="todos">
        <header>
            <h1>TEFLON</h1>
            <p>När det har svårt att fastna...</p>
        </header>
        <section class="content">
            <todo />
        </section>
        <footer>
            <a href="#" class="btn">Slide to add new</a>
        </footer>
    </main>
</template>

<script>

import todo from '@/components/Todo';

export default {
    name: 'todos',
    components: {
        todo
    }
}
</script>

<style lang="scss">

    #todos {

        header {

            h1 {
                margin: 0;
                padding: 0;
                font-weight: 700;
            }

            p {
                margin: 0;
                font-style: italic;
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
