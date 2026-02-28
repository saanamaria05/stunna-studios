import { useEffect, useState } from "react";

export default function SipAndDance() {
  const eventDate = new Date("March 6, 2026 19:00:00").getTime();
  const [countdown, setCountdown] = useState("");
  const [age, setAge] = useState(null);

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

  const validateForm = (e) => {
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
          <input name="firstName" placeholder="First Name" required style={inputStyle} />
          <input name="lastName" placeholder="Last Name" required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" required style={inputStyle} />
          <input name="phone" placeholder="Phone" required style={inputStyle} />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            style={inputStyle}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <input name="medicalConditions" placeholder="Medical Conditions" required style={inputStyle} />
          <input name="emergencyName" placeholder="Emergency Contact Name" required style={inputStyle} />
          <input name="emergencyPhone" placeholder="Emergency Contact Phone" required style={inputStyle} />

          <div style={{
            background: "#fff0f6",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            fontSize: "14px",
            lineHeight: "1.6",
            border: "1px solid #ffb6d9"
          }}>
            <strong>LIABILITY WAIVER & ASSUMPTION OF RISK (REQUIRED)</strong>
            <p>
              I acknowledge that participation in dance classes, rehearsals, workshops, intensives, performances, and heels classes by STUNNA STUDIOS BY SAANA involves inherent risks including, but not limited to, slips, falls, joint injury, muscle strain, overexertion, balance challenges, elevated footwear, and physical impact.
            </p>
            <p>
              I voluntarily assume all risks, known and unknown, and certify that I am physically able to participate. I understand it is my responsibility to consult a physician prior to participation if I have any medical concerns. I agree to immediately stop participating if I experience pain, dizziness, discomfort, or any unusual physical symptoms.
            </p>
            <p>
              I hereby release, waive, discharge, and hold harmless STUNNA STUDIOS BY SAANA, its owner, instructors, staff, contractors, affiliates, and facility providers from any and all claims, demands, causes of action, damages, losses, or liabilities arising out of or related to my participation, including those caused by negligence, to the fullest extent permitted by law.
            </p>
            <p>
              I understand that the studio is not responsible for lost, stolen, or damaged personal property.
            </p>
          </div>

          <label style={{ display: "block", marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={agreeLiability}
              onChange={(e) => setAgreeLiability(e.target.checked)}
            /> I agree to the Liability Waiver.
          </label>

          {age && age >= 21 && (
            <>
              <div style={{
                background: "#ffe6f2",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
                fontSize: "14px",
                lineHeight: "1.6",
                border: "1px solid #ff85c1"
              }}>
                <strong>ALCOHOL WAIVER (21+ REQUIRED)</strong>
                <p>
                  I confirm that I am 21 years of age or older and legally permitted to consume alcohol. If I choose to consume alcohol before, during, or after this event, I do so voluntarily and at my own risk.
                </p>
                <p>
                  I accept full responsibility for my behavior at all times. Any disorderly conduct, unsafe actions, intoxication-related incidents, injury to myself or others, or damage to property caused by me is solely my responsibility.
                </p>
                <p>
                  I agree to reimburse and indemnify STUNNA STUDIOS BY SAANA for any and all damages to the studio, venue, equipment, furnishings, or third-party property resulting from my actions. I understand that failure to act responsibly may result in immediate removal from the event without refund.
                </p>
              </div>

              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  type="checkbox"
                  checked={agreeAlcohol}
                  onChange={(e) => setAgreeAlcohol(e.target.checked)}
                /> I agree to the Alcohol Waiver (21+).
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

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};
