
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
              <p>Derived from the Swahili word for Alliance, Mwungano brings together strategic communications, ESG expertise, and deep African market insight to help organisations build reputations that endure. We operate through a trusted network across Africa and globally, enabling us to deliver locally grounded, internationally credible work.</p>
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
              <p>From brand and communications strategy to media relations, crisis communications, ESG storytelling, and investor communications, we design integrated solutions that deliver clarity, credibility, and impact at every stakeholder touchpoint.</p>
              <TransitionLink href="/services" className="cta-with-shadow-1">Explore Our Services</TransitionLink>
            </div> 
          </div>
        </PageLayoutV0>

        <PageLayoutV0>
          <div className="sect page-sect-2">
            <div className="sub-sect">
              <h2>Purpose-Led. ESG-Focused. Impact-Driven.</h2>
              <p>Corporate purpose is more than reporting — it is how organisations act, communicate, and lead. We help clients articulate credible ESG and sustainability narratives that align performance, responsibility, and long-term value creation.</p>
              <TransitionLink href="/about" className="cta-with-shadow-1">Our ESG & Sustainability Approach</TransitionLink>
            </div>          
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/esg-focus-1.webp" alt="ESG Focus" width={1000} height={500} />
              </div>
            </div>
          </div>
        </PageLayoutV0>


        <PageLayoutV0>
          <div className="sect page-sect-2">
            <div className="sub-sect">
              <div className="media-img-1">
                <Image src="/images/partner-with-us.webp" alt="Partner with Mwungano" width={1000} height={500} />
              </div>
            </div>
            <div className="sub-sect">
              <h2>We Work as an Extension of Your Team</h2>
              <p>Our approach is rooted in partnership. We immerse ourselves in your business, align with your leadership, and work alongside your teams to deliver strategies and narratives that stand up to scrutiny and change.</p>
              <TransitionLink href="/partner-with-us" className="cta-with-shadow-1">How We Partner</TransitionLink>
            </div>
          </div>
        </PageLayoutV0>

        <PageLayoutV0>
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
        </PageLayoutV0>
    </>
  );
}
