import React from "react";
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import { useState } from "react";

export default function FAQ() {
  const [selected, setSelected] = useState(false);

  const toggle = (i) => {   
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className="faq-main" >
      <div className="faq-back" id="faq-component" ></div>
      <div className="faq-first-text">
        <p>Frequently Asked Question</p>
      </div>
      <div className="faq-second-text" >
        <p>Some Question that may arise in your mind</p>
      </div>
      <div className="faq-wrapper">
        <div className="faq-accordination">
          {data.map((item, i) => (
            <div className="faq-item">
              <div className="faq-title" onClick={() => toggle(i)}>
                <b>{item.question}</b>
                <span>
                  {selected === i ? (
                    <img class="faq-img" src={minus} alt="" />
                  ) : (
                    <img class="faq-img" src={plus} alt="" />
                  )}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    question:
      "How to track a phone number without physical access to the target device?",
    ans: "As was noted earlier, Tracelo doesn’t require physical access to a target phone. All you need to track another person’s location is their relevant phone number. You also don’t have to install any apps on your device, as Tracelo works online. Simply head over to the Tracelo website and type in the phone number you want to locate. The service will send the location request to the target user after you acquire the subscription or activate the trial.",
  },
  {
    question: "What is Tracelo?",
    ans: "As was noted earlier, Tracelo doesn’t require physical access to a target phone. All you need to track another person’s location is their relevant phone number. You also don’t have to install any apps on your device, as Tracelo works online. Simply head over to the Tracelo website and type in the phone number you want to locate. The service will send the location request to the target user after you acquire the subscription or activate the trial.",
  },
  {
    question: "How to track a cell phone number with Tracelo?",
    ans: "As was noted earlier, Tracelo doesn't require physical access to a target phone. All you need to track another person’s location is their relevant phone number. You also don’t have to install any apps on your device, as Tracelo works online. Simply head over to the Tracelo website and type in the phone number you want to locate. The service will send the location request to the target user after you acquire the subscription or activate the trial.",
  },
  {
    question:
      "I want to pay for tracking a phone number, but my payment is declined. What’s now?",
    ans: "As was noted earlier, Tracelo doesn’t require physical access to a target phone. All you need to track another person’s location is their relevant phone number. You also don’t have to install any apps on your device, as Tracelo works online. Simply head over to the Tracelo website and type in the phone number you want to locate. The service will send the location request to the target user after you acquire the subscription or activate the trial.",
  },
  {
    question: "Can I track someone by cell phone number for free?",
    ans: "As was noted earlier, Tracelo doesn’t require physical access to a target phone. All you need to track another person’s location is their relevant phone number. You also don’t have to install any apps on your device, as Tracelo works online. Simply head over to the Tracelo website and type in the phone number you want to locate. The service will send the location request to the target user after you acquire the subscription or activate the trial.",
  },
];
