<script>
  import { RouterView, Link } from '@bjornlu/svelte-router';
  import axios from 'axios';
  import './w3.css';
  import './bootstrap.min.css';
</script>

 <style>
.aa{
  background-color: #0081a7;
  height: 40px;
}
.bb{
  background-color: #0081a7 ;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cc{
  text-align: center;
}
.dd{
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 font-weight: bolder;
 font-size: 2rem;
 color: #fdfcdc;
}
a{
  text-decoration: none;
  color: #fdfcdc;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  font-size: 1.2rem;
}
.uu{
  height: 70%;
  margin-right: 1px;
}
.ff{
  margin-left: 10px;
}
.ii{
  margin-right: 10px;
}
 </style>

  <div>
  <div class="bb w3-top">
    <button class="btn btn-outline-dark uu ff"> <a href="/">Pedal Bins</a></button>
    <button class="btn btn-outline-dark uu"> <a href="/plain">Plain Bins</a></button>
    <button class="btn btn-outline-dark uu"> <a href="/pawali">Pawalis</a></button>
    <button class="btn btn-outline-dark uu"> <a href="/ration">Rashan Dabas</a></button>
    <button class="btn btn-outline-dark uu ii"> <a href="/balti">Buckets</a></button>
  </div>
  <RouterView />
  <div class="aa cc"><span class="dd">G & G Steels</span></div>
  </div>
  