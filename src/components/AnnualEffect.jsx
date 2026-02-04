import { useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  ComposedChart,
} from "recharts";

// -- DATA --

const marginTimeline = [
  { year: "2024", earlyAdopter: 25.5, industry: 15.2, label: "Pre-AI Baseline" },
  { year: "2025", earlyAdopter: 27.8, industry: 15.5, label: "Pilot Phase" },
  { year: "2026", earlyAdopter: 30.2, industry: 16.1, label: "Rollout Begins" },
  { year: "2027", earlyAdopter: 32.5, industry: 17.8, label: "Peak Advantage" },
  { year: "2028", earlyAdopter: 33.1, industry: 20.5, label: "Competitors Adopt" },
  { year: "2029", earlyAdopter: 32.4, industry: 23.2, label: "Diffusion Accelerates" },
  { year: "2030", earlyAdopter: 30.8, industry: 25.8, label: "Narrowing Gap" },
  { year: "2031", earlyAdopter: 29.5, industry: 27.1, label: "Near Parity" },
  { year: "2032", earlyAdopter: 28.8, industry: 27.8, label: "New Baseline" },
  { year: "2033", earlyAdopter: 28.5, industry: 28.0, label: "Table Stakes" },
];

const spreadData = marginTimeline.map((d) => ({
  ...d,
  spread: +(d.earlyAdopter - d.industry).toFixed(1),
}));

const annualBump = [
  { category: "Labor Savings", shortTerm: 5.2, longTerm: 1.8, icon: "👷" },
  { category: "Waste Reduction", shortTerm: 2.1, longTerm: 0.9, icon: "🗑️" },
  { category: "Throughput Gain", shortTerm: 1.8, longTerm: 1.2, icon: "⚡" },
  { category: "Scheduling AI", shortTerm: 1.4, longTerm: 0.5, icon: "📅" },
  { category: "Price Competition", shortTerm: -0.8, longTerm: -3.2, icon: "📉" },
  { category: "Capex / Maintenance", shortTerm: -1.2, longTerm: -2.4, icon: "🔧" },
  { category: "Wage Pressure", shortTerm: -0.3, longTerm: -1.5, icon: "💰" },
];

const annualNetEffect = annualBump.map((d) => ({
  ...d,
  netShort: d.shortTerm,
  netLong: d.longTerm,
}));

const totalShort = annualBump.reduce((s, d) => s + d.shortTerm, 0);
const totalLong = annualBump.reduce((s, d) => s + d.longTerm, 0);

const techShareHistory = [
  { decade: "1975", tech: 4, energy: 28, financials: 12, industrial: 18, other: 38 },
  { decade: "1985", tech: 9, energy: 18, financials: 14, industrial: 16, other: 43 },
  { decade: "1995", tech: 16, energy: 10, financials: 17, industrial: 12, other: 45 },
  { decade: "2000", tech: 35, energy: 6, financials: 13, industrial: 10, other: 36 },
  { decade: "2005", tech: 15, energy: 12, financials: 22, industrial: 11, other: 40 },
  { decade: "2010", tech: 19, energy: 11, financials: 16, industrial: 10, other: 44 },
  { decade: "2015", tech: 21, energy: 7, financials: 16, industrial: 10, other: 46 },
  { decade: "2020", tech: 28, energy: 3, financials: 11, industrial: 8, other: 50 },
  { decade: "2025", tech: 33, energy: 4, financials: 13, industrial: 8, other: 42 },
];

const moatErosion = [
  { year: "2024", supplierMoat: 85, processMoat: 80, brandMoat: 95 },
  { year: "2025", supplierMoat: 78, processMoat: 72, brandMoat: 94 },
  { year: "2026", supplierMoat: 68, processMoat: 60, brandMoat: 92 },
  { year: "2027", supplierMoat: 55, processMoat: 45, brandMoat: 90 },
  { year: "2028", supplierMoat: 42, processMoat: 32, brandMoat: 88 },
  { year: "2029", supplierMoat: 32, processMoat: 22, brandMoat: 85 },
  { year: "2030", supplierMoat: 25, processMoat: 15, brandMoat: 82 },
];

// -- CUSTOM TOOLTIP --

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div
      style={{
        background: "rgba(15,18,28,0.96)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "12px 16px",
        fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
        fontSize: 13,
        color: "#c8cdd8",
        backdropFilter: "blur(12px)",
        minWidth: 160,
      }}
    >
      <div style={{ fontWeight: 600, color: "#f0f2f5", marginBottom: 6 }}>
        {label}
      </div>
      {payload.map((p, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            marginTop: 3,
          }}
        >
          <span style={{ color: p.color || "#94a3b8" }}>{p.name}</span>
          <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
            {typeof p.value === "number" ? p.value.toFixed(1) : p.value}
            {p.unit || "%"}
          </span>
        </div>
      ))}
    </div>
  );
};

// -- SECTION COMPONENT --

const Section = ({ title, subtitle, children }) => (
  <div style={{ marginBottom: 56 }}>
    <h2
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 24,
        fontWeight: 700,
        color: "#f0f2f5",
        margin: 0,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        style={{
          fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
          fontSize: 14,
          color: "#7a8299",
          marginTop: 6,
          marginBottom: 0,
          lineHeight: 1.5,
          maxWidth: 640,
        }}
      >
        {subtitle}
      </p>
    )}
    <div style={{ marginTop: 24 }}>{children}</div>
  </div>
);

// -- STAT CARD --

const Stat = ({ value, label, color = "#f0f2f5", sub }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12,
      padding: "20px 24px",
      flex: 1,
      minWidth: 160,
    }}
  >
    <div
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 32,
        fontWeight: 700,
        color,
        letterSpacing: "-0.03em",
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontSize: 13,
        color: "#7a8299",
        marginTop: 6,
        fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
      }}
    >
      {label}
    </div>
    {sub && (
      <div style={{ fontSize: 11, color: "#555d70", marginTop: 4 }}>{sub}</div>
    )}
  </div>
);

// -- TAB --

const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: active ? "rgba(255,255,255,0.08)" : "transparent",
      border: active
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid transparent",
      borderRadius: 8,
      padding: "8px 18px",
      color: active ? "#f0f2f5" : "#64708a",
      fontSize: 13,
      fontWeight: active ? 600 : 400,
      cursor: "pointer",
      fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
      transition: "all 0.2s",
    }}
  >
    {label}
  </button>
);

// -- MAIN --

export default function AnnualEffect() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Margin Timeline",
    "Annual Effect Breakdown",
    "Moat Erosion",
    "Tech Share (50yr)",
  ];

  return (
    <div
      style={{
        background: "#0b0e16",
        minHeight: "100vh",
        color: "#e2e8f0",
        fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
        padding: "40px 28px 80px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div style={{ maxWidth: 960, margin: "0 auto", marginBottom: 48 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#4a6cf7",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          AI Disruption Analysis
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 42,
            fontWeight: 900,
            color: "#f0f2f5",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          The Annual Effect
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#7a8299",
            marginTop: 12,
            lineHeight: 1.6,
            maxWidth: 640,
          }}
        >
          Short-term margin bumps from AI/automation erode as competitors adopt
          the same tools. The premium isn't in the robot — it's in what the
          robot can't replicate.
        </p>

        {/* Summary Stats */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          <Stat
            value={`+${totalShort.toFixed(1)}%`}
            label="Short-Term Net Margin Bump"
            color="#22c55e"
            sub="Years 1–3 (early adopter advantage)"
          />
          <Stat
            value={totalLong >= 0 ? `+${totalLong.toFixed(1)}%` : `${totalLong.toFixed(1)}%`}
            label="Long-Term Steady-State Effect"
            color={totalLong >= 0 ? "#f59e0b" : "#ef4444"}
            sub="Years 5–10 (after industry diffusion)"
          />
          <Stat
            value={`${(totalShort - totalLong).toFixed(1)}%`}
            label="Competed Away"
            color="#ef4444"
            sub="Margin advantage lost to diffusion"
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t, i) => (
            <Tab
              key={t}
              label={t}
              active={activeTab === i}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>

        {/* TAB 0: Margin Timeline */}
        {activeTab === 0 && (
          <Section
            title="Margin Trajectory: Early Adopter vs. Industry"
            subtitle="The early adopter (e.g., Chipotle) gets a 3–7 point margin advantage in years 1–3 as AI/automation rolls out. By years 5–8, competitors adopt similar tech and the gap compresses to ~1 point. The industry baseline rises, but nobody keeps the windfall."
          >
            <ResponsiveContainer width="100%" height={380}>
              <ComposedChart data={marginTimeline}>
                <defs>
                  <linearGradient
                    id="earlyGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="industryGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#64748b" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#64748b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[10, 36]}
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  x="2027"
                  stroke="#f59e0b"
                  strokeDasharray="4 4"
                  strokeOpacity={0.5}
                  label={{
                    value: "Peak Advantage",
                    position: "top",
                    fill: "#f59e0b",
                    fontSize: 11,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="earlyAdopter"
                  name="Early Adopter"
                  stroke="#22c55e"
                  strokeWidth={2.5}
                  fill="url(#earlyGrad)"
                  dot={{ r: 4, fill: "#22c55e", stroke: "#0b0e16", strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="industry"
                  name="Industry Average"
                  stroke="#64748b"
                  strokeWidth={2}
                  fill="url(#industryGrad)"
                  dot={{ r: 3, fill: "#64748b", stroke: "#0b0e16", strokeWidth: 2 }}
                  strokeDasharray="5 3"
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12, color: "#94a3b8" }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Spread mini chart */}
            <div style={{ marginTop: 32 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#c8cdd8",
                  marginBottom: 12,
                }}
              >
                Competitive Advantage Spread (Early Adopter − Industry)
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={spreadData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                  />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#64708a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64708a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}pp`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="spread" name="Spread" radius={[4, 4, 0, 0]}>
                    {spreadData.map((d, i) => (
                      <Cell
                        key={i}
                        fill={
                          d.spread > 10
                            ? "#22c55e"
                            : d.spread > 5
                            ? "#f59e0b"
                            : "#ef4444"
                        }
                        fillOpacity={0.75}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>
        )}

        {/* TAB 1: Annual Effect Breakdown */}
        {activeTab === 1 && (
          <Section
            title="Annual Margin Effect: Where It Comes From"
            subtitle="Short-term gains are dominated by labor savings (+5.2pp). Long-term, price competition (−3.2pp) and capex (−2.4pp) eat most of the advantage as automation becomes table stakes."
          >
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: "0 4px",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "8px 16px",
                        color: "#64708a",
                        fontWeight: 500,
                        fontSize: 12,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      Driver
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "8px 16px",
                        color: "#22c55e",
                        fontWeight: 500,
                        fontSize: 12,
                        letterSpacing: 1,
                      }}
                    >
                      SHORT-TERM (Yr 1–3)
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "8px 16px",
                        color: "#f59e0b",
                        fontWeight: 500,
                        fontSize: 12,
                        letterSpacing: 1,
                      }}
                    >
                      LONG-TERM (Yr 5–10)
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "8px 16px",
                        color: "#64708a",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      VISUAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {annualBump.map((d, i) => (
                    <tr
                      key={i}
                      style={{
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.02)"
                            : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          fontWeight: 500,
                          borderRadius: "8px 0 0 8px",
                        }}
                      >
                        <span style={{ marginRight: 8 }}>{d.icon}</span>
                        {d.category}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "12px 16px",
                          fontWeight: 600,
                          fontVariantNumeric: "tabular-nums",
                          color: d.shortTerm >= 0 ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {d.shortTerm >= 0 ? "+" : ""}
                        {d.shortTerm.toFixed(1)}pp
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "12px 16px",
                          fontWeight: 600,
                          fontVariantNumeric: "tabular-nums",
                          color: d.longTerm >= 0 ? "#f59e0b" : "#ef4444",
                        }}
                      >
                        {d.longTerm >= 0 ? "+" : ""}
                        {d.longTerm.toFixed(1)}pp
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          textAlign: "center",
                          borderRadius: "0 8px 8px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              width: Math.abs(d.shortTerm) * 14,
                              height: 8,
                              borderRadius: 4,
                              background:
                                d.shortTerm >= 0 ? "#22c55e" : "#ef4444",
                              opacity: 0.7,
                            }}
                          />
                          <span style={{ color: "#3a4050", fontSize: 11 }}>
                            →
                          </span>
                          <div
                            style={{
                              width: Math.abs(d.longTerm) * 14,
                              height: 8,
                              borderRadius: 4,
                              background:
                                d.longTerm >= 0 ? "#f59e0b" : "#ef4444",
                              opacity: 0.5,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Totals */}
                  <tr
                    style={{
                      borderTop: "2px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 16px 12px",
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      NET ANNUAL EFFECT
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "16px 16px 12px",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#22c55e",
                      }}
                    >
                      +{totalShort.toFixed(1)}pp
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "16px 16px 12px",
                        fontWeight: 700,
                        fontSize: 18,
                        color: totalLong >= 0 ? "#f59e0b" : "#ef4444",
                      }}
                    >
                      {totalLong >= 0 ? "+" : ""}
                      {totalLong.toFixed(1)}pp
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Waterfall-style bar */}
            <div style={{ marginTop: 32 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#c8cdd8",
                  marginBottom: 12,
                }}
              >
                Short-Term vs Long-Term by Category
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={annualBump} layout="vertical" barGap={4}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    tick={{ fill: "#64708a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v > 0 ? "+" : ""}${v}pp`}
                  />
                  <YAxis
                    dataKey="category"
                    type="category"
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={130}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine x={0} stroke="rgba(255,255,255,0.1)" />
                  <Bar
                    dataKey="shortTerm"
                    name="Short-Term"
                    fill="#22c55e"
                    fillOpacity={0.8}
                    radius={[0, 4, 4, 0]}
                    barSize={14}
                  />
                  <Bar
                    dataKey="longTerm"
                    name="Long-Term"
                    fill="#f59e0b"
                    fillOpacity={0.6}
                    radius={[0, 4, 4, 0]}
                    barSize={14}
                  />
                  <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ fontSize: 12, color: "#94a3b8" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>
        )}

        {/* TAB 2: Moat Erosion */}
        {activeTab === 2 && (
          <Section
            title="Moat Durability Under AI Diffusion"
            subtitle="Supplier and process advantages — the two classic margin justifications — erode fastest as AI tools become off-the-shelf. Brand remains the most durable moat, which is the real premium."
          >
            <ResponsiveContainer width="100%" height={360}>
              <LineChart data={moatErosion}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12 }}
                />
                <Line
                  type="monotone"
                  dataKey="brandMoat"
                  name="Brand / Location / Loyalty"
                  stroke="#4a6cf7"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#4a6cf7", stroke: "#0b0e16", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="supplierMoat"
                  name="Supplier / Procurement Edge"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#f59e0b", stroke: "#0b0e16", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="processMoat"
                  name="Process / Operations Edge"
                  stroke="#ef4444"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#ef4444", stroke: "#0b0e16", strokeWidth: 2 }}
                  strokeDasharray="6 3"
                />
              </LineChart>
            </ResponsiveContainer>

            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 24,
                flexWrap: "wrap",
              }}
            >
              <Stat
                value="−65%"
                label="Process Moat by 2030"
                color="#ef4444"
                sub="AI scheduling, robotics become products"
              />
              <Stat
                value="−60%"
                label="Supplier Moat by 2030"
                color="#f59e0b"
                sub="AI procurement tools level the field"
              />
              <Stat
                value="−13%"
                label="Brand Moat by 2030"
                color="#4a6cf7"
                sub="The only durable premium"
              />
            </div>
          </Section>
        )}

        {/* TAB 3: Tech Share */}
        {activeTab === 3 && (
          <Section
            title="'Tech Stocks' as % of S&P 500: 50 Years"
            subtitle="Tech went from ~4% of U.S. equity value in 1975 to ~33% today. The term 'tech stocks' now encompasses a third of the market — which is exactly why the label is useless for portfolio construction."
          >
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={techShareHistory}>
                <defs>
                  <linearGradient id="techGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a6cf7" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4a6cf7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="energyGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                />
                <XAxis
                  dataKey="decade"
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 40]}
                  tick={{ fill: "#64708a", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12 }}
                />
                <ReferenceLine
                  x="2000"
                  stroke="#ef4444"
                  strokeDasharray="4 4"
                  strokeOpacity={0.4}
                  label={{
                    value: "Dot-Com Peak",
                    position: "top",
                    fill: "#ef4444",
                    fontSize: 10,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="tech"
                  name="Tech (IT + Platforms)"
                  stroke="#4a6cf7"
                  strokeWidth={2.5}
                  fill="url(#techGrad)"
                  dot={{ r: 4, fill: "#4a6cf7", stroke: "#0b0e16", strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="energy"
                  name="Energy"
                  stroke="#f59e0b"
                  strokeWidth={1.5}
                  fill="url(#energyGrad)"
                  dot={{ r: 3, fill: "#f59e0b", stroke: "#0b0e16", strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="financials"
                  name="Financials"
                  stroke="#22c55e"
                  strokeWidth={1.5}
                  fill="url(#finGrad)"
                  dot={{ r: 3, fill: "#22c55e", stroke: "#0b0e16", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                background: "rgba(74,108,247,0.06)",
                border: "1px solid rgba(74,108,247,0.15)",
                borderRadius: 10,
                fontSize: 13,
                color: "#94a3b8",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#c8cdd8" }}>Key insight:</strong> "Tech
              stocks" went from 4% to 33% of the market over 50 years. At a
              third of equity value, saying "I'm overweight tech" is almost
              meaningless — you need to specify semis vs. SaaS vs. platforms
              vs. applied vertical tech to say anything useful about your
              actual risk exposure.
            </div>
          </Section>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 11,
            color: "#3a4050",
            textAlign: "center",
          }}
        >
          Shanklin · AIC Holdings · AI Disruption Analysis · Feb 2026
        </div>
      </div>
    </div>
  );
}
