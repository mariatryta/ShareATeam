<template>
<div class="team">
    <div class="cards flex">
        <div v-for="(member, idx) in team" :key="idx" class="card">
            <div class="thumbnail"><img :src="member.img" alt=""></div>
            <div class="card-content">
                <h3>{{member.first}} {{member.last}}</h3>
                <p><b>{{member.role}}</b></p>
                <p>{{member.quote}}</p>
                <button v-on:click="deleteFromTeam(member)">-</button>
            </div>
        </div>
    </div>
    <input v-model="generatedLink" type="text" id='link'> 
    <button  v-on:click='generateUrl' id="generatelink">Generate Url</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            generatedLink:''
        }
    },
    computed: {
        team(){
             return  this.$store.state.team;   
        }
    },
    methods: {
        generateUrl: function(){
            this.generatedLink =window.location.origin +'/sharing/'+ this.$store.state.currentUser.uid; 
        
        },
        deleteFromTeam: function(member){
            this.$store.dispatch('removeMemberFromTeam', member)
        }
    },
};
</script>

<style lang="scss" scoped>
 .flex{
        display: grid;
        grid-template-columns: repeat(3, 280px);
        justify-content: space-evenly;
        width: 75%;
        margin: auto;
        grid-gap: 3em;
        margin: 2em auto 5em ;
        .card{
            width: 250px;
            height:380px;
            background: rgb(255, 255, 255);
            box-shadow: 
                0 4px 7px rgba(0,0,0, 0.12),
                0 4px 6px rgba(0,0,0, 0.24); 
            position: relative;     
            .thumbnail{
                width: 100%;
                height: 210px;
                overflow: hidden;
                img{
                width: 100%;
                height: auto;
                }
            }
            .card-content{
                padding: 0 1em;
                text-align: center;
                h3{
                    color:rgb(133, 216, 170);
                }
                p{
                  font-size:0.8em;  
                };
                button{
                    border-radius: 100%;
                    background-color:#F29675;
                    border:none;
                    font-size: 2em;
                    padding: 0.2em 0.6em;
                    position: absolute;
                    bottom: -1em;
                    left: 40%;
                    color:#fff;
                    &:focus{
                        outline:none;
                        background-color:rgb(113, 179, 142)
                    }
                }
                
            }
            
        }
    }
#link {
    margin:auto;
    padding: 1em;
    margin-bottom:1em;
    background-color:rgb(220, 236, 230);
    border: none;
}
#generatelink{
    margin: 20px;
    background-color: #F29675;
    display: inline-block;
    width: 10%;
    padding: 0.8em 1.2em;
    border-radius: 45px;
    border: none;
    font-weight: bold;
    color: rgb(58, 58, 58);
}
</style>
     