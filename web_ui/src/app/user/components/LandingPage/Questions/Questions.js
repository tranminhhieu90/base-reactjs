import React from "react";
import "./Questions.scss";
import { LIST_QUESTIONS } from "./contains";
function Questions(props) {
  return (
    <div className="questions" id="questions">
      <div className="questions-title">
        <div>Câu hỏi thường gặp</div>
      </div>
      <div className="questions-body">
        <div className="accordion" id="accordionExample">
          {LIST_QUESTIONS.map((item, index) => {
            return (
              <div key={item.id} className="accordion-item">
                <h2 className="accordion-header" id={item.id}>
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                  </div>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={item.id}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Questions;
