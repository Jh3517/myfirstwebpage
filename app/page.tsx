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

      {/* ========== ⬇️ 프로젝트 선택 그리드 섹션 ⬇️ ========== */}
      <div className="project-selection-grid">

        {/* 카드 1: AI 시뮬레이터 */}
        <div className="selection-card">
          <h2>🤖 AI 부동산 가치평가</h2>
          <p>
            '부동산가격결정요인' 보고서를 기반으로,
            Next.js(React)를 이용해 구현한
            <strong> 인터랙티브 시뮬레이터</strong>입니다.
          </p>
          <a href="/simulator" className="download-button">
            시뮬레이터 보러가기
          </a>
        </div>

        {/* 카드 2: 주택금융 차트 */}
        <div className="selection-card">
          <h2>📈 주택금융 시계열 분석</h2>
          <p>
            '주택금융과 금리의 관계' 보고서의 <strong>시차상관분석</strong>을
            Chart.js로 구현한 <strong>인터랙티브 차트</strong>입니다.
          </p>
          <a href="/finance" className="download-button">
            차트 보러가기
          </a>
        </div>

      </div>
      {/* ========== ⬆️ 프로젝트 선택 그리드 섹션 ⬆️ ========== */}

      <Contact />
      <Footer />
    </main>
  )
}