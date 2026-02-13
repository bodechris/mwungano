import PageLayoutV0 from '@/components/page-layout-v0/PageLayoutV0';
import TeamsDisplayV0 from '@/components/teams-display/TeamsDisplayV0';
import React from 'react'

function page() {

  const teamMembers = [
    {
      name: "Sophie Masipa",
      role: "CEO & Account Director",
      bio: ["Sophie Masipa is the founder and CEO of Mwungano, a Black woman-led pan-African communications consultancy operating across Anglophone, Francophone, and Lusophone markets.", "With deep experience in reputation strategy, ESG advisory, and stakeholder engagement, Sophie has advised organisations across financial services, energy, mining, telecoms, government, FMCG, and foundations. She is widely respected for her strategic insight, executive counsel, and commitment to purpose-led communications.", "Under her leadership, Mwungano has evolved into a unified consultancy integrating ESG, sports, and AI communications capabilities across Africa and beyond."],
      image: ["/images/sophie-1.webp", "/images/sophie-2.webp"]
    },
    {
      name: "Kamogelo Mogwe",
      role: "Client Services Director",
      bio: ["Kamogelo leads client services, ensuring seamless strategy execution and delivery excellence across engagements. She works closely with executive teams to align communications objectives with measurable outcomes, ensuring consistency across stakeholder touchpoints.", "Her expertise spans stakeholder engagement, integrated communications programmes, and multi-market coordination across African regions."],
      image: ["/images/kamo-1.webp", "/images/kamo-2.webp"]
    },
    {
      name: "Adebissi Djogan",
      role: "Senior Partner – Government Affairs & Francophone Advisor",
      bio: ["Adebissi provides strategic public affairs counsel and advisory across Francophone markets. With strong government affairs expertise, she supports organisations navigating policy environments, regulatory landscapes, and stakeholder relationships across diverse African jurisdictions.", "Her insight ensures Mwungano’s clients engage credibly and effectively within public sector ecosystems."],
      image: ["/images/adebissi-1.webp", "/images/adebissi-2.webp"]
    },
    {
      name: "Stanley Austin",
      role: "Chief Content Officer & Europe Advisor",
      bio: ["Stanley leads content strategy and executive thought leadership initiatives, supporting clients across Africa and Europe. His expertise lies in crafting authoritative narratives, shaping executive voice, and developing high-level event and roundtable platforms.", "He plays a central role in sustainable finance dialogue, strategic messaging, and cross-border positioning."],
      image: ["/images/austin-1.webp", "/images/austin-2.webp"]
    },
    {
      name: "Lunga Nene",
      role: "Communications & Media Lead",
      bio: ["Lunga oversees media engagement, narrative development, and strategic messaging. He works closely with journalists, media platforms, and industry forums to ensure clients are positioned with clarity and authority.", "His focus is on proactive media strategy, reputation building, and crisis responsiveness."],
      image: ["/images/lunga-1.webp", "/images/lunga-2.webp"]
    },
    {
      name: "Ayanda Itsweng",
      role: "Events & Stakeholder Management",
      bio: ["Ayanda leads stakeholder engagement and event management initiatives, ensuring high-impact experiences that align strategic messaging with audience engagement.", "She supports roundtables, policy dialogues, ESG forums, and executive engagements across sectors."],
      image: ["/images/ayanda-1.webp", "/images/ayanda-2.webp"]
    },
  ];

  return (
    <>
      <PageLayoutV0>
        <div className="sect-page-header">
          <h1>Team</h1>
          <h2>An Agile Pan‑African Team</h2>
          <p>Mwungano brings together a multicultural, diverse network of specialists drawn from our founding company, Fikira Consulting, and our broader partner ecosystem.</p>
        </div>
      </PageLayoutV0>

      <PageLayoutV0>
        <TeamsDisplayV0 teamMembers={teamMembers} />
      </PageLayoutV0>
      
      <PageLayoutV0>
        <div className="sect page-sect-1">
          <div className="sub-sect media-box">
            <img src="/images/teams-2.webp" alt="Mwungano Team" width={1000} height={500} />
          </div>
          <div className="sub-sect sect-box">
            <h3>Our Team is Your Team</h3>
            <p>Our team is your team. We work as an extension of your organisation, partnering with your internal teams and external stakeholders to deliver strategies and narratives that are credible, compelling, and built to last.</p>
          </div>
        </div>
      </PageLayoutV0>    
    </>
  )
}

export default page;