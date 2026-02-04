import { useState } from "react";

const chainData = [
  {
    id: "tax",
    title: "Tax Preparation",
    era: "2020s",
    disruptor: "Local AI",
    disruptorIcon: "🤖",
    color: "#22c55e",
    accentGradient: "linear-gradient(135deg, #064e3b, #14532d)",
    borderColor: "rgba(34, 197, 94, 0.2)",
    glowColor: "rgba(34, 197, 94, 0.15)",
    before: {
      label: "Enterprise Software Stack",
      nodes: [
        { icon: "❄️", name: "Snowflake", desc: "Data warehouse & compute", margin: "+30%" },
        { icon: "☁️", name: "Salesforce", desc: "Tableau visualization", margin: "+25%" },
        { icon: "📊", name: "Thomson Reuters", desc: "Compliance & data tools", margin: "+35%" },
        { icon: "🏢", name: "Accounting Firm", desc: "4,500 clients served", margin: "+40%" },
        { icon: "👤", name: "You", desc: "Pays $2,000 for tax prep" },
      ],
      arrows: ["Sells DB", "Sells viz", "Sells suite", "Bills"],
      stats: ["5 companies extract margin", "Months of sales cycles per link"],
    },
    after: {
      label: "AI-Native Stack",
      nodes: [
        { icon: "👤", name: "You", desc: "Upload W-2s, 1099s" },
        { icon: "🤖", name: "Local AI", desc: "Applies tax code, generates return", highlight: true },
        { icon: "✅", name: "Accountant", desc: "$200 review & sign-off" },
      ],
      arrows: ["Feeds docs", "Final review"],
      stats: ["3 nodes, zero intermediary margin", "~90% cost reduction"],
    },
  },
  {
    id: "phonebook",
    title: "Phone Books",
    era: "1990s–2000s",
    disruptor: "Search Engines",
    disruptorIcon: "🔍",
    color: "#3b82f6",
    accentGradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    glowColor: "rgba(59, 130, 246, 0.15)",
    before: {
      label: "Yellow Pages Value Chain",
      nodes: [
        { icon: "🏪", name: "Local Businesses", desc: "Pay for display ads", margin: "+Ad fees" },
        { icon: "📞", name: "Telco (AT&T)", desc: "Owns phone number data", margin: "+30%" },
        { icon: "🖨️", name: "Printers", desc: "Massive print runs yearly", margin: "+20%" },
        { icon: "🚚", name: "Distributors", desc: "Door-to-door delivery", margin: "+15%" },
        { icon: "👤", name: "You", desc: "Flips through 1,200 pages" },
      ],
      arrows: ["Buy ads", "License data", "Print millions", "Deliver"],
      stats: ["$14B/yr industry at peak", "Updated once per year"],
    },
    after: {
      label: "Internet-Native Stack",
      nodes: [
        { icon: "👤", name: "You", desc: "Type a query" },
        { icon: "🔍", name: "Google", desc: "Instant results, reviews, maps", highlight: true },
        { icon: "🏪", name: "Business", desc: "Free listing, direct contact" },
      ],
      arrows: ["Search", "Click to call"],
      stats: ["Real-time, always current", "Yellow Pages revenue → $0"],
    },
  },
  {
    id: "encyclopedia",
    title: "Encyclopedias",
    era: "2000s",
    disruptor: "Wikipedia + Web",
    disruptorIcon: "🌐",
    color: "#a855f7",
    accentGradient: "linear-gradient(135deg, #3b0764, #581c87)",
    borderColor: "rgba(168, 85, 247, 0.2)",
    glowColor: "rgba(168, 85, 247, 0.15)",
    before: {
      label: "Encyclopedia Britannica Value Chain",
      nodes: [
        { icon: "🎓", name: "Academics", desc: "Write & review articles", margin: "Per-article" },
        { icon: "📝", name: "Editorial Board", desc: "Multi-year revision cycles", margin: "+25%" },
        { icon: "🖨️", name: "Publisher", desc: "32-volume print sets", margin: "+35%" },
        { icon: "🚪", name: "Door-to-Door Sales", desc: "4,000 commissioned reps", margin: "+40%" },
        { icon: "👤", name: "You", desc: "Pays $1,400 for a set" },
      ],
      arrows: ["Submit", "Edit & approve", "Print & bind", "Hard sell"],
      stats: ["$1,400 per set ($650M/yr peak)", "Outdated before delivery"],
    },
    after: {
      label: "Internet-Native Stack",
      nodes: [
        { icon: "👤", name: "You", desc: "Search any topic" },
        { icon: "🌐", name: "Wikipedia", desc: "300M+ articles, updated live", highlight: true },
        { icon: "🎓", name: "Volunteer Editors", desc: "Free, distributed, global" },
      ],
      arrows: ["Search", "Community-edited"],
      stats: ["Free, instant, 100x more content", "Britannica print → discontinued 2012"],
    },
  },
  {
    id: "telegram",
    title: "Telegrams",
    era: "1990s–2000s",
    disruptor: "Email + SMS",
    disruptorIcon: "📧",
    color: "#f59e0b",
    accentGradient: "linear-gradient(135deg, #78350f, #92400e)",
    borderColor: "rgba(245, 158, 11, 0.2)",
    glowColor: "rgba(245, 158, 11, 0.15)",
    before: {
      label: "Western Union Telegram Chain",
      nodes: [
        { icon: "👤", name: "Sender", desc: "Visits telegram office" },
        { icon: "🏛️", name: "WU Office", desc: "Clerk encodes message", margin: "+Per word" },
        { icon: "⚡", name: "Telegraph Network", desc: "Morse code relay stations", margin: "+30%" },
        { icon: "🏛️", name: "Receiving Office", desc: "Decode & transcribe", margin: "+20%" },
        { icon: "🚲", name: "Messenger", desc: "Hand-delivers to door", margin: "+Delivery" },
        { icon: "👤", name: "Recipient", desc: "Pays per word received" },
      ],
      arrows: ["Dictate", "Encode", "Relay", "Decode", "Deliver"],
      stats: ["Charged per word", "Hours to days for delivery"],
    },
    after: {
      label: "Internet-Native Stack",
      nodes: [
        { icon: "👤", name: "You", desc: "Type a message" },
        { icon: "📧", name: "Email / SMS", desc: "Instant, unlimited length, free", highlight: true },
        { icon: "👤", name: "Recipient", desc: "Reads instantly, anywhere" },
      ],
      arrows: ["Send", "Instant"],
      stats: ["Free, instant, unlimited", "Western Union telegram → dead 2006"],
    },
  },
  {
    id: "mail",
    title: "Physical Mail",
    era: "2000s–2020s",
    disruptor: "Digital Communication",
    disruptorIcon: "💬",
    color: "#ef4444",
    accentGradient: "linear-gradient(135deg, #7f1d1d, #991b1b)",
    borderColor: "rgba(239, 68, 68, 0.2)",
    glowColor: "rgba(239, 68, 68, 0.15)",
    before: {
      label: "USPS First-Class Mail Chain",
      nodes: [
        { icon: "👤", name: "Sender", desc: "Write, stamp, mailbox" },
        { icon: "📮", name: "Local Post Office", desc: "Sort by region", margin: "+Postage" },
        { icon: "✈️", name: "Distribution Center", desc: "Cross-country routing", margin: "+Logistics" },
        { icon: "📮", name: "Dest. Post Office", desc: "Sort for carriers", margin: "+Handling" },
        { icon: "🚶", name: "Mail Carrier", desc: "Door-to-door delivery", margin: "+Labor" },
        { icon: "👤", name: "Recipient", desc: "Gets letter 3–5 days later" },
      ],
      arrows: ["Drop off", "Sort", "Route", "Sort", "Deliver"],
      stats: ["$0.68/letter, 3-5 day delivery", "Peak: 213B pieces/yr (2006)"],
    },
    after: {
      label: "Digital-Native Stack",
      nodes: [
        { icon: "👤", name: "You", desc: "Type or tap" },
        { icon: "💬", name: "Email / Chat / PDF", desc: "Instant, free, multimedia", highlight: true },
        { icon: "👤", name: "Recipient", desc: "Reads instantly, replies instantly" },
      ],
      arrows: ["Send", "Instant"],
      stats: ["Free, instant, with attachments", "First-class mail volume down 47% since 2006"],
    },
  },
];

const ChainNode = ({ icon, name, desc, margin, isActive, delay, highlight, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      opacity: isActive ? 1 : 0.2,
      transform: isActive ? "scale(1)" : "scale(0.92)",
      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      transitionDelay: `${delay}ms`,
      position: "relative",
      minWidth: "80px",
      maxWidth: "90px",
    }}
  >
    <div
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "16px",
        background: highlight && isActive
          ? `linear-gradient(135deg, ${accentColor}22, ${accentColor}33)`
          : isActive
            ? "linear-gradient(135deg, #1a1a2e, #16213e)"
            : "#1a1a2e44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "26px",
        border: highlight && isActive
          ? `1.5px solid ${accentColor}44`
          : isActive
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.03)",
        boxShadow: highlight && isActive
          ? `0 4px 24px ${accentColor}22`
          : isActive
            ? "0 4px 16px rgba(0,0,0,0.3)"
            : "none",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {icon}
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: highlight && isActive ? accentColor : isActive ? "#e2e8f0" : "#e2e8f033",
          letterSpacing: "0.01em",
          transition: "color 0.5s",
          transitionDelay: `${delay}ms`,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "9px",
          color: isActive ? "#94a3b8" : "#94a3b833",
          marginTop: "2px",
          lineHeight: 1.3,
          transition: "color 0.5s",
          transitionDelay: `${delay}ms`,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {desc}
      </div>
    </div>
    {margin && (
      <div
        style={{
          position: "absolute",
          bottom: "-18px",
          fontSize: "8px",
          color: isActive ? "#f59e0b" : "#f59e0b22",
          fontWeight: 600,
          fontFamily: "'DM Mono', monospace",
          transition: "color 0.5s",
          transitionDelay: `${delay}ms`,
          whiteSpace: "nowrap",
        }}
      >
        {margin}
      </div>
    )}
  </div>
);

const SmallArrow = ({ isActive, delay, label }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
      alignSelf: "flex-start",
      marginTop: "22px",
      minWidth: "36px",
    }}
  >
    {label && (
      <div
        style={{
          fontSize: "7px",
          color: isActive ? "#64748b" : "#64748b22",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          transition: "color 0.4s",
          transitionDelay: `${delay}ms`,
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: "50px",
        }}
      >
        {label}
      </div>
    )}
    <svg
      width="32"
      height="12"
      viewBox="0 0 32 12"
      style={{
        opacity: isActive ? 0.5 : 0.08,
        transition: "opacity 0.4s",
        transitionDelay: `${delay}ms`,
      }}
    >
      <line x1="0" y1="6" x2="24" y2="6" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
      <polygon points="24,3 30,6 24,9" fill="#64748b" />
    </svg>
  </div>
);

const StrikeThrough = ({ isVisible }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "2%",
      right: "2%",
      height: "2.5px",
      background: "linear-gradient(90deg, transparent 0%, #ef4444 8%, #ef4444 92%, transparent 100%)",
      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
      transitionDelay: "150ms",
      zIndex: 10,
      borderRadius: "2px",
      boxShadow: isVisible ? "0 0 16px rgba(239,68,68,0.35)" : "none",
    }}
  />
);

const SingleDiagram = ({ chain, isExpanded, onToggle }) => {
  const [view, setView] = useState("before");
  const isBefore = view === "before";
  const isAfter = view === "after";

  return (
    <div
      style={{
        background: "rgba(15, 15, 25, 0.6)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
    >
      {/* Header - always visible */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#e2e8f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: chain.accentGradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              border: `1px solid ${chain.borderColor}`,
            }}
          >
            {chain.disruptorIcon}
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                color: "#e2e8f0",
              }}
            >
              {chain.title}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#64748b",
                fontFamily: "'DM Mono', monospace",
                marginTop: "2px",
              }}
            >
              {chain.era} · Disrupted by {chain.disruptor}
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#64748b",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          ▾
        </div>
      </button>

      {/* Expandable content */}
      <div
        style={{
          maxHeight: isExpanded ? "600px" : "0px",
          opacity: isExpanded ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          padding: isExpanded ? "0 28px 28px" : "0 28px",
        }}
      >
        {/* Toggle */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "24px",
            background: "#1a1a2e",
            borderRadius: "10px",
            padding: "3px",
            border: "1px solid rgba(255,255,255,0.05)",
            width: "fit-content",
          }}
        >
          {["before", "after"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 20px",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: view === v ? "#e2e8f0" : "#64748b",
                background: view === v ? "linear-gradient(135deg, #16213e, #1a1a3e)" : "transparent",
                boxShadow: view === v ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {v === "before" ? "Before" : "After"}
            </button>
          ))}
        </div>

        {/* BEFORE */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "9px",
              fontFamily: "'DM Mono', monospace",
              color: isBefore ? "#94a3b8" : "#94a3b833",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
              transition: "color 0.4s",
            }}
          >
            {chain.before.label}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "4px",
              position: "relative",
              padding: "16px 12px 32px",
              background: isBefore ? "rgba(26,26,46,0.35)" : "rgba(26,26,46,0.12)",
              borderRadius: "14px",
              border: isBefore ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0.02)",
              transition: "all 0.5s",
              overflowX: "auto",
            }}
          >
            <StrikeThrough isVisible={isAfter} />
            {chain.before.nodes.map((node, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                <ChainNode
                  icon={node.icon}
                  name={node.name}
                  desc={node.desc}
                  margin={node.margin}
                  isActive={isBefore}
                  delay={i * 60}
                  accentColor={chain.color}
                />
                {i < chain.before.nodes.length - 1 && (
                  <SmallArrow
                    isActive={isBefore}
                    delay={i * 60 + 30}
                    label={chain.before.arrows[i]}
                  />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "10px", flexWrap: "wrap" }}>
            {chain.before.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: isBefore ? 1 : 0.15,
                  transition: "opacity 0.4s",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                <span style={{ fontSize: "10px", color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AFTER */}
        <div>
          <div
            style={{
              fontSize: "9px",
              fontFamily: "'DM Mono', monospace",
              color: isAfter ? "#94a3b8" : "#94a3b833",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
              transition: "color 0.4s",
            }}
          >
            {chain.after.label}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "4px",
              padding: "16px 12px 32px",
              background: isAfter ? "rgba(26,26,46,0.35)" : "rgba(26,26,46,0.12)",
              borderRadius: "14px",
              border: isAfter
                ? `1px solid ${chain.borderColor}`
                : "1px solid rgba(255,255,255,0.02)",
              transition: "all 0.5s",
              justifyContent: "center",
            }}
          >
            {chain.after.nodes.map((node, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                <ChainNode
                  icon={node.icon}
                  name={node.name}
                  desc={node.desc}
                  isActive={isAfter}
                  delay={i * 80}
                  highlight={node.highlight}
                  accentColor={chain.color}
                />
                {i < chain.after.nodes.length - 1 && (
                  <SmallArrow
                    isActive={isAfter}
                    delay={i * 80 + 40}
                    label={chain.after.arrows[i]}
                  />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "10px", flexWrap: "wrap" }}>
            {chain.after.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: isAfter ? 1 : 0.15,
                  transition: "opacity 0.4s",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: chain.color,
                  }}
                />
                <span style={{ fontSize: "10px", color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ValueChainCollapse() {
  const [expanded, setExpanded] = useState("tax");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a14 0%, #0d1117 50%, #0a0a14 100%)",
        padding: "40px 24px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        rel="stylesheet"
      />

      {/* Grid BG */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#e2e8f0",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Value Chains{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Collapse
            </span>
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: "13px",
              marginTop: "10px",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.02em",
              lineHeight: 1.6,
              maxWidth: "520px",
              margin: "10px auto 0",
            }}
          >
            Every intermediation layer exists because of complexity.
            <br />
            When the complexity vanishes, the chain unwinds.
          </p>
        </div>

        {/* Pattern label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "36px 0 20px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span
            style={{
              fontSize: "9px",
              fontFamily: "'DM Mono', monospace",
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            The Pattern Repeats
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Diagrams */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {chainData.map((chain) => (
            <SingleDiagram
              key={chain.id}
              chain={chain}
              isExpanded={expanded === chain.id}
              onToggle={() => setExpanded(expanded === chain.id ? null : chain.id)}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "28px",
            background: "rgba(15,15,25,0.5)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#94a3b8",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "460px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            "You don't disrupt one company. You evaporate the entire reason the chain existed."
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Phone Books", year: "~2003", color: "#3b82f6" },
              { label: "Encyclopedias", year: "~2005", color: "#a855f7" },
              { label: "Telegrams", year: "~2006", color: "#f59e0b" },
              { label: "Physical Mail", year: "~2010s", color: "#ef4444" },
              { label: "Tax Prep?", year: "~2025", color: "#22c55e" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 8px ${item.color}44`,
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    color: "#94a3b8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#64748b",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
