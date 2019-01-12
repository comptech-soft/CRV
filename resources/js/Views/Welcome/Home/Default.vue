<template>
    <div>
        I am the Home page <br/>

        User: {{ $app.user }}<br/>
                    Role: {{ $app.role }}
                    
    </div>
</template>

<script>

    export default {
    
        name: 'content-home'
    }
</script>
