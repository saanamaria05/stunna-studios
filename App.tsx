import React, { useEffect, useState } from "react";

export default function App() {
  const eventDate = new Date("March 6, 2026 19:00:00").getTime();
  const [countdown, setCountdown] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [agreeLiability, setAgreeLiability] = useState(false);
  const [agreeAlcohol, setAgreeAlcohol] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setCountdown("The event has started!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!age || age < 18) {
      alert("You must be 18 or older to attend.");
      return;
    }

    if (!agreeLiability) {
      alert("You must agree to the liability waiver.");
      return;
    }

    if (age >= 21 && !agreeAlcohol) {
      alert("You must agree to the alcohol waiver if you are 21+.");
      return;
    }

    window.location.href = "https://buy.stripe.com/3cI4gz2O04wFd741mwdMI02";
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff9ad5, #ff4da6, #ff66cc)",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{
          fontSize: "42px",
          textAlign: "center",
          background: "linear-gradient(90deg,#ff66cc,#ff1493)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold"
        }}>
          ✨ Sip & Dance ✨
        </h1>

        <h2 style={{ textAlign: "center", marginTop: "-10px" }}>
          Stunna Studios
        </h2>

        <div style={{ margin: "20px 0" }}>
          <img
            src="https://static.wixstatic.com/media/d5a732_ad3a9dbba9ee48c8aae9c86e502d411e~mv2.jpeg"
            alt="Sip and Dance Flyer"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>

        <p><strong>Friday, March 6th, 2026</strong></p>
        <p>7:00 PM – 8:30 PM</p>
        <p>334 Harris Hill Rd.</p>
        <p><strong>$25 – Payment Required to Reserve Spot</strong></p>
        <p><strong>ONLY 15 SPOTS AVAILABLE</strong></p>
        <p style={{ color: "red" }}><strong>NO REFUNDS – ALL SALES FINAL</strong></p>

        <p style={{ fontWeight: "bold" }}>{countdown}</p>

        <form onSubmit={validateForm}>
          <input placeholder="First Name" required style={inputStyle} />
          <input placeholder="Last Name" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input placeholder="Phone" required style={inputStyle} />
          <input
            type="number"
            placeholder="Age"
            required
            style={inputStyle}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <input placeholder="Medical Conditions" required style={inputStyle} />
          <input placeholder="Emergency Contact Name" required style={inputStyle} />
          <input placeholder="Emergency Contact Phone" required style={inputStyle} />

          <div style={{
            maxHeight: "200px",
            overflowY: "auto",
            background: "#fff0f6",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            fontSize: "12px",
            border: "1px solid #ffb6d9"
          }}>
            <strong>LIABILITY WAIVER & ASSUMPTION OF RISK (REQUIRED)</strong>
            <p>
              I voluntarily assume all risks and release STUNNA STUDIOS BY SAANA from any and all claims arising from participation.
            </p>
          </div>

          <label>
            <input
              type="checkbox"
              checked={agreeLiability}
              onChange={(e) => setAgreeLiability(e.target.checked)}
            />
            I agree to the Liability Waiver.
          </label>

          {age !== null && age >= 21 && (
            <>
              <div style={{
                maxHeight: "150px",
                overflowY: "auto",
                background: "#ffe6f2",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
                fontSize: "12px",
                border: "1px solid #ff85c1"
              }}>
                <strong>ALCOHOL WAIVER (21+ REQUIRED)</strong>
                <p>
                  I accept full responsibility for my actions and any property damage.
                </p>
              </div>

              <label>
                <input
                  type="checkbox"
                  checked={agreeAlcohol}
                  onChange={(e) => setAgreeAlcohol(e.target.checked)}
                />
                I agree to the Alcohol Waiver (21+).
              </label>
            </>
          )}

          <button type="submit" style={{
            background: "#ff1493",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%"
          }}>
            Pay $25 & Register
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};
