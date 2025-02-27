import Hero from "@/components/hero"
import Features from "@/components/features"
import Tools from "@/components/tools"
import UseCases from "@/components/use-cases"
import Technology from "@/components/technology"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="home">
        <Hero />
      </section>
      <section id="features" className="py-20" id="features">
        <Features />
      </section>
      <section id="tools" className="py-20 bg-slate-950" id="tools">
        <Tools />
      </section>
      <section id="use-cases" className="py-20 bg-slate-950" id="use-cases">
        <UseCases />
      </section>
      <section id="technology" className="py-20" id="technology">
        <Technology />
      </section>
      <section id="contact" className="py-20 bg-slate-950" id="contact">
        <Contact />
      </section>
    </div>
  )
}
