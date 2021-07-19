<script>
    import axios from 'axios';
    var yy = [] ;
    function getData(){axios.get('https://spreadsheets.google.com/feeds/list/1Kl8XDBzBoKJat-a7WE-KizFkpdDsqyafDOOdC357T18/od6/public/values?alt=json')
                        .then(function (response) {  yy = response.data.feed.entry ; console.log(yy) ; })
                        }
    getData();
</script>

<style>
    .aa{
        margin-right: 20px;
        background-color: #ade8f4;
        margin-bottom: 20px;
    }
  
    .bb{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .cc{
        text-align: center;
        font-weight: bolder;
    }
    .dd{
        display: flex;
        justify-content: center;
    }
    .ee{
       text-align: end;
    }
    .ff{
        font-weight: bolder;
    }
    .gg{
        margin-bottom: 10px;
    }
    .zz{
        width: 300px;
        height: 300px;
    }
    .jj{
        text-align: center;
        font-size: 2.5rem;
        margin-top: 110px;
        color: #0081a7;
        font-weight: bold;
        margin-bottom: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>

<h1 class="jj">Pedal Bins</h1>


<div class="bb">

	{#each yy as item}
     <div class="aa w3-card-4">
       <img src="https://res.cloudinary.com/kanik/image/upload/v1626674807/Bawana/foot-pedal-dustbin-500x500_xexwit.jpg" alt="Alps" class="zz">
       <div class="w3-container w3-center">
        <h2 class="cc">{item.gsx$product.$t}</h2>
        <div class="dd">
  <table class="w3-table w3-border gg">
   <tr><td style="width:30%" class="ff">Diameter</td><td class="ee ff"> {item.gsx$diameterinch.$t} Inch</td></tr>
  <tr><td style="width:30%" class="ff">Height</td><td class="ee ff"> {item.gsx$heightinch.$t} Inch</td></tr>
  <tr><td class="ff">Width</td>    <td class="ee ff"> {item.gsx$widthinch.$t} Inch</td></tr>
  <tr><td class="ff">Thickness</td>    <td class="ee ff"> {item.gsx$thicknessmm.$t} mm</td></tr>
  <tr><td class="ff">Circle</td>     <td class="ee ff"> {item.gsx$basecircleinch.$t} Inch</td></tr>
  <tr><td class="ff">Weight</td>    <td class="ee ff"> {item.gsx$weightkg.$t} Kg</td></tr>
  </table>
  </div>
      </div>
   </div> 
	{/each}
    </div>


