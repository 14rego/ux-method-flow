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
            <a href={`/detail/${unique}`}>{title}</a>
          </h2>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="card bg-light border-warning">
                  <div className="card-body">
                    <p className="card-description">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <table className="table table-sm">
                  <tbody>
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
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Steps</th>
                      <td className="text-right">
                        <ul className="card-method-steps">
                          {stages.Explore ? <li>Explore</li> : null}
                          {stages.Imagine ? <li>Imagine</li> : null}
                          {stages.Test ? <li>Test</li> : null}
                        </ul>
                      </td>
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
                <br />
                <div className="accordion">
                  <Accordion title="Basics" unique={`${unique}-basic`}>
                    <div className="card-method-basics-whens">
                      <h4>When to use:</h4>
                      <ul>
                        {basics.whens.map((w, index) => (
                          <li key={index}>{w}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-helps">
                      <h4>Helps to answer:</h4>
                      <ul>
                        {basics.helps.map((h, index) => (
                          <li key={index}>{h}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-tips">
                      <h4>Tips:</h4>
                      <ul>
                        {basics.tips.map((t, index) => (
                          <li key={index}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-method-basics-resources">
                      <h4>Resources:</h4>
                      <ul>
                        {basics.resources.map((r, index) => (
                          <li key={index}>{r}</li>
                        ))}
                        {documents.map((d, index) => (
                          <li key={index}>
                            <a
                              href={
                                d.url == "file.pdf"
                                  ? null
                                  : `/documents/${d.url}`
                              }
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {d.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Accordion>
                  {instructions.length > 0 ? (
                    <Accordion title="Instructions" unique={`${unique}-ins`}>
                      <ol>
                        {instructions.map((i, index) => (
                          <li key={index}>
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
