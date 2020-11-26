import React, { Component } from 'react'
import ch1 from '../city/chef1.jpg'
import ch2 from '../city/chef2.jpg'
import ch3 from '../city/chef3.jpg'
import ch4 from '../city/chef4.jpg'

import h1 from '../city/h1.jpg'
import h3 from '../city/h3.jpg'
import h4 from '../city/h4.jpg'
import h5 from '../city/h5.jpg'

import kech1 from '../city/kech1.jpg'
import kech2 from '../city/kech2.jpg'
import kech3 from '../city/kech3.jpg'
import kech5 from '../city/kech5.jpg'
import { Link } from 'react-router-dom'
 class Covoiturage extends Component {
    render() {
        return (
           
<div class="CitySlide_Body">
	<Link to="/leads/CovCityPostsC">
	<div class="CitySlide-Container">
	<div class="city_image">
		
		<span>CHEFCHAOUEN
			<p>
			the gorgeous city in the northwestern.<br/>
			the city is known as most peaceful and safest place in morocco
			enjoy the small fortress town
		</p>
		</span>
		
	</div>
	
	<div  class="slider-Container">
		<section>
			<div>
				<img src={ch1}/>
				
			</div>
			<div>
				<img src={ch2}/>
				
			</div>
			<div>
				<img src={ch3}/>
				
			</div>
			<div>
				<img src={ch4}/>
				
			</div>
			<div>
				<img src={ch1}/>
				
			</div>
			
		</section>
	</div>
	</div>
	</Link>
	<Link to="/leads/CovCityPostsM">
	<div class="CitySlide-Container container2">
	<div class="city_image">
		
		
		
		<span>MARRAKECH
			<p>
			the fantastic red city<br/>
			no trip to morocco is completed without visiting this city <br/>
			take your bags and see you there
			</p>
		</span>
		
	
	</div>
	
	<div class="slider-Container ">
		<section>
			<div>
				<img src={kech1}/>
				
			</div>
			<div>
				<img src={kech3}/>
				
			</div>
			<div>
				<img src={kech2}/>
				
			</div>
			<div>
				<img src={kech5}/>
				
			</div>
			<div>
				<img src={kech1}/>
				
			</div>
			
		</section>
	</div>
	</div>
	</Link>
	<Link to="/leads/CovCityPostsC">
	<div class="CitySlide-Container">
	<div class="city_image">
		
		<span>AL-HOCEIMA
			<p>
			the rif land al-hoceima	the city that attracts travels and young tourists for quiet time at the beach<br/>	relax and discover the charming rif land
		</p>
		</span>
		
	</div>
	
	<div  class="slider-Container">
		<section>
			<div>
				<img src={h1}/>
				
			</div>
			<div>
				<img src={h3}/>
				
			</div>
			<div>
				<img src={h4}/>
				
			</div>
			<div>
				<img src={h5}/>
				
			</div>
			<div>
				<img src={h1}/>
				
			</div>
			
		</section>
	</div>
	</div>
	</Link>
	<Link to="/leads/CovCityPostsM">
	<div class="CitySlide-Container container2">
	<div class="city_image">
		
		
		
		<span>MARRAKECH
			<p>
			the fantastic red city<br/>
			no trip to morocco is completed without visiting this city <br/>
			take your bags and see you there
			</p>
		</span>
		
	
	</div>
	
	<div class="slider-Container ">
		<section>
			<div>
				<img src={kech1}/>
				
			</div>
			<div>
				<img src={kech3}/>
				
			</div>
			<div>
				<img src={kech2}/>
				
			</div>
			<div>
				<img src={kech5}/>
				
			</div>
			<div>
				<img src={kech1}/>
				
			</div>
			
		</section>
	</div>
	</div>
	</Link>
	</div>
	

        )
    }
}
export default Covoiturage;