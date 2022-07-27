import React, { useState} from 'react'

const Accordion = () => {
  const [state, setState] = useState(false)

  return (
    <div>
        <div className="accord-design">
                <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Bookmark?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusantium earum optio quas delectus eveniet! Ab illum minus labore iure earum nemo magnam, praesentium fugiat quis sequi, esse ratione sint.</div>
            </div>
          </div>
          {state && <MoreDetails/>}
          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How can i request a new browser?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">iusto saepe at recusandae nobis numquam ad.
              Omnis beatae culpa doloribus quas voluptas consequuntur suscipit, harum perspiciatis ipsam? Autem minus magni provident id, voluptatibus rem nobis ea inventore corrupti dolores, suscipit aliquid beatae temporibus quidem impedit. Dolor.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Is there a mobile app?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">error magnam mollitia animi fuga at dolore repellendus nobis aliquam fugit quidem commodi perferendis, eaque ex iste corporis, voluptatibus, nemo impedit soluta? Quod?
              Natus porro expedita at quidem tenetur laborum, accusantium aliquam architecto ducimus corrupti! Odio, saepe commodi. Quisquam, minus aut velit explicabo, facilis maiores laboriosam odit accusamus culpa eaque tenetur hic totam!</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                What about other Chromium browsers?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">harum perspiciatis ipsam? Autem minus magni provident id, voluptatibus rem nobis ea inventore corrupti dolores, suscipit aliquid beatae temporibus quidem impedit. Dolor.</div>
            </div>
          </div> */}
        </div>

                <section className='infoo'><button onClick={()=>{setState(!state)}} className='Info-btn'>{state? 'Less Info':'More Info'}</button></section>
        </div>
        
    </div>
  )
}



const MoreDetails =()=>{
  return(
    <div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How can i request a new browser?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">iusto saepe at recusandae nobis numquam ad.
              Omnis beatae culpa doloribus quas voluptas consequuntur suscipit, harum perspiciatis ipsam? Autem minus magni provident id, voluptatibus rem nobis ea inventore corrupti dolores, suscipit aliquid beatae temporibus quidem impedit. Dolor.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Is there a mobile app?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">error magnam mollitia animi fuga at dolore repellendus nobis aliquam fugit quidem commodi perferendis, eaque ex iste corporis, voluptatibus, nemo impedit soluta? Quod?
              Natus porro expedita at quidem tenetur laborum, accusantium aliquam architecto ducimus corrupti! Odio, saepe commodi. Quisquam, minus aut velit explicabo, facilis maiores laboriosam odit accusamus culpa eaque tenetur hic totam!</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                What about other Chromium browsers?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">harum perspiciatis ipsam? Autem minus magni provident id, voluptatibus rem nobis ea inventore corrupti dolores, suscipit aliquid beatae temporibus quidem impedit. Dolor.</div>
            </div>
          </div>
    </div>
  )
}
export default Accordion