import React from "react";
import { Accordion } from "./Accordion";
import { Rating } from "./Rating";

class MethodCard extends React.Component {
  render() {
    const {
      id,
      unique,
      title,
      description,
      stages,
      ratings,
      time,
      participants,
      basics,
      keywords,
      instructions,
      documents
    } = this.props;

    return (
      <div id={unique} className={`method-container id${id}`}>
        <div className="card">
          <h2 className="card-header">
            <a href={`/method/${unique}`}>{title}</a>
          </h2>
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <p className="card-description">{description}</p>
              </div>
              <div className="col-md-7">
                <table className="table table-striped table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Steps</th>
                      <td className="text-right">
                        <ul className="card-method-steps">
                          {stages.explore ? <li>explore</li> : null}
                          {stages.imagine ? <li>imagine</li> : null}
                          {stages.test ? <li>test</li> : null}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Simplicity</th>
                      <td className="text-right">
                        <Rating
                          rating={ratings.simplicity}
                          total="5"
                          shape="circle"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Effectiveness</th>
                      <td className="text-right">
                        <Rating
                          rating={ratings.effectiveness}
                          total="5"
                          shape="star"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Time</th>
                      <td className="text-right">{time}</td>
                    </tr>
                    <tr>
                      <th scope="row">Participants</th>
                      <td className="text-right">{participants.join(", ")}</td>
                    </tr>
                    <tr>
                      <th scope="row">Keywords</th>
                      <td className="text-right">{keywords.join(", ")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion">
                  <Accordion title="Basics" unique={`${unique}-basic`}>
                    <div className="card-method-basics-whens">
                      <h4>When to use:</h4>
                      <ul>
                        {basics.whens.map(w => (
                          <li key={w.index}>{w}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-helps">
                      <h4>Helps to answer:</h4>
                      <ul>
                        {basics.helps.map(h => (
                          <li key={h.index}>{h}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-tips">
                      <h4>Tips:</h4>
                      <ul>
                        {basics.tips.map(t => (
                          <li key={t.index}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-resources">
                      <h4>Resources:</h4>
                      <ul>
                        {basics.resources.map(r => (
                          <li key={r.index}>{r}</li>
                        ))}
                        {documents.map(d => (
                          <li key={d.index}>{d.url}</li>
                        ))}
                      </ul>
                    </div>
                  </Accordion>
                  {instructions.length > 0 ? (
                    <Accordion title="Instructions" unique={`${unique}-ins`}>
                      <ol>
                        {instructions.map(i => (
                          <li key={i.index}>
                            <h4>{i.title}</h4>
                            <p>{i.description}</p>
                          </li>
                        ))}
                      </ol>
                    </Accordion>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MethodCard;
