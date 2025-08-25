import React from 'react'

function Card(props) {
  console.log(props.username);
  return (
    <div class="@container">
       <div className="grid grid-cols-1 @sm:grid-cols-2">
       <img src="https://imgs.search.brave.com/Fc1fL5pfEkeS23wK8AphG5W6cOKPFXbhyKV_0V_odv8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8zMS8xMi8yOC9z/LTEwMTU1NDdfMTI4/MC5qcGc" class="aspect-square @sm:aspect-3/2 object-cover"/>
       <img src="https://imgs.search.brave.com/m1khkFcoIJk1lh_b0X_axZe9y85OOcpU8WoYRCpHXDs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzY1/NTg2MTAyL3N0b2Nr/LXBob3RvLW11bHRp/Y29sb3ItbGV0dGVy/LWxvd2VyY2FzZS1n/bG9zc3ktaXJpZGVz/Y2VudC1sZXR0ZXIt/dGlsZS1iYWNrZ3Jv/dW5kLW1ldGFsbGlj/LWFscGhhYmV0" class="aspect-square @sm:aspect-3/2 object-cover"/>
       <img src="https://imgs.search.brave.com/AGypStfOfwuSsOHrJkNkZPZetBmo6eFM60A-lnoaNHY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjEx/NzM2OTE2L3N0b2Nr/LXBob3RvLWJsYWNr/LWxldHRlci11cHBl/cmNhc2UtcGluay1u/ZW9uLWxpZ2h0LXJl/bmRlci1pc29tZXRy/aWMtZm9udC1pc29s/YXRlZA" class="aspect-square @sm:aspect-3/2 object-cover" />
       </div>
       <h2>I am {props.username} Yadav</h2>
    </div>

  )
}

export default Card;