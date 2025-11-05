import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />

      {/* ========== ⬇️ AI 시뮬레이터 링크 섹션 ⬇️ ========== */}
      <div style={{ textAlign: 'center', margin: '40px auto', padding: '0 20px', maxWidth: '600px' }}>
        
        {/* 구분선 */}
        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '40px 0' }} />

        <h2>🤖 AI 부동산 가치평가 시뮬레이터</h2>
        
        <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
          '부동산가격결정요인' 보고서를 기반으로, 
          Next.js(React)를 이용해 인터랙티브 시뮬레이터를 구현했습니다.
          아래 버튼을 클릭해 확인해 보세요.
        </p>
        
        {/* globals.css에 .download-button 스타일이 적용됩니다 */}
        <a href="/simulator" className="download-button">
          시뮬레이터 보러가기
        </a>
      </div>
      {/* ========== ⬆️ AI 시뮬레이터 링크 섹션 ⬆️ ========== */}

      <Contact />
      <Footer />
    </main>
  )
}