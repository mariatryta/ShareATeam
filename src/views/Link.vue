<template>
     <div class="cards flex">
        <div v-for="(member, idx) in team" :key="idx" class="card">
                <div class="thumbnail"><img :src="member.img" alt=""></div>
                <div class="card-content"> 
                    <h3>{{member.first}} {{member.last}}</h3>
                    <p><b>{{member.role}}</b></p>
                    <p>{{member.quote}}</p>
                </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'sharing',
  data() {
      return {
          linkId:'',
      }
  },
  computed: {
    team(){
        return  this.$store.state.team;   
    }
  },
  beforeCreate(){
      this.linkId = this.$route.params.id;
      this.$store.dispatch('getTeam',this.linkId);

  }
}
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
                
            }
            
        }
    }
</style>