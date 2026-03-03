
import HeroSliderV0 from "@/components/hero-slider-v0/HeroSliderV0";
import PageLayoutV0 from "@/components/page-layout-v0/PageLayoutV0";
import TransitionLink from "@/components/transition/TransitionLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <HeroSliderV0 /> 

        <PageLayoutV0>
          <div className="sect page-sect-2 reverse">
            <div className="sub-sect">
              <h2>A Pan-African Consultancy Built on Alliance</h2>
              <p>Derived from the Swahili word for Alliance, Mwungano brings together strategic communications, and deep African market insight to help organisations build reputations that endure. We operate through a trusted network across Africa and globally, enabling us to deliver locally grounded, internationally credible work.</p>
              <TransitionLink href="/about" className="cta-with-shadow-1">About Mwungano</TransitionLink>
            </div>          
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/african-corporate-leaders-2.webp" alt="About Mwungano ESG" width={1000} height={500} />
              </div>
          </div>
          </div>
        </PageLayoutV0>

        <PageLayoutV0>
          <div className="sect page-sect-2 reverse">
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/esg-communications-3.webp" alt="ESG Communications" width={1000} height={500} />
              </div>
            </div>
            <div className="sub-sect">
              <h2>Integrated Communications That Shape Perception</h2>
              <p>From brand and communications strategy to media relations, crisis communications,and investor communications, we design integrated solutions that deliver clarity, credibility, and impact at every stakeholder touchpoint.</p>
              <TransitionLink href="/services" className="cta-with-shadow-1">Explore Our Services</TransitionLink>
            </div> 
          </div>
        </PageLayoutV0>

        <PageLayoutV0>
          <div className="sect page-sect-2">
            <div className="header-sect-1">
              <h2>Purpose-led Communications</h2>
              <p>Corporate purpose is about both the numbers and the narrative. We help clients to succeed with outstanding communications advice and 
  expertise, articulated with  purpose, authentically and consistently to engage stakeholders to achieve greater impact. We do it with 
  excellence, understanding and integrity. Our integrated communications expertise is grounded in our core values and singular service ethos.</p>
            </div>
          </div>
          <div className="sect page-sect-2 content-grid-1">        
            <div className="sub-sect">
              <h3>Excellence</h3>
              <div className="img-media-1">
                <Image src="/images/teams-2.webp" alt="Excellence" width={1000} height={500} />
              </div>
              <div className="content">
                <p>High-quality strategic  thinking, passion, creativity and insight to deliver all of our communications and digital marketing programmes.</p>
                <p>We maintain a relentless focus on delivering the best possible results for our clients,rooted in data and benchmarked  against agreed objectives and KPIs.</p>
                <p>The relationships strength across all  forms of media is underpinned by the au-  thoritative and intelligent content we help  clients deliver</p>
              </div>
            </div>
            <div className="sub-sect">
              <h3>Understanding</h3>
              <div className="img-media-1">
                <Image src="/images/slide-4.webp" alt="Understanding" width={1000} height={500} />
              </div>
              <div className="content">
                <p>Commitment to understand our clients’ business models thoroughly to ensure our work is as effective and powerful as possible.</p>
                <p>Empathy and the care displayed by our team ensures we have an in-depth comprehension of your goals</p>
                <p>The relationships with our clients, who we genuinely see as our partners, is at the centre of all that we do.</p>
              </div>
            </div>
            <div className="sub-sect">
              <h3>Integrity</h3>
              <div className="img-media-1">
                <Image src="/images/contact-us-1.webp" alt="Integrity" width={1000} height={500} />
              </div>
              <div className="content">
                <p>Commitment to helping our partners achieve their long-term goals.</p>
                <p>Frankness and independence of mind are part of how we pursue the most positive outcomes for your business.</p>
                <p>Our resolve is to always speak truthfully – to give honest advice even when it means difficult decisions have to be taken to ensure key goals are achieved.</p>
              </div>
            </div>
          </div>
        </PageLayoutV0>


        {/* <PageLayoutV0>
          <div className="sect page-sect-2">
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/partner-with-us.webp" alt="Partner with Mwungano" width={1000} height={500} />
              </div>
            </div>
            <div className="sub-sect">
              <h2>Strategy. Narrative. Confidence in the room.</h2>
              <p>Our approach is rooted in partnership. We immerse ourselves in your business, align with your leadership, and work alongside your teams to deliver strategies and narratives that stand up to scrutiny and change.</p>
              <TransitionLink href="/partner-with-us" className="cta-with-shadow-1">How We Partner</TransitionLink>
            </div>
          </div>
        </PageLayoutV0> */}

        {/* <PageLayoutV0>
          <div className="sect page-sect-2">
            <div className="sub-sect">
              <h2>Local Insight Across Africa. Global Reach Beyond It.</h2>
              <p>Headquartered in Johannesburg with satellite outreach in the UK, Mwungano operates across Anglophone, Francophone, and Lusophone markets — helping organisations navigate complexity and scale their influence across borders.</p>
              <TransitionLink href="/about" className="cta-with-shadow-1">View Our Footprint</TransitionLink>
            </div>
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/outreach-1.webp" alt="Mwungano outreach" width={1000} height={500} />
              </div>
            </div>
          </div>
        </PageLayoutV0> */}
    </>
  );
}
