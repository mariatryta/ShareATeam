<template>
  <div class="employees">
    <h3>Pick the team for your project</h3>
    <p>Pick your team by clicking on the + button. Don't worry, you can always access or change your team in the Your Team tab. You can also generate a link to share it with your friends or team!</p>
     <div class="cards flex">
        <div v-for="(employee, idx) in employees" :key="idx" class="card">
                <div class="thumbnail"><img :src="employee.data.img" alt=""></div>
                <div class="card-content"> 
                    <p><b>{{employee.data.role}}</b></p>
                    <h3>{{ employee.data.first }} {{employee.data.last}}</h3>
                    <p>{{employee.data.quote}}</p>
                    <button v-on:click="addToTeam(employee,$event)">+</button>
                </div> 
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    employees(){
        return this.$store.state.employees;
    },
  },
  
  methods: {
      addToTeam(employee,event){
          this.$store.dispatch('addMembertoTeam', employee)
          event.target.textContent = '✔';
      }
  },
}
</script>
<style lang="scss" scoped>
.employees{
    p{
        width:80%;
        margin: auto;
    
    }
    .flex{
        display: grid;
        grid-template-columns: repeat(3, 280px);
        justify-content: space-evenly;
        width: 80%;
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
                    margin: 0;                }
                p{
                    font-size:0.8em; 
                    padding: 1.5em 0; 
                };
                button{
                    border-radius: 30px;
                    background-color:rgb(133, 216, 170);
                    border:none;
                    font-size: 2em;
                    padding: 0.2em 0.5em;
                    position: absolute;
                    bottom: -1em;
                    left: 40%;
                    color:#fff;
                    outline: none;
                    &:active{
                        outline:none;
                        background-color:rgb(20, 32, 25);
                    }
                }
                
            }
            
        }
    }
}
</style>

    
    


